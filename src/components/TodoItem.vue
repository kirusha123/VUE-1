<template>
  <li v-bind:class="{done: todo.completed}" >
    <span>
      <input type="checkbox"
             v-on:change="completed">
      <strong class="idx">{{index + 1}}:</strong>
      {{todo.title | uppercase}}
    </span>
    <button class="rm"
            v-on:click="$emit('rm-todo', todo.id)"
    >&times;</button>
  </li>
</template>


<script>
export default {
    props:{
        todo: {
            type: Object,
            required: true
        },
        index:Number
    },
    methods:{
        completed(){
            this.todo.completed = !this.todo.completed;
        }
    },
    filters: {
    uppercase(value) {
        return value.toUpperCase()
    }
  }

}
</script>

<style scoped>
    li {
        border-bottom: solid 1px #CACACA;
        border-top: solid 1px #CACACA;
        border-radius: 7px;
        font-family: 'TestFont';
        font-size: 1.3rem;
        font-weight: 900;
        background-color: #fff;
        border: 1px solid #cacaca;
        display: flex;
        justify-content: space-between;
        padding: .0rem 2rem;
        margin-bottom: 0.2rem;
        height: 2rem;
        line-height: 2rem;
    }

    .li:hover{
        border-bottom-color: green;
        border-top-color: green;
    }

    .idx{
        margin: 0 0.2rem;
    }

    .rm {
        margin:0.25rem 0;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    .rm:hover{
        background-color: rgb(167, 2, 2);
    }

    input {
        margin-right: 1rem;
    }

    .done span{
        text-decoration: line-through;
    }

    .done {
        background-color: rgb(115, 116, 114);
    }



</style>