<template>
    <div class="section">
        <div class="form">
            <div class="header">
                    <span>TODOS MANAGER</span>
            </div>
            <input id="task_in" placeholder="Enter your's todo =)"  class="input">
            <ul>
                <!--<li>
                    <div class="float-left">
                        <span id="l_id" class="id">2</span>
                        <span class="ml-10 ">Bla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla Bla</span>
                    </div>
                    <div class="float-right">
                        <div class="changer"> boba</div>
                        <div class="dumper float-right">a</div>
                    </div>
                </li>-->
                <li>
                    <tr>
                        <td>
                            <div>Bla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla Bla</div>
                        </td>
                    </tr>
                    <div class="side_menu">
                        <div class="float-left">
                            <div class="dumper">A</div>
                            <div class="changer">B</div>
                        </div>
                    </div>
                </li>
                 <li>
                    <tr>
                        <td>
                            <div>Bla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla Bla</div>
                        </td>
                    </tr>
                    <div class="side_menu">
                        <div class="float-left">
                            <div class="dumper">A</div>
                            <div class="changer">B</div>
                        </div>
                    </div>
                </li>
                 <li>
                    <tr>
                        <td>
                            <div>Bla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla Bla</div>
                        </td>
                    </tr>
                    <div class="side_menu">
                        <div class="float-left">
                            <div class="dumper">A</div>
                            <div class="changer">B</div>
                        </div>
                    </div>
                </li>
                 <li>
                    <tr>
                        <td>
                            <div>Bla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla Bla</div>
                        </td>
                    </tr>
                    <div class="side_menu">
                        <div class="float-left">
                            <div class="dumper">A</div>
                            <div class="changer">B</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Hello",
        props : {
            msg : String
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
        max-height: 400px;
        min-width: 400px;
        max-width: 400px;
        border: solid 1px white;
    }
    .form{
        height: auto;
        width: auto;
        max-height: 400px;
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
        max-height: 290px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    li {
        font-family: 'TestFont';
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 2px;
        margin-right: 5px;    
        list-style-type: none;
        background-color: white;
        border-bottom: solid 1px #CACACA;
        border-top: solid 1px #CACACA;
        border-radius: 10px;
        width: 100%;
        overflow-x: auto;

    }

    li::-webkit-scrollbar { 
        display: none;
        width: 0; 
    }

    td div{

        font-size: 1.5rem;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .side_menu{
        position: absolute;
        display: inline-block;
        transform: translate(400px,-28px);
    }

    li:hover .side_menu .float-left{
        visibility: visible;
        
    }
    .side_menu .float-left{
        visibility: hidden;
    }

    .dumper{
        display: inline-block;
        margin-left: 0.5rem;
    }
    .changer{
        display: inline-block;
        margin-left:1rem;
    }

</style>