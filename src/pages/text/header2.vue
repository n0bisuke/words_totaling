<template>
    <h2 class="ribbon1">{{header2Text}}</h2>
</template>

<style>
/*見出し2*/
.ribbon1 {
    display: inline-block;
    position: relative;
    height: 50px;/*リボンの高さ*/
    line-height: 50px;/*リボンの高さ*/
    vertical-align: middle;
    text-align: center;
    padding: 0 30px;/*横の大きさ*/
    font-size: 18px;/*文字の大きさ*/
    background: #f57a78;/*塗りつぶし色*/
    color: #FFF;/*文字色*/
    box-sizing: border-box;
}

.ribbon1:before, .ribbon1:after{
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    z-index: 1;
}

.ribbon1:before{
    top: 0;
    left: 0;
    border-width: 25px 0px 25px 15px;
    border-color: transparent transparent transparent #fff;
    border-style: solid;
}

.ribbon1:after{
    top: 0;
    right: 0;
    border-width: 25px 15px 25px 0px;
    border-color: transparent #fff transparent transparent;
    border-style: solid;
}
</style>

<script>
export default {
    props: ['header2Text']
}
</script>