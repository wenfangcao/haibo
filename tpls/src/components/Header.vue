<template>
  <div class="navbar navbar-default">
    <div class="container">
    <!--第一部分：导航条头部=品牌+汉堡包-->
    <div class="navbar-header">
        <a @click = "link('homepage')" class="navbar-brand titleFont">Haib</a>
        <!--汉堡包菜单默认是隐藏-->
        <a href="#my-menu" data-toggle="collapse" class="navbar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>
    </div>

        <div id="my-menu" class="collapse navbar-collapse navbar-left">
        <ul class="nav navbar-nav">
            <li><a @click = "link('homepage')">首页</a>
                <a @click = "link('homepage')">index</a></li>
            <li><a @click = "link('history')">品牌历史</a>
                <a @click = "link('history')">history</a></li>
            <li><a @click = "link('product')" data-toggle="dropdown" class="ov">产品大全</a>
                <a @click = "link('product')" data-toggle="dropdown" class="ov">products</a></li>
            <li><a href="#">招聘</a>
                <a href="">recruit</a></li>
            <li><a href="#">帮助</a>
                <a href="">help</a></li>
        </ul>
        </div>
    
        <a href="#" class=" navbar-right navbar-link navbar-text">注册</a>
        <span class="navbar-right navbar-text">|</span>
        <a href="#" class=" navbar-right navbar-link navbar-text">登录</a>
    </div>   
  </div>
</template>

<style lang="css" scoped>
    @import '../assets/css/header.less';
</style>
<script>
    export default{
        methods:{
            link(msg){
                this.$router.push(msg);
            }
        }
    }
</script>
