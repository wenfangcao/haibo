<template>
    <div class="HoverPreDiv" :style = "{display:dis}" :class='{hovertop:h1}'>
        <div class="indiv">
            <span :class='{spanTop:s1==0,spanMid:s1==1,spanBottom:s1==2}'>H</span>
            <span :class='{spanTop:s1==0,spanMid:s2==1,spanBottom:s2==2}'>A</span>
            <span :class='{spanTop:s1==0,spanMid:s3==1,spanBottom:s3==2}'>I</span>
            <span :class='{spanTop:s1==0,spanMid:s4==1,spanBottom:s4==2}'>B</span>
            <span :class='{spanTop:s1==0,spanMid:s5==1,spanBottom:s5==2}'>O</span>
        </div>
    </div>
</template>
<style scoped>
    .HoverPreDiv{
        position:fixed;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background:#403E28;
        z-index:999;
        transition:all .5s;
    }
    .HoverPreDiv.hovertop{
         top:-100% !important;
    }
    .HoverPreDiv .indiv{
        width:100%;
        height:300px;
        margin:0 auto;
        text-align: center;
        color:#BFEA3D;
        margin-top:20%;
        font-size:10em;
        font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
    }
    .HoverPreDiv .indiv span{
        display:inline-block;
        position:relative;  
    }
    .HoverPreDiv .indiv span:first-child{
        transition:all .7s .5s;
    }
    .HoverPreDiv .indiv span:nth-child(2){
        transition:all .7s .8s;
    }
    .HoverPreDiv .indiv span:nth-child(3){
        transition:all .7s 1.1s;
    }
    .HoverPreDiv .indiv span:nth-child(4){
        transition:all .7s 1.4s;
    }
    .HoverPreDiv .indiv span:nth-child(5){
        transition:all .7s 1.7s;
    }
    .HoverPreDiv .indiv .spanTop{
        transform: rotateY(150deg);
        top:-100%;
        opacity:0;
        
    }
    .HoverPreDiv .indiv .spanMid{
        transform: rotateY(0deg);
        top:0%;
        opacity:1;
    }
    .HoverPreDiv .indiv .spanBottom{
        transform: rotateY(150deg);
        top:100%;
        opacity:0;
    }
    @media screen and (max-width:768px){
       .HoverPreDiv .indiv{
            margin-top:50%;
            font-size:5em;
            width:50%
       }
    }
</style>
<script>
    export default{
        mounted(){
           
            setTimeout(()=>{
                for(var i = 1 ;i< 6;i++){
                   this[('s'+i)]++;
                }
            },1000);  
             setTimeout(()=>{
                for(var i = 1 ;i< 6;i++){
                    this[('s'+i)]++;
                }
                setTimeout(()=>{
                    this.h1 = 1 ;
                },3000);
            },5000);    
        },
        data(){
            return {
                dis:0,
                s1:0,
                s2:0,
                s3:0,
                s4:0,
                s5:0,
                h1:0
            }
        },

    }
</script>