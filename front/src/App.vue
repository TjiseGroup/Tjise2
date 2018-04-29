<template>
  <div id="app">
    <header class="mainHeader">
      <el-button type="text" v-if="!isLogin">登录</el-button>
      <span v-if="isLogin">用户名</span>
    </header>
    <nav class="mainNav">
      <ul>
        <li v-for="(value,index) in imgs" :key="index" class="list zanimated" @click="open(value.split('.')[0])" :id="value.split('.')[0]">
          <div>
          <img :src="'../static/img/'+value" class="zanimated">
          </div>
          <span>{{value.split('.')[0]}}</span>
          <p>{{index}}</p>
        </li>
      </ul>
    </nav>
    <div :class="'view'+(showView?' top0':'')">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imgs: ["frutist.jpg", "dessert.jpg", "drink.jpg", "bread.png", "list.jpg"],
      isLogin: false,
      el: null,
      showView: false
    };
  },
  watch: {
    //监控路由
    $route(to, from) {
      if (!to.name) {
        this.showView = false;  //关闭详情
        let el = document.getElementById(from.name);
        el.classList.add("restart");  //重置动画
        setTimeout(() => {
          el.classList.remove("restart");
          for (let val of this.el) {
            val.classList.remove("open", "close");  //删除无用class
          }
        }, 800);
      }
    }
  },
  methods: {
    //打开详情
    open(path) {
      for (let val of this.el) {
        let className = path === val.id ? "open" : "close";
        val.classList.add(className);
      }
      this.showView = true;
      this.$router.push({ name: path });
    }
  },
  //路由重定向
  beforeMount() {
    this.$route.name?this.$router.push({ path: '/' }):''
  },
  //初始化俩参数
  mounted() {
    this.el = document.getElementsByClassName("list");
    this.showView = !!this.$route.name
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(211, 211, 211, 1);
  border-radius: 3px;
}
body {
  overflow: hidden;
  margin: 0;
  background-color: #1f1f1f;
  color: #fff;
}
.view {
  transition: top 0.6s ease-out 0s;
  box-sizing: border-box;
  width: 100%;
  padding: 0 5vw;
  margin-top: 10vh;
  position: absolute;
  top: 100%;
  left: 5vw;
  overflow: auto;
  left: 0;
  height: 80vh;
}
.top0 {
  top: 0;
  transition: top 0.6s ease-out 1.7s;
}
.mainHeader {
  top: 0;
  width: 100%;
  position: fixed;
  text-align: right;
  padding: 4px;
  box-sizing: border-box;
}
.mainNav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.mainNav > ul {
  padding: 0;
  width: 92%;
  height: 80%;
  position: relative;
}
.list {
  position: absolute;
  list-style: none;
  cursor: pointer;
  width: 18%;
  height: 100%;
  padding: 0 1%;
  box-sizing: border-box;
  float: left;
  transition: all 0.6s ease-out;
  opacity: 1;
  transform: scale3d(1, 1, 1);
}
.list > span {
  position: absolute;
  color: #000;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-100%);
  font-size: 2rem;
}
.list > p {
  transition: background-size 0.6s ease-out, bottom 0.6s ease-out,
    opacity 0.3s ease-out 0.3s;
  position: absolute;
  bottom: -10vh;
  margin: 0;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-image: linear-gradient(to top, #2f3840, #2f3840);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 100% 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  font-size: 20vw;
  font-weight: bold;
  line-height: 0.85;
  opacity: 0;
}
.list > div > img {
  transition: all 0.6s ease-out;
  width: 92vw;
  height: 100%;
  filter: grayscale(90%);
}
.list:nth-child(2) {
  left: 20%;
}
.list:nth-child(3) {
  left: 40%;
}
.list:nth-child(4) {
  left: 60%;
}
.list:nth-child(5) {
  left: 80%;
}
.list:nth-child(2) img {
  transform: translateX(-20%);
}
.list:nth-child(3) img {
  transform: translateX(-40%);
}
.list:nth-child(4) img {
  transform: translateX(-60%);
}
.list:nth-child(5) img {
  transform: translateX(-80%);
}
.list:hover img {
  filter: none;
}
.list:hover > p {
  transition: background-size 0.6s ease-out, bottom 0.6s ease-out;
  bottom: -5vh;
  background-size: 100% 0%;
  opacity: 1;
}
.list > div {
  overflow: hidden;
  height: 100%;
}
.close {
  transform: scale3d(0.3, 0.3, 0.3);
  opacity: 0;
}
.zanimated {
  animation-fill-mode: both;
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.open {
  animation-name: open;
}
.open > div > img {
  animation-name: imgPosition;
  filter: none;
}
.open > p,
.open > span {
  transition: background-size 0.6s ease-out, bottom 0.6s ease-out,
    opacity 0.3s ease-out 0.3s;
  opacity: 0 !important;
}
.restart {
  animation-name: restart;
  animation-duration: 0.6s;
  left: 0 !important;
}
.restart > div > img {
  transform: translateX(0);
}
@keyframes restart {
  from {
    width: 92vw;
  }
  to {
    width: 18%;
  }
}
@keyframes open {
  30% {
    left: 0;
    width: 18%;
  }
  40% {
    left: 0;
    width: 18%;
  }
  to {
    left: 0;
    width: 92vw;
  }
}
@keyframes imgPosition {
  30% {
    transform: translateX(0);
  }
  to {
    transform: translateX(0);
  }
}
</style>
