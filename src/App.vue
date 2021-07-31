<template>
    <div id="app">
        <TodoList/>
    </div>
</template>

<script>

import TodoList from './components/TodoList.vue';

export default {
    name: "App",
    components: {
        TodoList
    }
}
</script>

<style>
    #app{
        display: flex;
        align-content: center;
        height: 600px;
    }

</style>
