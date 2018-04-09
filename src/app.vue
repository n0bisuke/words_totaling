<template>
    <div id="app">
        <h1>
            <a href="https://connpass.com" target="_blank">
                <img src="./images/connpass_logo.png" alt="" width="100px">
            </a>
            の事前アンケートの集計するやつ
        </h1>

        <router-view class="view"></router-view>
    </div>
</template>

<style>
body {
    margin: 0;
    background: rgba(247, 210, 244, 0.447); /* fallback for old browsers */
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app{
    text-align: center;
}

h1{
    margin-top:10px;
}
</style>

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