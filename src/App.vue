<template>
    <div id="app">
        <Hello msg="Hello World!"/>
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
        align-content: center;
        height: 600px;
    }
</style>
