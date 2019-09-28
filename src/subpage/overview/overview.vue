<template>
  <div>
    <div class="container">
      <div id="d1">
        <h3 style="margin-bottom:8px;" id="d1_h3">
          <!-- <img src="@/assets/img/u56.svg" alt=""> -->
          1、彩之云用户授权服务
        </h3>
        <div style="margin-bottom:7px" v-for="(t,i) of node1" :key="i" class="d1_1">
          <!-- <h6 style=""><span></span>1.1彩之云用户授权服务</h6> -->
          <p style="padding:0" class="p0">
            彩之云用户授权微服务是一个可以给用户授权的微服务{{nodes}}
            彩之云用户授权微服务是一个可以给用户授权的微服务
            彩之云用户授权
          </p>
        </div>
      </div>
      <div id="d2">
        <h3 style="margin-bottom:8px;" id="d2_h3">
          <!-- <img src="@/assets/img/u56.svg" alt="">         -->
          2、功能介绍
        </h3>
        <div style="margin-bottom:7px" v-for="(t,i) of nodes" :key="i" class="d2_2">
          <h6 style>
            <span></span>2.1 彩之云用户授权服务
          </h6>
          <p>彩之云用户授权微服务是一个可以给用户授权的微服务</p>
        </div>
      </div>
      <div id="d2">
        <h3 style="margin-bottom:8px;" id="d2_h3">
          <!-- <img src="@/assets/img/u56.svg" alt="">-->
          2、材质与用户服务介绍
        </h3>
        <div style="margin-bottom:7px" v-for="(t,i) of conten" :key="i" class="d2_2">
          <p style="padding:0" class="p0">{{t}}</p>
        </div>
      </div>
      <div id="d2">
        <h3 style="margin-bottom:8px;" id="d2_h3">
          <!-- <img src="@/assets/img/u56.svg" alt="">         -->
          3、彩之云用户服务授权
        </h3>
        <div style="margin-bottom:7px" v-for="(t,i) of nodes" :key="i" class="d2_2">
          <h6 style>
            <span></span>2.1 彩之云用户授权服务
          </h6>
          <p>彩之云用户授权微服务是一个可以给用户授权的微服务</p>
        </div>
      </div>
      <div style="margin-top:100px;" id="evaluate">
        <evaluate></evaluate>
      </div>
      <div class="catalog">
        <Catalog></Catalog>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import evaluate from "../compon/evaluate.vue";
import Catalog from "@/subpage/compon/catalog.vue";
import api from "@/api/subspi.js";

export default {
  name: "overview",

  components: {
    evaluate,
    Catalog
  },
  data() {
    return {
      serviceUuid: "123",
      nodes: [1, 2],
      node1: [1],
      conten: [
        "彩之云用户授权微服务是一个可以给用户授权的微服务",
        `彩之云用户授权服务提供给接入方接入彩之云APP授权获取当前用户信息的功能`,
        `彩之云用户授权服务提供给接入方接入彩之云APP授权获取当前用户信息的功能`
      ]
    };
  },
  methods: {
    getservelist() {
      api.overview.getservelist().then(res => {
        if (res.code === 0) {
          this.serviceUuid = res.content[0].serviceUuid;
          // console.log(res)
          // console.log(res.content[0].serviceUuid);
          // console.log("6666666666666");
        }
      });
    },
    getoverview() {
      var timer = setInterval(()=> {
        console.log("123132132132123132");
        let params = { serviceUuid: this.serviceUuid };
        api.overview.getoverview(params).then(res => {
          console.log(this.serviceUuid, "77777777777777");
          if (res.code === 0) {
            console.log(res, "22222333333333355555555555");
          }
        });
      clearInterval(timer);
      },100);
    }
  },
  mounted() {
    this.getservelist();
    this.getoverview();
    // this.axios.get("http://192.168.0.111:8054/open/service/list").then(function(res){
    //   console.log(res,1111111111111)
    // }).catch(function(error){
    //   console.log(error)
    // })

    //
    // $.ajax({
    //   url:"http://192.168.0.111:8054/open/service/list",
    //   type:"get",
    //   // data:{lid:1},
    //   dataType:"json",
    //   success:function(result){
    //     console.log(result,"77777777777777")
    //     var url=result

    //   }
    // })

    // $.ajax({
    //   url:"http://192.168.0.111:8054/open/service/summary?serviceUuid=asdasdsada",
    //   type:"get",
    //   // data:{lid:1},
    //   dataType:"json",
    //   success:function(result){
    //     console.log(result,"9999999999999999")
    //     var url=result

    //   }
    // })
  }
};
</script>
<style scoped>
.container {
  /* width: 700px; */
  /* position: relative; */
  width: 850px;
}
#d1 {
  margin-top: 20px;
}
#d1,
#d2 {
  padding-left: 45px;
  margin-bottom: 23px;
}
#d1 > h3,
#d2 > h3 {
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: 600;
  position: relative;
  color: #4c4a65;
  margin-bottom: 8px;
}
h3 > img {
  position: absolute;
  left: -12px;
  top: -1px;
}
h6 > span {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 2px;
  position: relative;
  left: 2px;
  top: -3px;
  margin-right: 15px;
}
.d2_2 > h6,
.d1_1 > h6 {
  font-size: 14px;
  font-family: "微软雅黑";
  /* padding-left: 10px; */
  font-weight: 400;
  color: #2e0036;
}
.p0 {
  padding-left: 0px;
}
.d2_2 > p,
.d1_1 > p {
  font-family: "微软雅黑";
  padding-left: 19px;
  font-size: 14px;
  color: #2e0036;
}
#evaluate {
  /* background-color: #fafbfc; */
  height: 50px;
  margin-left: 45px;
  margin-bottom: 100px;
  width: 80%;
}
.catalog {
  position: absolute;
  left: 1180px;
  top: 90px;
}
</style>