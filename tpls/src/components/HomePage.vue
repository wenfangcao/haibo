<template>
 <div class="outdiv">
  <section class="section-wrap">
	<div class="section section-1">
		<div class="title active">
				<Header></Header>
			<div class="container text-center marginTop20"><!--Recommended Commodities 推荐商品
						Newly Launched Products 新品上市
						Hot Products 产品热销 -->
				<div class="row">
					<h2 class="col-xs-12">RECOMMENDED</h2> 
					<h3 class="col-xs-12">推荐产品</h3>
					<span class="col-sm-12 hidden-xs titleDetails">为注重着装品味与品质的成功男士提供彰显内涵和个性的时尚男装系列产品</span>
				</div>
			</div>
			<!--banner图 -->
			<div class="banner container">
				<span class="glyphicon glyphicon-menu-left preNextBtn1"></span>
				<div class="bandiv">
					<img src="../assets/img/home/1.jpg" alt="" class="banImgPre3">
					<img src="../assets/img/home/2.jpg" alt="" class="banImgPre2">
					<img src="../assets/img/home/3.jpg" alt="" class="banImgPre">
					<img src="../assets/img/home/4.jpg" alt="" class="banImgMid">
					<img src="../assets/img/home/5.jpg" alt="" class="banImgNext">
					<img src="../assets/img/home/6.jpg" alt="" class="banImgNext2">
					<img src="../assets/img/home/7.jpg" alt="" class="banImgNext3">
				</div>
				<span class="glyphicon glyphicon-menu-right preNextBtn2"></span>
				<ul class="ulbtn hidden-sm hidden-xs">
					<li></li>
					<li></li>
					<li></li>
					<li class="ulbtncolor"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section section-2">
		<div class="title">
			<div class="container text-center"><!--Recommended Commodities 推荐商品
						Newly Launched Products 新品上市
						Hot Products 产品热销 -->
				<div class="row">
					<h2 class="col-xs-12">Newly Launched Products</h2> 
					<h3 class="col-xs-12">新品上市</h3>
					<span class="col-sm-12 hidden-xs titleDetails">为注重着装品味与品质的成功男士提供彰显内涵和个性的时尚男装系列产品</span>
				</div>
			</div>
		</div>
	</div>
	<div class="section section-3">
		<div class="title">
			<p class="tit">随便写写意思下</p>
		</div>
	</div>
	<div class="section section-4">
		<div class="title">
			<p class="tit">随便写写意思下</p>
		</div>
	</div>
	<div class="section section-5">
		<div class="container text-center">
				<!--
						Recommended Commodities 推荐商品
						Newly Launched Products 新品上市
						Hot Products 产品热销 
				-->
			<div class="row">
				<h2 class="col-xs-12">NEWS</h2> 
				<h3 class="col-xs-12">新闻动态</h3>
				<span class="col-sm-12 hidden-xs titleDetails">为注重着装品味与品质的成功男士提供彰显内涵和个性的时尚男装系列产品</span>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-6 col-xs-12">
						<img src="" alt="">
						<p>Be absorbed in Fun</p>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12">
						<img src="" alt="">
						<p>Be absorbed in Fun</p>
					</div>
					<div class="col-md-4 col-sm-6 col-xs-12">
						<img src="" alt="">
						<p>Be absorbed in Fun</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  </section>
	<ul class="section-btn">
	  <li class="on"></li>
	  <li></li>
	  <li></li>
	  <li></li>
	  <li></li>
	</ul>
	<div class="arrow">&laquo;</div>
 </div> 
</template>
<script>
	import '../assets/js/jquery-3.2.1.js'
	import '../assets/js/homePage.js'
	export default{
		components:{
			
		},
		methods:{
			
			
		},
		data(){
			return {
			   timer :""
				
			}
		},
		mounted(){
			$('body').css("overflow","hidden");
			function slip(){
				var i=0;
				var $btn = $('.section-btn li'),
					$wrap = $('.section-wrap'),
					$arrow = $('.arrow');
				/*当前页面赋值*/
				function up(){i++;if(i==$btn.length){i=0};}
				function down(){i--;if(i<0){i=$btn.length-1};}
				/*页面滑动*/
				function run(){
					$btn.eq(i).addClass('on').siblings().removeClass('on');	
					$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
				};
				/*右侧按钮点击*/
				$btn.each(function(index) {
					$(this).click(function(){
						i=index;
						run();
					})
				});
				/*翻页按钮点击*/
				$arrow.one('click',go);
				function go(){
					up();run();	
					setTimeout(function(){$arrow.one('click',go)},1000)
				};
				/*响应鼠标*/
				$wrap.one('mousewheel',mouse_);
				function mouse_(event){
					if(event.deltaY<0) {up()}
					else{down()}
					run();
					setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
				};
				/*响应键盘上下键*/
				$(document).one('keydown',k);
				function k(event){
					var e=event||window.event;
					var key=e.keyCode||e.which||e.charCode;
					switch(key)	{
						case 38: down();run();	
						break;
						case 40: up();run();	
						break;
					};
					setTimeout(function(){$(document).one('keydown',k)},1000);
				}	
			}
			slip();
			(()=>{
				var n = $(".banImgMid").index() ;
				//轮播图
				function ban(){					
					try{
						console.log(this.timer);
						var imgs = document.querySelectorAll(".bandiv>img");
						var length = imgs.length-1;
						if(n<0) n=length;if(n>length) n=0;
						var m=n-1;if(m<0)m=length;
						var m1=m-1;if(m1<0)m1=length;
						var m2=m1-1;if(m2<0)m2=length;
						var p=n+1;if(p>length)p=0;
						var p1=p+1;if(p1>length)p1=0;
						var p2=p1+1;if(p2>length)p2=0;
						imgs[m].className="banImgPre";
						imgs[m1].className="banImgPre2";
						imgs[m2].className="banImgPre3";
						imgs[n].className="banImgMid";
						imgs[p].className="banImgNext";
						imgs[p1].className="banImgNext2";
						imgs[p2].className="banImgNext3";
						changeLi();
						
					}catch(err){console.log(err);}
				}
				//ban();
				$(".bandiv>img").click((e)=>{
					n = $(e.target).index();
					ban();
				});
				//左右按钮
				$(".preNextBtn1").click(()=>{n++; ban();});
				$(".preNextBtn2").click(()=>{n--;ban();});
				var lis = document.querySelectorAll(".ulbtn>li");
				
				//下侧小按钮
				function changeLi(){
					$(".ulbtn>li").removeClass("ulbtncolor");
					lis[n].className="ulbtncolor";
				}
				$(".ulbtn>li").click((e)=>{
					n = $(e.target).index();
					ban();
				});
				//开启定时器
				this.timer = setInterval(()=>{n++;ban();},5000);
				//鼠标悬停
				$(".banner").hover(
					function (){
						clearInterval(this.timer);
						this.timer = null;
					},
					function (){
						this.timer = setInterval(()=>{n++;ban();},5000);
					}
				);
			})()
			
		},
		destroyed(){
			clearInterval(this.timer);
			this.timer = null;
			$('body').css("overflow","visible");
			console.log($('body').css("overflow"));
		}
		
	}

</script>
<style scoped>
	@import '../assets/css/wheel.css';
	@import '../assets/css/homePage.less';
	
</style>
