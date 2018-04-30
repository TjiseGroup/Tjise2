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
			<br/>
			<p>明星产品</p><br />
		</div>
		<div class="drink_starTextAllImg">

			<a href="#"><img src="../../static/img/a0fc5afaly1fpj4sqd07nj20c20azqbk.jpg" width="550px" height="360px" class="drink_starTextImg1" /></a>

			<a href="#"><img src="../../static/img/2.jpg" width="550px" height="360px" class="drink_starTextImg2" /></a>

		</div>
		<div class="drink_startext">
			<p>系列产品</p><br />
		</div>
		<div class="drink_setAllImg">
			<img src="../../static/img/3.jpg" width="260" height="280" class="drink_setImg1" />
			<span class="drink_setHoverImg1">aaa<br/>aaaaaaaaaaaaaaaaaaaaa<br/>aaa</span> 
			<img src="../../static/img/6.jpg" width="260" height="280" class="drink_setImg2" />
			<span class="drink_setHoverImg2">bbb<br/>bbbbbbbbbbbbbbbbbbb<br/>bbb</span> 
			<img src="../../static/img/7.jpg" width="260" height="280" class="drink_setImg3" />
			<span class="drink_setHoverImg3">ccc<br/>cccccccccccc<br/>ccc</span> 
			<img src="../../static/img/5.jpg" width="260" height="280" class="drink_setImg4" />
			<span class="drink_setHoverImg4">ddd<br/>ddddddddddddd<br/>ddd</span> 
		</div>
		<br /><br /><br /><br /><br /><br />
		<div>
			<p class="drink_ProductText">aa</p>
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
	
	.drink_all {
		color: white;
	}
	
	.drink_engine {
		width: 1200px;
		margin: 0 auto;
	}
	
	.el-carousel__item:nth-of-type(1) {
		background-image: url(../../static/img/frutist.jpg);
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
	
	.drink_startext {
		text-align: center;
		font-size: 28px;
		font-family: "Hiragino Sans GB";
	}
	
	.drink_starTextAllImg {
		text-align: center;
		font-size: 300px;
		overflow: hidden;
	}
	
	.drink_starTextImg1 {
		cursor: pointer;
		transition: all 0.6s;
	}
	
	.drink_starTextImg1:hover {
		transform: scale(1.2);
	}
	
	.drink_starTextImg2 {
		cursor: pointer;
		transition: all 0.6s;
	}
	
	.drink_starTextImg2:hover {
		transform: scale(1.2);
	}
	
	.drink_setAllImg {
		padding-left: 100px;
		position: absolute;
		/*display: inline-block;*/
	}
	
	
	
	
	
	.drink_setImg1 {
		margin-right: 43px;
		cursor: pointer;
		transition: all 0.6s;
	}
	
	.drink_setHoverImg1{
	position: absolute;
	top:0;
	bottom: 0;
	left:100px;
	right:0;
	background: rgba(0,0,0,.5);
	display: none;
	z-index: 2;
	width: 260px;
	height: 280px;
	}
	
	.drink_setImg1:hover +.drink_setHoverImg1{
	z-index: 3;
	display: block;
	} 
	
	.drink_setImg2 {
		margin-right: 43px;
	}
	
	
	.drink_setHoverImg2{
	position: absolute;
	top:0;
	bottom: 0;
	left:407px;
	right:0;
	background: rgba(0,0,0,.5);
	display: none;
	z-index: 2;
	width: 260px;
	height: 280px;
	}
	
	.drink_setImg2:hover +.drink_setHoverImg2{
	z-index: 3;
	display: block;
	} 
	
	.drink_setImg3 {
		margin-right: 43px;
	}
	
	.drink_setHoverImg3{
	position: absolute;
	top:0;
	bottom: 0;
	left:715px;
	right:0;
	background: rgba(0,0,0,.5);
	display: none;
	z-index: 2;
	width: 260px;
	height: 280px;
	}
	
	.drink_setImg3:hover +.drink_setHoverImg3{
	z-index: 3;
	display: block;
	} 
	
	
	.drink_setImg4 {
		margin-right: 43px;
	}
	
	
	.drink_setHoverImg4{
	position: absolute;
	top:0;
	bottom: 0;
	left:1023px;
	right:0;
	background: rgba(0,0,0,.5);
	display: none;
	z-index: 2;
	width: 260px;
	height: 280px;
	}
	
	.drink_setImg4:hover +.drink_setHoverImg4{
	z-index: 3;
	display: block;
	} 
	
	.drink_ProductText {
		background-color: white;
		width: 520px;
		height: 360px;
		margin-left: 100px;
		margin-top: 300px;
	}
	
	.drink_ProductText2 {
		background-color: white;
		width: 520px;
		height: 360px;
		margin-left: 765px;
		margin-top: -375px;
	}
</style>