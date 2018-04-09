<template>
    <div id="app">
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {}
}
</script>

<style>
body {
    margin: 0;
    background: #FBEFF2; /* fallback for old browsers */
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app{
    text-align: center;
}
</style>
