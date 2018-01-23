
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
							<div class="col-xs-4"><a>2018 夏装</a></div>
							<div class="col-xs-4"><a>2017 冬装</a></div>
							<div class="col-xs-4"><a>2017 秋装</a></div>
						</div>		
				</div>
			</div>
		</div>
		<Prolist></Prolist>
		<Prolist></Prolist>
		
	<!--	<div class="container proBgc">
			<div class="row">
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
		</div>-->
		<Footer></Footer>
  </div>
</template>
<script>
	import Prolist from './ProlistComponent'
	export default{
		components:{
			'Prolist':Prolist
		}
	}
</script>
<script>
	export default{
		
		mounted(){

		}
	}
</script>
<style scoped>
	@import '../assets/css/product.less';
	
</style>
