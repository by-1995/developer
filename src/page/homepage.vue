<template>
  <div>
    <div class="container">
      <header>
        <div class="left">
          <img src="@/assets/imgpage/u2.png" alt />
          <span>彩之云 · 开放平台</span>
        </div>
        <div class="center">
          <ul>
            <li>
              <a href="javascript:;">产品</a>
            </li>
            <li>
              <a href="javascript:;">行业解决方案</a>
            </li>
            <li>
              <a href="javascript:;">客户案例</a>
            </li>
            <li>
              <a href="javascript:;">开发支持</a>
            </li>
            <li>
              <a href="javascript:;">控制台</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <a href="javascript:;">登录</a>
        </div>
      </header>
      <main>
        <div class="carousel">
          <!-- <span class="demonstration">Click 指示器触发</span> -->
          <el-carousel class="user" trigger="click" height="300px">
            <el-carousel-item class="sueritem" v-for="item in 4" :key="item">
              <img src="@/assets/imgpage/u2.png" alt />
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="d1">
          <h2>欢迎入驻彩之云开放平台</h2>
          <p>与 开发者一起，共同打造一站式的社区服务</p>
        </div>
        <div class="d2">
          <ul>
            <li>
              <img src="@/assets/imgpage/u2.png" alt />
              <h2>开发</h2>
              <p>300+接口开放，交易、商品、投诉、报修等开放者平台可以自由定制需求</p>
            </li>
            <li>
              <img src="@/assets/imgpage/u2.png" alt />
              <h2>开发</h2>
              <p>300+接口开放，交易、商品、投诉、报修等开放者平台可以自由定制需求</p>
            </li>
            <li>
              <img src="@/assets/imgpage/u2.png" alt />
              <h2>开发</h2>
              <p>300+接口开放，交易、商品、投诉、报修等开放者平台可以自由定制需求</p>
            </li>
            <li>
              <img src="@/assets/imgpage/u2.png" alt />
              <h2>开发</h2>
              <p>300+接口开放，交易、商品、投诉、报修等开放者平台可以自由定制需求</p>
            </li>
          </ul>
        </div>
        <div class="d3">
          <h2>欢迎入驻彩之云开放平台</h2>
        </div>
        <div class="d4">
          <ul>
            <li>
              <img src="@/assets/imgpage/u57.svg" alt />
              <div>
                <p>ICare，WeCare助力越南</p>
                <p>
                  使用彩之云Caas平台镜像部署，基于PaaS
                  平台二次开发使用已有的微服务，构建多语
                  言版上层应用。互联网+物业社区运营顾问，
                  赋能越南兴彩拓展经营范围，承接更多物业
                  项目
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/imgpage/u53.svg" alt />
              <div>
                <p>ICare，WeCare助力越南</p>
                <p>
                  使用彩之云Caas平台镜像部署，基于PaaS
                  平台二次开发使用已有的微服务，构建多语
                  言版上层应用。互联网+物业社区运营顾问，
                  赋能越南兴彩拓展经营范围，承接更多物业
                  项目
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/imgpage/u57.svg" alt />
              <div>
                <p>ICare，WeCare助力越南</p>
                <p>
                  使用彩之云Caas平台镜像部署，基于PaaS
                  平台二次开发使用已有的微服务，构建多语
                  言版上层应用。互联网+物业社区运营顾问，
                  赋能越南兴彩拓展经营范围，承接更多物业
                  项目
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="d5">
          <h2>欢迎入驻彩之云开放平台</h2>
        </div>
        <div class="d6">
          <div>
            <img src="@/assets/imgpage/u11.png" alt />
          </div>
        </div>
        <div class="d7">
          <div class="d7_1">
            <h2>欢迎入驻</h2>
            <h3>与 开发者一起，共同打造一站式的社区服务</h3>
          </div>
          <div class="d7_2">
            <img src="@/assets/imgpage/u18.png" alt />
            <div>
              <div>
                <div>
                  <img src="@/assets/imgpage/u25.svg" alt />
                </div>
                <div>
                  <h3>注册</h3>
                  <p>
                    彩之云开放平台使用需要先
                    注册彩之云账号
                  </p>
                  <a href="javascript:;">立即注册</a>
                </div>
              </div>
              <div>
                <div>
                  <img src="@/assets/imgpage/u33.svg" alt />
                </div>
                <div>
                  <h3>注册</h3>
                  <p>
                    彩之云开放平台使用需要先
                    注册彩之云账号
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img src="@/assets/imgpage/u38.svg" alt />
                </div>
                <div>
                  <h3>注册</h3>
                  <p>
                    彩之云开放平台使用需要先
                    注册彩之云账号
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d7_3">
            <button>立即入住</button>
          </div>
        </div>
      </main>
      <footer>
        <div><img src="@/assets/imgpage/u66.png" alt=""></div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1: {}
    };
  },
  mounted() {
    $.ajax({
      url: "http://localhost:8080/dgms/denglu",
      type: "get",
      data:{
        qq:"dingding",
        ww:"123"
      },
      dataType: "json",
      success: function (result) {
        console.log(result)
        if(result.code==1){
          console.log('1111111111111111')
          sessionStorage.setItem("user",true)
          console.log(sessionStorage.getItem("user"),"222222222222222")
          alert(result.data.yname+"登录成功")
        }else{
          alert("用户名或密码错误！")
        }
      }
    })
    // var ww = document.getElementsByClassName(
    //   "el-carousel__indicators--horizontal"
    // )[0];
    // console.log(ww);
    // console.log(ww.children);
    // console.log(document.getElementsByClassName("user").children);
    // ww.children[0].style.width="15px"
    // ww.children
  }
};
</script>
<style scoped>
.container {
  background-color: azure;
}
.clear {
  clear: both;
}
header {
  width: 100%;
  height: 70px;
  background-color: rgba(121, 121, 121, 1);
}
header > .left {
  float: left;
  width: 25%;
  height: 70px;
  line-height: 70px;
  padding-left: 50px;
}
header > .left > img {
  width: 121px;
  height: 42px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
header > .left > span {
  color: aliceblue;
  position: relative;
  left: -55px;
  background-color: rgba(121, 121, 121, 1);
  padding-left: 10px;
}
header > .center {
  float: left;
}
header > .center > ul {
  display: flex;
}
.center > ul > li {
  margin-right: 40px;
  line-height: 70px;
  height: 70px;
}
.center > ul > li > a {
  color: aliceblue;
}
header > .right {
  float: right;
  height: 70px;
  line-height: 70px;
}
header > .right > a {
  margin-right: 120px;
  color: aliceblue;
  font-size: 16px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #adbf99;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #254972;
}

.el-carousel__item .Carousel {
  border-bottom: 5px solid #305688;
}
main > .d1 {
  margin-top: 50px;
  margin-bottom: 20px;
}
main > .d1 > h2,
.d3 > h2,
.d5 > h2 {
  text-align: center;
  font-weight: 400;
  font-size: 30px;
}
main > .d1 > p {
  text-align: center;
  font-size: 16px;
  color: #555555;
}
main > .d2 {
}
main > .d2 > ul {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* height: 50px; */
  display: flex;
  justify-content: space-between;
  background-color: rgba(242, 242, 242, 1);
}
main > .d2 > ul > li {
  width: 25%;
  /* height: 50px;; */
}
main > .d2 > ul > li {
  padding: 20px 30px 20px 30px;
  text-align: center;
}
main > .d2 > ul > li > img {
  width: 100px;
  height: 100px;
}
main > .d2 > ul > li > h2 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 30px;
}
main > .d2 > ul > li > p {
  text-align: center;
  color: #555555;
}
.d3 {
  margin-top: 50px;
  margin-bottom: 20px;
}
.d4 > ul {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* height: 50px; */
  display: flex;
  justify-content: space-between;
  background-color: rgba(242, 242, 242, 1);
}
.d4 > ul > li {
  padding: 40px 50px 40px 50px;
  text-align: center;
}
.d4 > ul > li > img {
  width: 100%;
  margin: 0px;
  position: relative;
  top: 5px;
}
.d4 > ul > li > div {
  padding: 15px;
  height: 200px;
  background-color: #fff;
  margin: 0px;
}
.d4 > ul > li > div > p:first-child {
  font-size: 16px;
  color: #555555;
  margin: 10px 0 10px 0;
}
.d4 > ul > li > div > p:nth-child(2) {
  font-size: 12px;
  color: #555555;
}
.d5 {
  margin-top: 50px;
  margin-bottom: 20px;
}
.d6 {
  width: 95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* background-color:azure; */
}
.d6 > div > img {
  width: 100%;
}
.d7 {
  background-color: rgba(2, 11, 19, 1);
  margin-top: 50px;
}
.d7>.d7_1>h2{
  color: #fff;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  padding: 20px 0 15px 0px;
}
.d7>.d7_1>h3{
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
}
.d7>.d7_2{
  position: relative;
}
.d7>.d7_2>img{
  width: 70%;
  height: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.d7>.d7_2>div{
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: space-between;
  width: 85%;
  left: 50%;transform: translateX(-50%);
}
.d7>.d7_2>div>div{
  display: flex;
  justify-content: space-between;
  width: 27%;
}
.d7>.d7_2>div>div>div:first-child{
  background-color: rgba(215, 215, 215, 1);
  width: 25%;
}
.d7>.d7_2>div>div>div:first-child>img{
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.d7>.d7_2>div>div>div:nth-child(2){
  background-color: rgb(255, 255, 255);
  width: 75%;
  padding: 10px;
}
.d7>.d7_2>div>div>div:nth-child(2)>h3{
  font-weight: 600;
  margin-top: 10px;margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
}
.d7>.d7_2>div>div>div:nth-child(2)>p{
  font-size: 12px;
  /* text-align: center; */
  margin-bottom: 20px;
}
.d7>.d7_2>div>div>div:nth-child(2)>a{
  font-size: 12px;
  color: #007eff;
  display: inline-block;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
}
.d7_3>button{
  outline: none;
  border: 0;
  color: #fff;
  background-color: #007eff;
  width: 200px;
  height: 40px;
  line-height: 37px;
  text-align: center;
  font-size: 16px;
  position: relative;
  left: 50%;transform: translateX(-50%);
  margin-top: 30px;
  margin-bottom: 30px;
}
footer{
  margin-top: 200px;
  background-color: rgb(191, 195, 204);
}
footer>div{
  height: 100px;
}
footer>div>img{
  width: 50%;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* height: 100px; */
}
</style>