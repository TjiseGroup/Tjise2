<template>
  <div class="div1">		
	<center>	<img src="../../static/img/dessert.jpg" width="900px" height="550px" id="imgs"/></center>

		<div class="div1_start">
			<br/>
			<p><b>最新产品</b></p><br />
		</div>
		<div class="div1_big">

			<a href="#"><img src="../../static/img/picture1.jpg" width="550px" height="360px" class="div1_starTextImg1" /></a>

			<a href="#"><img src="../../static/img/picture2.jpg" width="550px" height="360px" class="div1_starTextImg2" /></a>

		</div>
		<div class="div1_small">
			<p>人海茫茫，总有一款让你心动</p><br />
		</div>
		<div class="div2_small">
			<img src="../../static/img/3.jpg" width="260" height="280" class="div2_small1" />
			<span class="div2_setHoverImg1">aaa<br/>aaaaaaaaaaaaaaaaaaaaa<br/>aaa</span>
			<img src="../../static/img/6.jpg" width="260" height="280" class="div2_small2" />
			<span class="div2_setHoverImg2">bbb<br/>bbbbbbbbbbbbbbbbbbb<br/>bbb</span>
			<img src="../../static/img/7.jpg" width="260" height="280" class="div2_small3" />
			<span class="div2_setHoverImg3">ccc<br/>cccccccccccc<br/>ccc</span>
			<img src="../../static/img/5.jpg" width="260" height="280" class="div2_small4" />
			<span class="div2_setHoverImg4">ddd<br/>ddddddddddddd<br/>ddd</span>
		</div>
		<br /><br /><br /><br /><br /><br />
		<div>
			<p class="div1_text1"><i class="el-icon-service"></i>&nbsp;&nbsp;&nbsp;XX物语<br/><br/><br />
			用随和淡然的态度，过随遇而安的生活。<br/><br/>不慌不忙地坚强，安安静静地强大。
			</p>
			<p class="div1_text2"><i class="el-icon-edit-outline"></i>&nbsp;&nbsp;&nbsp;联系我们<br/><br/><br />
			邮箱：xxxxx@163.com<br/><br/>地址：天津市西青区宾水西道399号天津市大学软件学院
			</p>
		</div>
  </div>
</template>

<script>
export default {
  name: 'sweet',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1 body{
	background-color: black;
	font-family: "Hiragino Sans GB";
}
.div1_img{
margin-top: 10%;
}
	.div1_big{
		text-align: center;
		font-size: 300px;
		overflow: hidden;
	}
.div1_start{
		text-align: center;
		font-size: 28px;
		color: black;
		
	}
		.div1_starTextImg1 {
		cursor: pointer;
		transition: all 0.6s;
	}
	.div1_starTextImg1:hover {
		transform: scale(1.2);
	}
	
	.div1_starTextImg2 {
		cursor: pointer;
		transition: all 0.6s;
	}
	
	.div1_starTextImg2:hover {
		transform: scale(1.2);
	}

.div2_small {
		padding-left: 100px;
		position: absolute;
		/*display: inline-block;*/
	}
	
	.div2_small1{
		margin-right: 43px;
		cursor: pointer;
		transition: all 0.6s;
	}
	
	.div2_setHoverImg1 {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 100px;
		right: 0;
		background: rgba(0, 0, 0, .5);
		display: none;
		z-index: 2;
		width: 260px;
		height: 280px;
	}
	
	.div2_small1:hover+.div2_setHoverImg1 {
		z-index: 3;
		display: block;
	}
	
	.div2_small2 {
		margin-right: 43px;
	}
	
	.div2_setHoverImg2 {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 407px;
		right: 0;
		background: rgba(0, 0, 0, .5);
		display: none;
		z-index: 2;
		width: 260px;
		height: 280px;
	}
	
	.div2_small2:hover+.div2_setHoverImg2 {
		z-index: 3;
		display: block;
	}
	
	.div2_small3 {
		margin-right: 43px;
	}
	
	.div2_setHoverImg3 {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 715px;
		right: 0;
		background: rgba(0, 0, 0, .5);
		display: none;
		z-index: 2;
		width: 260px;
		height: 280px;
	}
	
	.div2_small3:hover+.div2_setHoverImg3 {
		z-index: 3;
		display: block;
	}
	
	.div2_small4 {
		margin-right: 43px;
	}
	
	.div2_setHoverImg4 {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 1023px;
		right: 0;
		background: rgba(0, 0, 0, .5);
		display: none;
		z-index: 2;
		width: 260px;
		height: 280px;
	}
	
	.div2_small4:hover+.div2_setHoverImg4 {
		z-index: 3;
		display: block;
	}
	
	.div1_text1{
		background-color: #FFBB66;
		text-align: center;
		font-size: 28px;
		font-family: "Hiragino Sans GB";
		width: 520px;
		height: 360px;
		margin-left: 100px;
		margin-top: 300px;
	}
	
	.div1_text2 {
		background-color: #CCBBFF;
		text-align: center;
		font-size: 28px;
		font-family: "Hiragino Sans GB";
		width: 520px;
		height: 360px;
		margin-left: 765px;
		margin-top: -390px;
	}
</style>