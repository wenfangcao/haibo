<template>
    <div>
		<Prolist :title= "title1" :img="img1"></Prolist>
		<Prolist :title= "title2" :img="img2"></Prolist>
		<Prolist :title= "title3" :img="img3"></Prolist>
	</div>		
</template>
<script>
	import Prolist from './ProlistComponent'
	export default{
		components:{
			'Prolist':Prolist
		},
		data(){
			return {
				title1:"短袖",
				img1:[
					"1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg",
					"6.jpg"
				],
				title2:"T恤",
				img2:[
					"1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg",
					"6.jpg"
				],
				title3:"卫衣",
				img3:[
					"1.jpg",
					"2.jpg",
					"3.jpg",
					"4.jpg",
					"5.jpg",
					"6.jpg"
				]
		}
			
		}
	}
</script>