import express, {Application, Request, Response, NextFunction} from "express";
const app:Application = express();
import  {validationResult, check} from "express-validator"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import config from "config"
import Todo, {TodoInterface} from "./Models/Todo"


const port:Number = config.get("port") || 5050;

app.use(bodyParser.json())

app.use(function(req:Request, res:Response, next:NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


app.get("/",(req:Request, res:Response)=>{
    res.redirect("/api")
});

app.get("/api",async (req:Request, res:Response)=>{
    res.send("<h1>Api:</h1><h2>api/get/todos</h2><h2>api/get/todo/:id</h2>");
});

app.get("/api/todos", async (req:Request, res:Response)=>{
    try{
        const todos:TodoInterface[] = await Todo.find();
        if (!todos){
            return res.json();
        }
        //console.log(todos)
        res.send(JSON.stringify(todos));
    }catch(e){
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message)
    }
    
});

app.get("/api/todo/:id", async (req:Request, res:Response)=>{
    try {
        const todo:TodoInterface|null = await Todo.findOne({t_id:req.params.id})
        if (todo){
            //console.log(todo)
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

app.post("/api/todo", 
[
    check('id', "incorrect id").isLength({min:1}),
    check('title', "incorrect title").isLength({min:1}),
    check('completed', "incorrect completed").isBoolean()
],
async (req:Request, res:Response)=>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:"Incorrect todo data"
            })
        }
        //console.log(req.body)
        const {id,title,completed} = req.body;
        const candidate:(TodoInterface|null) = await Todo.findOne({t_id:id});
        if (candidate){
            return res.status(400).json({message: "Error id already exists"});
        }
        const todo:TodoInterface&mongoose.Document<any,any,TodoInterface> = new Todo({t_id:id, title:title, completed:completed});

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

app.delete("/api/todo/:id", async (req:Request, res:Response)=>{
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

app.put("/api/todo", 
[
    check('id', "incorrect id").isLength({min:1}),
    check('title', "incorrect title").isLength({min:1}),
    check('completed', "incorrect completed").isBoolean()
],
async (req:Request, res:Response)=>{
    try{
        validationResult(req.body);
        let todo = {
            t_id: req.body.id,
            title:  req.body.title,
            completed:  req.body.completed
        }
        //console.log(todo);

        await Todo.findOneAndUpdate({t_id:todo.t_id},todo,{ new: true});
        res.status(201).json({message:"OK"});

    }catch(e){
        res.status(500).json({
            "message": e.message
        })
        console.log(e.message)
    }
});

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false 
        });
        app.listen(port, ()=>console.log('app has been started on http://localhost:',port));
    }catch(e){
        console.log('Server ERR', e.message);
        process.exit(1);
    }
}
start();