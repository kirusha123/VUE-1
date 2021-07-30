<template>
    <div class="section">
        <div class="form">
            <div class="header">
                <span>TODOS MANAGER</span>
            </div>
            <input id="task_input" placeholder="Enter your's todo =)"  class="input" v-bind="newTodo" v-on:input="newTodo = $event.target" @keyup.enter="addTodo(newTodo)">
            <ul>
                <li v-for="el in arr" v-bind:key="el" >
                   <div class="float-left">
                        <span>{{ el }}</span>
                   </div>
                    <div class="float-right">
                        <span class="changer">A</span>
                        <span class="dumper">B</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Hello",
        data: function(){
                return{
                    arr:[]
                }
            }
        ,
        methods:{
            addTodo: function(newTodo){
                this.arr.push(newTodo.value);
                alert(this.arr.length);
                newTodo.value = "";
            }
        }
    };
</script>

<style scoped>

    @font-face {
        font-family: 'TestFont';
        src: url("../fonts/ZenLoop-Regular.ttf");
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

    li {
        border-bottom: solid 1px #CACACA;
        border-top: solid 1px #CACACA;
        border-radius: 7px;
        font-family: 'TestFont';
        height: 2rem;
        line-height: 2rem;
        font-size: 1.3rem;
        font-weight: 600;
        background-color: #fff;
    }

    li .float-left{
        margin-left: 15px;
    }

    li .changer{
        margin-right: 10px;
        margin-left: 10px;
    }

    li .dumper {
        margin-right: 10px;
    }

    li .changer:hover {
        cursor: pointer;
        font-weight: 900;
    }
    li .dumper:hover{
        cursor: pointer;
        font-weight: 900;
    }

</style>