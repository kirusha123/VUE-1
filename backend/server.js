const { response, json } = require("express");
const express = require("express");
const app = express();

const port = 5050;

const fake_data = 
[
    {id:1, title:"Amogus1", completed: true},
    {id:2, title:"Amogus2", completed: true},
    {id:3, title:"Amogus3", completed: false},
    {id:4, title:"Amogus4", completed: true},
    {id:5, title:"Amogus5", completed: true},
]
app.get("/",(req, res)=>{
    res.redirect("/api")
});

app.get("/api",(req, res)=>{
    res.send("<h1>Api:</h1><h2>api/get/todos</h2><h2>api/get/todo/:id</h2>");
});

app.get("/api/get/todos", (req, res)=>{
    res.send(JSON.stringify(fake_data));
    console.log("todos");
});

app.get("/api/get/todo/:id", (req, res)=>{
    const id = req.params.id;
    let result = [];
    fake_data.forEach(element => {
        if (element.id.toString() == id.toString()){
            result.push(element);
        }
    });
    res.send(JSON.stringify(result));
    console.log(result);
});

app.listen(port);

console.log("app has been started on http://localhost:5050")