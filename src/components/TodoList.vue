<template>
    <div class="section">
        <div class="form">
            <div class="header">
                <span>TODOS MANAGER</span>
            </div>
            <input id="task_input" 
                placeholder="Enter your's todo =)"  
                class="input" 
                v-bind="newTodo" 
                @keyup.enter="addTodo( $event.target)"
                >
            <template v-if="loading" class="loading">
                <h1>Загрузка</h1>
            </template>
            <template v-else>
            <ul>
                <TodoItem  
                    v-for="(todo, i) in arr"
                    v-bind:todo="todo"
                    v-bind:key="todo.t_id"
                    v-bind:index="i"
                    v-on:rm-todo="removeTodo"
                />
            </ul>
            </template>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem"
    import axios from 'axios';
    export default {
        name : "TodoList",
        data() {
            return{
                arr:[],
                index:0,
                newTodo:"",
                loading:false,
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.loading = true;
                axios.get("http://localhost:5050/api/get/todos")
                    .then(res=>{
                        this.loading = false;
                        this.arr = res.data;
                    })
                    .catch(e=>{
                        this.loading=false;
                        console.log(e);
                    })
            },
            addTodo: function(nt){
                if (nt.value != ""){
                    this.arr.push({id:this.index, title:nt.value, completed:false});
                    this.index += 1;
                    nt.value = "";
                }
            },
            removeTodo(id) {
                const url = "http://localhost:5050/api/delete/todo/"+id;
                console.log(url);
                axios.delete(url).then(res=>{
                    console.log(res);
                    this.arr = this.arr.filter(todo => todo.t_id !== id);
                }).catch(e=>{
                    console.log(e);
                });
                
            }
        },
        components:{
            TodoItem
        }
    };
</script>

<style scoped>

    @font-face {
        font-family: 'TestFont';
        src: url("../fonts/ZenLoop-Regular.ttf");
    }

    .loading{
        text-align: center;
        margin:auto;
    }

    .section{
        margin: auto;
        min-width: 400px;
        max-width: 400px;
    }
    .form{
        height: auto;
        width: auto;
        min-width: 400px;
    }
    .float-left{
        float: left;
    }
    .float-right{
        float: Right;
    }

    .ml-10{
        margin-left: 10px;
    }

    .header{
        font-family: 'TestFont';
        font-weight: 900;
        font-size: 1.8rem;
        margin-top: 5px;
        width: 100%;
        height: 2rem;
        background-color: white;
        line-height: 2rem;
        text-align: center;
        border-bottom: solid 1px #CACACA;
        border-radius: 7px;
    }
    .input{
        font-family: 'TestFont';
        font-weight: 700;
        margin-top: 5px;
        line-height: 2rem;
        font-size: 1.4rem;
        width: 99%;
        max-width: 100%;  
        background-color: white;
        border: none;
        text-align: center;
        cursor: pointer;
        border-bottom: solid 1px #CACACA;
        border-top: solid 1px #CACACA;
        border-radius: 12px;
    }

    .input:focus{
        outline: none;
        border-bottom: solid 1px #CACACA;
        border-top: solid 1px #CACACA;
        border-radius: 12px;
    }

    ul{
        margin: 5px;
        padding-left: 0;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>