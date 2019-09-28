<template>
  <div>
    <div class="container">
      <div class="d0">
        <h3>1、使用方法</h3>
        <el-timeline>
          <el-timeline-item v-for="(t,i) of usage" :key="i" :timestamp="t.timestamp" placement="top">
            <h4>
              {{t.h}}
              <a href="javascript:;">{{t.a}}</a>
            </h4>
          </el-timeline-item>
        </el-timeline>
      </div>

      <div class="d2">
        <h3>2、功能介绍</h3>
        <div class="d2-1" v-for="(t,i) of nodes" :key="i">
          <h5>
            <span></span>2.1 士大夫撒埃尔文范德萨阿瓦
          </h5>
          <p>的鬼斧神工双方各是个艾尔阿维尔切</p>
        </div>
      </div>
      <div class="d3">
        <evaluate></evaluate>
      </div>
    </div>
  </div>
</template>
<script>
import evaluate from "@/subpage/compon/evaluate.vue";

export default {
  components: {
    evaluate
  },
  data() {
    return {
      nodes: [1, 2],
      usage: [
        {
          timestamp: "申请彩之云账号",
          h:"开发者平台所有服务申请均需在登录彩之云账号前提下进行。使用服务前请先申请注册彩之云账号。",
          a: "点击注册"
        },
        {
          timestamp: "申请成为彩之云开发者",
          h:"登录彩之云账号后，请申请彩之云开发平台开发者，并在彩之云上实名，即可使用相关服务。",
          a:"点击申请"
        },
        {
          timestamp: "创建应用",
          h: "在线调试，需使用应用参数进行鉴权。发送服务请求前需先创建应用。",
          a: "点击创建"
        },
        {
          timestamp: "申请权限",
          h: "在线调试，需有应用权限，请求前需先申请应用权限。",
          a: "我的应用"
        }
      ]
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.container {
  /* background-color: #666; */
}
.container {
  padding-left: 45px;
}
.clear {
  clear: both;
}
.d0 {
  /* margin-top: 50px; */
}
h3 {
  font-size: 16px;
  font-family: "微软雅黑";
  font-weight: 600;
  position: relative;
  color: #4c4a65;
  margin-bottom: 8px;
  margin-top: 32px;
}
h5 {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: 400;
  color: #2e0036;
}
p {
  font-family: "微软雅黑";
  font-size: 14px;
  color: #2e0036;
  margin-bottom: 7px;
}
h6 {
  font-family: "微软雅黑";
  font-size: 14px;
  color: #2e0036;
  font-weight: 400;
}
h5 > span {
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
h4 {
  color: #2e0036;
}
.d0 h4 > a {
  color: #007eff;
}
.d2 div > p {
  margin-left: 19px;
}
.d1-1 {
  margin-top: 10px;
}
.d2-1 {
  margin-bottom: 8px;
}
.d3 {
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>