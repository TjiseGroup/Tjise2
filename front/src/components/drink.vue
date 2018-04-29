<template>
	<div class="drink_all">
		<div class="drink_engine">
			<el-carousel indicator-position="outside" height="500px">
				<el-carousel-item v-for="item in 4" :key="item">
					<!--<h3>{{ item }}</h3>-->
				</el-carousel-item>
			</el-carousel>
			</el-carousel>
		</div>
		<div class="drink_startext">
			<br/><p>明星产品</p><br />
		</div>
		<div>
			<img src="../../static/img/a0fc5afaly1fpj4sqd07nj20c20azqbk.jpg" width="480px" height="360px" class="drink_StarImg"/>
			<img src="../../static/img/2.jpg" width="480px" height="360px" class="drink_StarImg"/>
		</div>
		<div class="drink_startext">
			<br/><p>系列产品</p><br />
		</div>
		<div class="drink_xilieImg">
			<img src="../../static/img/3.jpg" width="260" height="280" class="a1"/>
			<img src="../../static/img/6.jpg" width="260" height="280" class="a2"/>
			<img src="../../static/img/7.jpg" width="260" height="280" class="a3"/>
			<img src="../../static/img/5.jpg" width="260" height="280" class="a4"/>
		</div>
		<br /><br /><br /><br /><br /><br />
		<div >
			<p class="drink_ProductText" >aa</p>
			<p class="drink_ProductText2">bb</p>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'drink',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }*/
 .drink_all{
 	color: white;
 }
 
	.drink_engine{
		width: 1200px;
		margin: 0 auto;
	}
	
	.el-carousel__item:nth-of-type(1) {
		background-image: url(../../static/img/fruits.jpg);
	}
	
	.el-carousel__item:nth-of-type(2) {
		background-image: url(../../static/img/dessert.jpg);
	}
	.el-carousel__item:nth-of-type(3) {
		background-image: url(../../static/img/bread.png);
	}
	.el-carousel__item:nth-of-type(4) {
		background-image: url(../../static/img/dessert.jpg);
	}
	
	.drink_startext{
		text-align: center;
		font-size: 28px;
		font-family: "Hiragino Sans GB";
	}
	
	.drink_StarImg{
		padding-left: 180px;
	}
	
	.drink_xilieImg{
		padding-left: 180px;
	}
	
	.a1{
		margin-right: 43px;
	}
	
	.a2{
		margin-right: 43px;
	}
	
	.a3{
		margin-right: 43px;
	}
	
	.a4{
		margin-right: 43px;
	}
	
	
	
	.drink_ProductText{
		background-color: white;
		width: 520px;
		height: 360px;
      margin-left: 180px;
	}
	.drink_ProductText2{
		background-color: white;
		width: 520px;
		height: 360px;
      margin-left: 850px;
      margin-top: -375px;
	}
</style>