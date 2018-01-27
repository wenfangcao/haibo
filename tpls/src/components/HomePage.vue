<template>
 <div class="outdiv">
  <Header class=".navbar-fixed-top navtop"></Header>
  <section class="section-wrap">
	<div class="section section-1">
		<div class="container">
			<div class="row cleartable">
				<div class="col-xs-6 leftDiv">
					<div class="h2 sec1A">SAVE UP TO 20%</div>
					<div class="h1 sec1A">新 品 上 市 </div>
					<div class="details sec1A">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit ipsum labore in unde officiis omnis quis repellendus illum optio dicta velit, quia, ullam laudantium laboriosam animi, consequuntur ex. Adipisci.</div>
					<button class="btnshop sec1A">SHOP NOW</button>
				</div>
				<div class="col-xs-6 rightDiv">
					<img src="../assets/img/home/sec2.jpg" alt="">
				</div>
			</div>
		</div>
	</div>
	<div class="section section-2">
		<div class="container">
			<div class="row">
				<div class="col-xs-6 sec2leftOutDiv">
					<div class="sec2LeftDiv text-center" >
						<div v-drag>
							<h6>DEAL OF THE DAY</h6>
							<h3>OSAMA LEATHER BAG</h3>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem eveniet? Voluptatum, cupiditate amet maxime in hic quos autem eveniet voluptatibus voluptatem asperiores exercitationem odit quibusdam voluptas animi ipsam atque.</span>
							<p>
								<span class="font-NowPrice">$330</span>
								<span class="font-PrePrice">&nbsp;$750&nbsp;  </span>
							</p>
							<ul>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>DAYS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>HOURS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>MINS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>SECS</span>
								</li>
							</ul>
						</div>
						<div v-drag >
							<h6>DEAL OF THE DAY</h6>
							<h3>OSAMA LEATHER BAG</h3>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem eveniet? Voluptatum, cupiditate amet maxime in hic quos autem eveniet voluptatibus voluptatem asperiores exercitationem odit quibusdam voluptas animi ipsam atque.</span>
							<p>
								<span class="font-NowPrice">$330</span>
								<span class="font-PrePrice">&nbsp;$750&nbsp;  </span>
							</p>
							<ul>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>DAYS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>HOURS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>MINS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>SECS</span>
								</li>
							</ul>
						</div>
						<div v-drag >
							<h6>DEAL OF THE DAY</h6>
							<h3>OSAMA LEATHER BAG</h3>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem eveniet? Voluptatum, cupiditate amet maxime in hic quos autem eveniet voluptatibus voluptatem asperiores exercitationem odit quibusdam voluptas animi ipsam atque.</span>
							<p>
								<span class="font-NowPrice">$330</span>
								<span class="font-PrePrice">&nbsp;$750&nbsp;  </span>
							</p>
							<ul>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>DAYS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>HOURS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>MINS</span>
								</li>
								<li class="pull-left text-center">
									<span>00</span><br>
									<span>SECS</span>
								</li>
							</ul>
						</div>
					</div>	
				</div>
				<div class="col-xs-6">
					<div class="sec2RightDiv">
						<div><img src="../assets/img/home/101.jpg" alt=""></div>
						<div><img src="../assets/img/home/102.jpg" alt=""></div>
						<div><img src="../assets/img/home/103.jpg" alt=""></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section section-3">
		<div class="title active">	
			<div class="container text-center marginTop20"><!--Recommended Commodities 推荐商品
						Newly Launched Products 新品上市
						Hot Products 产品热销 -->
				<div class="row">
					<h2 class="col-xs-12 h2">RECOMMENDED</h2> 
					<h3 class="col-xs-12 sec3A">推荐产品</h3>
					<div class="col-sm-12 hidden-xs titleDetails sec3A">
						<span v-for='tmp in detailWord' @mouseover="wordhov" class="wordhover">{{tmp}}</span>
						
					</div>
				</div>
			</div>
			<!--banner图 -->
			<div class="banner container" @mouseenter="beginHover" @mouseleave="endHover">
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
	<div class="section section-4">
		<div class="container">
			<div class="row text-center">
				<h2 class="col-xs-12 ">Brand</h2>
				<h3 class="col-xs-12">品牌文化</h3>
				<div class="col-sm-12 hidden-xs titleDetails">
						<span v-for='tmp in detailWord' @mouseover="wordhov" class="wordhover">{{tmp}}</span>
						
					</div>
			</div>

			<div class="container margin40">
				<div class="row barandimglist">
					<div class="col-sm-4 col-xs-6">
						<img src="../assets/img/home/10.jpg" alt="">
						<a>
							<div>
								<h1 class="hidden-xs">|</h1>
								<p>ABOUT</p>
								<span>公司介绍</span>
								<h1 class="hidden-xs">|</h1>
							</div>
						</a>
					</div>
					<div class="col-sm-4  col-xs-6">
						<img src="../assets/img/home/11.jpg" alt="">
						<a>
							<div>
								<h1 class="hidden-xs">|</h1>
								<p>CULTURE</p>
								<span>品牌文化</span>
								<h1 class="hidden-xs">|</h1>
							</div>
						</a>
					</div>
					<div class="col-sm-4  hidden-xs">
						<img src="../assets/img/home/12.jpg" alt="">
						<a>
							<div>
								<h1>|</h1>
								<p>RECRUIT</p>
								<span>礼贤下士</span>
								<h1>|</h1>
							</div>
						</a>
					</div>
				</div>
			</div>
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
				<h2 class="col-xs-12">NEWS CRNTER</h2> 
				<h3 class="col-xs-12 NewsH3Title">新闻动态</h3>
				<div class="col-sm-12 hidden-xs titleDetails">
						<span v-for='tmp in detailWord' @mouseover="wordhov" class="wordhover">{{tmp}}</span>
						
					</div>
			</div>
			<div class="container">
				<div class="row homeNewsDiv">
					<div class="col-md-4 col-sm-12 col-xs-12">
						<img src="../assets/img/home/13.jpg" alt="">
						<p>Be absorbed in Fun 做个不一样的父亲</p>
						<span class="hidden-sm hidden-xs">这个父亲节，做个不一样的父亲</span>
						<button class="btn">阅读详情</button>
					</div>
					<div class="col-md-4 col-sm-12 col-xs-12">
						<img src="../assets/img/home/14.jpg" alt="">
						<p>V咨询 | 时代标识·Requrn to the 90' s </p>
						<button class="btn">阅读详情</button>

					</div>
					<div class="col-md-4 col-sm-12 col-xs-12 hidden-xs hidden-sm">
						<img src="../assets/img/home/15.jpg" alt="">
						<p>解构传统 --HAIBO 2018春夏新品发布会</p>
						<span class="hidden-sm">HAIBO 2018春夏新品发布会于2018.1.22日晚在香格里拉酒店完美落幕，强大的超模阵容、炫酷的舞美灯光音效、 &nbsp;别具一格的秀场搭建...都是本场精彩T台秀不可或缺的组成</span>
						<button class="btn">阅读详情</button>
						
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
 </div> 
