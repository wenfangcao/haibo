<template>
    <div class="pro">
        <Header class="headerdiv">
        </Header>
        <div class="bantitle text-center">
            <h1>Product</h1>
            <h5 class="btn">CLICK ENTER</h5>
            <span>HAIB Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum, ea, consequatur corporis <br> dolores ex maiores a tempora eligendi iste sapiente mollitia inventore aut rem aperiam totam aliquid laudantium tempore.</span>
        </div>
        <div class="proNav container">
            <div class="row nav-no1">
                <div class="col-xs-4"><a @click = "link('homepage')">首页</a></div>
                <div class="col-xs-4" @click="toCulture"><a :class='{colorIn:s1}'>企业文化</a></div>
                <div class="col-xs-4" @click="toTalent"><a :class='{colorIn:s2}'>人才观</a></div>
            </div>
        </div>
        <div v-if="s1" class="container section">
            <h1>CULTURE</h1>
            <h4>团队文化</h4>
            <img src="../assets/img/recruit/1.jpg" alt="">
            <h1></h1>
        </div>
        <div v-if="s2"  class="container section">
            <h1>Talent</h1>
            <h4>人才观</h4>
            <img class="s2" src="../assets/img/recruit/2.jpg" alt="">
            <h1></h1>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                s1:true,
                s2:false
            }
        },
        methods:{
            toCulture(){
                this.s1 = true;
                this.s2 = false;
            },
            toTalent(){
                this.s1 = false;
                this.s2 = true;
            },
            link(msg){
                this.$router.push(msg);
            }
        }
    }
</script>
<style scoped>
.pro .headerdiv{
    margin-bottom:0;
    background:transparent;
    position:relative;
    z-index:2;
    border:1px solid #777777;
}
.pro .bantitle{
    background:url('../assets/img/product/ban.jpg');
    height:380px;
    padding-top:2%;
    position:relative;
    top:-50px;
    width:100%;
    z-index:0;
}
.pro .bantitle>*{
    color:white;
}
.pro .bantitle>h1{
    font-size:8em;
}
.pro .bantitle>h5{
    display:block;
    width:200px;
    height:35px;
    margin:0 auto 1%;
    border:1px solid white;
}
.pro .bantitle>span{
    color:#D1D3D8;
}
.pro .nav-no1{
    width:25%;
    margin:0 auto;
}
.pro .nav-no1:hover a{
    text-decoration: none;
}
.pro .nav-no1 a:hover{
    color:#B68A54;
}
.pro .nav-no1 a,.minNavRight a{
    color:black;
    cursor:pointer;
}
.pro .section h1{
    font-size: 5em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.pro .section .s2{
    margin-left:20%;
}
.pro .colorIn{
    color:#B68A54 !important;
    text-decoration: underline;
}
</style>