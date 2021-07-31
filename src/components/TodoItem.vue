<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             v-on:change="completed">
      <strong>{{index + 1}}</strong>
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
    font-size: 1rem;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .0rem 2rem;
    margin-bottom: 1rem;
  }

  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  input {
    margin-right: 1rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>