<template>
  <div class="pro">
      <Header class="headerdiv"></Header>
      <div class="bantitle text-center">
			<h1>Product</h1>
			<h5 class="btn">CLICK ENTER</h5>
			<span>HAIB Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum, ea, consequatur corporis <br> dolores ex maiores a tempora eligendi iste sapiente mollitia inventore aut rem aperiam totam aliquid laudantium tempore.</span>
		</div>
		<div class="proNav container">
			<div class="row nav-no1">
				<div class="col-xs-4"><a>首页</a></div>
				<div class="col-xs-4"><a>产品中心</a></div>
				<div class="col-xs-4"><a>2017 A/W</a></div>  
			</div>                                
		</div>
		<div class="container margin20 minNav">
			<div class="row">
				<div class="col-xs-6">
					<div class="btn proMinTitle">系列产品</div>
				</div>
				<div class="col-xs-6">
						<div class="row minNavRight">
							<div class="col-xs-4"><a>2017 A/W</a></div>
							<div class="col-xs-4"><a>2017 s/s</a></div>
							<div class="col-xs-4"><a>2017 a/w</a></div>
						</div>		
				</div>
			</div>
		</div>

		<div class="container proBgc">
			<div class="row">
				<div class="col-xs-2 prolistLeft">
					<p>羽绒服</p>
					<img src="../assets/img/product/Ts.png" alt="Ts">
					<b>HAIBO</b>
				</div>
				<div class="col-xs-9">
					<div class="row prolistRight">
						<div @click="prolistbanleft" class="col-xs-1 prolistBan">&lt;</div>
							<div class="col-xs-9 banOutDiv">
								<div class="banInDiv row">
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/1.jpg" alt=""></div>
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/2.jpg" alt=""></div>
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/3.jpg" alt=""></div>
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/1.jpg" alt=""></div>
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/2.jpg" alt=""></div>
									<div class="col-xs-2 prolistmidimg"><img src="../assets/img/product/3.jpg" alt=""></div>
								</div>
								
							</div>
						
						<div @click="prolistbanright" class="col-xs-1 prolistBan">&gt;</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
	export default{
		methods:{
			prolistban:function(){
				var n = 0;
				var WIDTH = 0.35;
				return function(){
					console.log(1);
				}
			},
			prolistbanright:function(){
				

			}
		}
	}
</script>
<style>
	@import '../assets/css/product.less';
</style>
