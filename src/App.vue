<template>
    <div id="app">
        <Hello msg="Hello World)"/>
    </div>
</template>

<script>
import Hello from './components/Hello';

export default {
    name: "App",
    components: {
        Hello
    }
}
</script>

<style>
    #app{
        display: flex;
        justify-content: center;
    }
</style>
