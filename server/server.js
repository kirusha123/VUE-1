const express = require("express");
const {validationResult, check} = require("express-validator")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const config = require("config")
const Todo = require("./models/Todo")
const app = express();

const port = config.get("port") || 5050;


const fake_data = 
[
    {id:1, title:"Amogus1", completed: true},
    {id:2, title:"Amogus2", completed: true},
    {id:3, title:"Amogus3", completed: false},
    {id:4, title:"Amogus4", completed: true},
    {id:5, title:"Amogus5", completed: true},
]

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


app.get("/",(req, res)=>{
    res.redirect("/api")
});

app.get("/api",async (req, res)=>{
    res.send("<h1>Api:</h1><h2>api/get/todos</h2><h2>api/get/todo/:id</h2>");
});

app.get("/api/get/todos", async (req, res)=>{
    try{
        const todos = await Todo.find();
        if (!todos){
            return res.send(JSON.stringify());
        }
        console.log(todos)
        res.send(JSON.stringify(todos));
    }catch(e){
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message)
    }
    
});

app.get("/api/get/todo/:id", async (req, res)=>{
    try {
        const todo = await Todo.findOne({t_id:req.params.id})
        if (todo){
            console.log(todo)
            return res.status(200).json(todo);
        }else{
            return res.json();
        }
    } catch (e) {
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message)
    }
});

app.post("/api/post/todo", 
[
    check('id', "incorrect id").isLength({min:1}),
    check('title', "incorrect title").isLength({min:1}),
    check('completed', "incorrect completed").isBoolean()
],
async (req, res)=>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:"Incorrect todo data"
            })
        }
        console.log(req.body)
        const {id,title,completed} = req.body;
        const candidate = await Todo.findOne({t_id:id});
        if (candidate){
            return res.status(400).json({message: "Error id already exists"});
        }
        const todo = new Todo({t_id:id, title:title, completed:completed});

        await todo.save();

        res.status(201).json({message: "todo added"});
    }
    catch(e) {
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message)
    }

});

app.delete("/api/delete/todo/:id", async (req, res)=>{
    try {
       await Todo.deleteOne({t_id: req.params.id});
       res.status(200).json({message:"todo was deleted successfully"});
    } 
    catch(e) {
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message);
    }
});

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(port, ()=>console.log('app has been started on http://localhost:',port));
    }catch(e){
        console.log('Server ERR', e.message);
        process.exit(1);
    }
}
start();