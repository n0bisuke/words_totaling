<template>
    <div id="app">
        <h1>CSVデータの集計</h1>
        <router-view class="view"></router-view>
        <h3>
            <a href="https://connpass.com" target="_blank">
                <img src="./images/connpass_logo.png" alt="" width="100px">
            </a>
            の事前アンケートの集計とかに使えるよ
        </h3>
    </div>
</template>

<style>
body {
    margin: 0;
    background: rgba(252, 238, 251, 0.742); /* fallback for old browsers */
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app{
    text-align: center;
}

/*見出し*/
h1 {
position: relative;
line-height: 1.4;
padding:0.25em 1em;
display: inline-block;
}

h1:before,h1:after{ 
  content:'';
width: 20px;
height: 30px;
position: absolute;
display: inline-block;
}

h1:before{
  border-left: solid 1px #ff5722;
  border-top: solid 1px #ff5722;
  top:0;
  left: 0;
}

h1:after{
  border-right: solid 1px #ff5722;
  border-bottom: solid 1px #ff5722;
  bottom:0;
  right: 0;
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