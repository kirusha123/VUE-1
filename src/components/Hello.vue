<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
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
    .hello{
         flex:center;
         width: 40%;
         height: 40%;
         text-align: center;
    }
</style>