</template>
<script>
	import '../assets/js/jquery-3.2.1.js'
	import '../assets/js/homePage.js'
	import Vue from 'Vue'
	
	
	export default{
		directives:{
		  drag(e){
            e.onmousedown = function(ev){
                ev =ev ||event;
                var oLeft = e.offsetLeft;
                var a =ev.clientX-oLeft;
                e.onmousemove =function (ev){
                    ev = ev || event;
                    e.style.left =ev.clientX-a+'px';
                }
            }    
            
            document.onmouseup =function(){
                e.onmousemove = null ;
            }
	      }
		},
		methods:{
			beginHover:function (){
				//鼠标悬停
				clearInterval(this.timer);
				this.timer = null;
			},
			endHover:function (){
				this.timer = setInterval(()=>{this.n++;this.ban();},5000);
			},
				//下侧小按钮
			changeLi(){
				var lis = document.querySelectorAll(".ulbtn>li");
				$(".ulbtn>li").removeClass("ulbtncolor");
				lis[this.n].className="ulbtncolor";
			},
			ban:function (){					
					try{
						//console.log(this.timer);
						var imgs = document.querySelectorAll(".bandiv>img");
						var length = imgs.length-1;
						if(this.n<0) this.n=length;if(this.n>length) this.n=0;
						var m=this.n-1;if(m<0)m=length;
						var m1=m-1;if(m1<0)m1=length;
						var m2=m1-1;if(m2<0)m2=length;
						var p=this.n+1;if(p>length)p=0;
						var p1=p+1;if(p1>length)p1=0;
						var p2=p1+1;if(p2>length)p2=0;
						imgs[m].className="banImgPre";
						imgs[m1].className="banImgPre2";
						imgs[m2].className="banImgPre3";
						imgs[this.n].className="banImgMid";
						imgs[p].className="banImgNext";
						imgs[p1].className="banImgNext2";
						imgs[p2].className="banImgNext3";	
						this.changeLi();					
					}catch(err){console.log(err);}
			},
			wordhov(e){
				e.target.style.bottom="15px";
				setTimeout(()=>{
					e.target.style.bottom="0px";
				},700);
			}
			
			
		},
		data(){
			return {
			   timer :"",
			   n : 0	,
			   detailWord:['为','注','重','着','装','品','味','与','品','质','的','成','功','男','士','提','供','彰','显','内','涵','和','个','性','的','时','尚','男','装','系','列','产','品'],
			   camMove : false ,
			   canMoveList:[0,500,999],
			   startMoveX : 0 ,
			   startMoveY : 0 
			}
		},
		mounted(){
			var thisComponent = this;
			$('body').css("overflow","hidden");
			function slip(){
				var i=0;
				var $btn = $('.section-btn li'),
					$wrap = $('.section-wrap'),
					$nav = $('.navtop');
				/* nav动画效果 */
				function nav(){
					$nav.css("marginTop",'-50px');
					setTimeout(()=>{
						$nav.css("marginTop",'0');
					},400);
				}
				/*section 动画*/
				function section(){
					$('.outdiv .section-1 .leftDiv .sec1A').removeClass("sec1AA");
					$('.outdiv .sec3A').removeClass("sec3AA");
					$('.outdiv .section-3 .h2').removeClass('animation');
					if(i==0){
						setTimeout(()=>{
							$('.outdiv .section-1 .leftDiv  .sec1A').addClass("sec1AA");
						},300);
					}else if(i==2){
						$('.outdiv .section-3 .h2').addClass('animation');
						var timerSec3 = setInterval(()=>{	
							$(".outdiv .banner img").css("transition","all .3s ease-in-out");
							thisComponent.n--;
							thisComponent.ban();
						},100);
						setTimeout(()=>{
							$('.outdiv .sec3A').addClass("sec3AA");	
							
						},300);
						setTimeout(()=>{
							clearInterval(timerSec3);
							$(".outdiv .banner img").css("transition","all .6s ease-in-out");
						},1500);
					}else if(i==3){
						
					}


				}
				section();
				/*当前页面赋值*/
				function up(){i++;if(i==$btn.length){i=0};}
				function down(){i--;if(i<0){i=$btn.length-1};}
				/*页面滑动*/
				function run(){
					$btn.eq(i).addClass('on').siblings().removeClass('on');	
					$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
					nav();
					section();
				};
				/*右侧按钮点击*/
				$btn.each(function(index) {
					$(this).click(function(){
						i=index;
						run();
					})
				});
				
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
				this.n = $(".banImgMid").index() ;
				//轮播图
				this.ban();
				$(".bandiv>img").click((e)=>{
					this.n = $(e.target).index();
					this.ban();
				});
				//左右按钮
				$(".preNextBtn1").click(()=>{this.n++; this.ban();});
				$(".preNextBtn2").click(()=>{this.n--;this.ban();});
				
			
				$(".ulbtn>li").click((e)=>{
					this.n = $(e.target).index();
					this.ban();
				});
				//开启定时器
				this.timer = setInterval(()=>{this.n++;this.ban();},5000);
			})()
		},
		destroyed(){
			clearInterval(this.timer);
			this.timer = null; 
			$('body').css("overflow","visible");
		}
		
	}

</script>
<style scoped>
	@import '../assets/css/wheel.css';
	@import '../assets/css/homePage.less';
	
</style>
