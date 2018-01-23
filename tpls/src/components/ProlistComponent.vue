<template>
    <div class="container">
        <div class="row proBgc">
            <div class="col-xs-2 prolistLeft">
                <p>羽绒服</p>
                <img src="../assets/img/product/Ts.png" alt="Ts">
                <b>HAIBO</b>
            </div>
            <div class="col-xs-9">
                <div class="row prolistRight">
                    <div @click="prolistbanleft" class="col-xs-1 prolistBan prolistBan1" v-if="n!=1">&lt;</div>
                        <div class="col-xs-9 banOutDiv">
                            <div class="banInDiv row">
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/1.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>
                                </div>
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/2.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>
                                </div>
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/3.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>	
                                </div>
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/1.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>	
                                </div>
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/2.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>	
                                </div>
                                <div class="col-xs-2 prolistmidimg">
                                    <img src="../assets/img/product/3.jpg" alt="">
                                    <div class="phover"></div>
                                    <div class="chover">
                                        <img src="../assets/img/product/2.png" alt=""><br><br>
                                        <span>haibo 羽绒服</span>
                                    </div>	
                                </div>
                            </div>
                            
                        </div>
                    
                    <div @click="prolistbanright" class="col-xs-1 prolistBan prolistBan2" v-if="n!=-4">&gt;</div>
                </div>
            </div>
        </div>
        <b class="hrb container"></b>
    </div>
</template>
<script>
    export  default{
        methods:{
            prolistban:function(){
				var WIDTH = 35;
				var marginLeft = (WIDTH*this.n-4)+"%";
				$('.banInDiv').css("marginLeft",marginLeft);
			},
			prolistbanright:function(){
				this.n--;
				this.prolistban();
			},
			prolistbanleft:function(){
				this.n++;
				this.prolistban();
			}
		},
		data(){
			return {
				n : -1,
				timer : 0
			}
		}
    }
</script>
<style scoped>
    .pro .proBgc{
        background:#242A38;
        padding:70px 0 70px 40px;
        transition:all .5s;
    }
    .hrb{
		display:block;
		margin-top:30px;
        margin-bottom:30px;
        margin-left:-15px;
		border-bottom:1px dashed #555555;
	}
    .pro .proBgc:hover{
        background:#B68A54;
    }
    .pro .prolistLeft>p:before{
        content: "";
        display:block;
        width:30px;
        height:1px;
        background:white;
    }
    .pro .prolistLeft>p{
        font-size:3em;
        font-weight:800;
        color:white;
        
    }
    .pro .prolistLeft{
        margin-top:4%;
        margin-left:1%;
    }
    .pro .prolistLeft>p:after{
        content: "";
        display:block;
        background:white;
        width:100px;
        height:20px;
    }
    .pro .prolistLeft>img{
        width:30px;
        margin-top:70%;
    }
    .pro .prolistLeft>b{
        display:block;
        color:white;
        /*margin-bottom:10%;*/
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .pro .prolistRight{
        margin-right:-20%;
        position:relative;
    }
    .pro .prolistRight>div{
        position:relative;
    }
    .pro .proBgc .prolistBan{
        font-size:5em;	
        position:relative;
        top:130px;
        color:white;
        cursor:pointer;
    }
    .pro .proBgc .prolistBan1:hover{
        animation:btn1 1s;
    }
    .pro .proBgc .prolistBan2:hover{
        animation:btn2 1s;
    }
    .pro .banOutDiv{
        overflow:hidden;
    }
    .pro .banInDiv{
        width:225%;
        margin-left:-4%;
        transition:all .5s;
        box-sizing:border-box;
    }
    .pro .prolistmidimg{
        position:relative;
        overflow:hidden;
        padding:0;
        margin-right:1%;
        width:15%;
    }
    .pro .prolistmidimg>img{
        width:100%;
        
    }
    .pro .prolistmidimg:hover .phover{
        left:0;
        transition:all .5s;
    }
    .pro .banInDiv .phover{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:-100%;
        background:rgba(0,0,0,0.5);
        transition:all .5s;
    }
    .pro .banInDiv .chover{
        position:absolute;
        width:100%;
        height:100%;
        top:-100%;
        left:35%;
        transition:all .8s;
        color:white;
    }
    .pro .prolistmidimg:hover .chover{
        animation: chover .5s ease-in;
        top:30%;
        
    }
    @keyframes btn1{
        0% {left:30px;font-size:3em;top:150px;}
        100%{left:-20px;font-size:5em;top:130px;}
    }
    @keyframes btn2{
        0% {right:20px;font-size:3em;top:150px;}
        100%{right:-30px;font-size:5em;top:130px;}
    }
    @keyframes chover {
        0% {top:-100%;}
        70%{top:42%;}
        100%{top:30%;}
    }
</style>

