
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
				<div class="col-xs-4">
					<a v-if="year==0">2018 夏装</a>
					<a v-if="year==1">2017 冬装</a>
					<a v-if="year==2">2017 秋装</a>
				</div>  
			</div>                                
		</div>
		<div class="container margin20 minNav">
			<div class="row">
				<div class="col-xs-6">
					<div class="btn proMinTitle">系列产品</div>
				</div>
				<div class="col-xs-6">
						<div class="row minNavRight">
							<div class="col-xs-4"><a @click="year = 0" :class="{ho:(year==0)}">2018 夏装</a></div>
							<div class="col-xs-4"><a @click="year = 1" :class="{ho:(year==1)}">2017 冬装</a></div>
							<div class="col-xs-4"><a @click="year = 2" :class="{ho:(year==2)}">2017 秋装</a></div>
						</div>		
				</div>
			</div>
		</div>
	<Proyear1 v-if="year==0"></Proyear1>
	<Proyear2 v-if="year==1"></Proyear2>
	<Proyear3 v-if="year==2"></Proyear3>
	<Footer></Footer>
  </div>
</template>

<script>
	import Proyear1 from './Proyear1'
	import Proyear2 from './Proyear2'
	import Proyear3 from './Proyear3'
	export default{
		components:{
			'Proyear1':Proyear1,
			'Proyear2':Proyear2,
			'Proyear3':Proyear3
		},
		mounted(){

		},
		data(){
			return {
				year:0
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/product.less';
	
</style>
