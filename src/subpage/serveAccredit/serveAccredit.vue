<template>
  <div>
    <div class="container">
      <div class="d1">
        <ul>
          <li>
            <a class="blue" @click="intr" href="javascript:;">服务介绍</a>
            <div class="block ab"></div>
          </li>
          <li>
            <a @click="file" href="javascript:;">服务文档</a>
            <div class="ab"></div>
          </li>
          <li>
            <a @click="user" href="javascript:;">使用指南</a>
            <div class="ab"></div>
          </li>
          <li>
            <a @click="faq" href="javascript:;">常见问题</a>
            <div class="ab"></div>
          </li>
          <li>
            <a @click="line" href="javascript:;">在线调试</a>
            <div class="ab"></div>
          </li>
        </ul>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import api from "@/api/subspi.js";

export default {
  data() {
    return {
      nodes: { q: 1, w: 2, e: 3 },
      nodew: [11, 22, 33],
      serviceUuid: "",
      apiUuid: "",
      descldUuid: ""
    };
  },
  mounted() {
    this.getservelist();
    this.getserve();
    this.getintr();
    $(".blue")
      .removeClass("blue")
      .next()
      .removeClass("block");
    $("ul>li:first-child>a").addClass("blue");
    $("li>a").click(function() {
      if ($(this).hasClass("blue") == false) {
        $(".blue")
          .removeClass("blue")
          .next()
          .removeClass("block");
        $(this).addClass("blue");
        $(this)
          .next()
          .addClass("block");
      }
    });
  },
  methods: {
    getservelist() {
      api.overview.getservelist().then(res => {
        if (res.code == 0) {
          this.serviceUuid = res.content[1].serviceUuid;
          console.log(res,"8888888888");
        }
      });
    },
    getserve() {
      var timer = setInterval(() => {
        let params = { serviceUuid: this.serviceUuid };
        api.overview.getserve(params).then(res => {
          if (res.code == 0) {
            this.apiUuid = res.content.list[0].uuid;
            this.descldUuid=res.content.list[0].desc[1].id
            console.log(res,res.content.list[0].desc, "33333333");
          }
        });
        clearInterval(timer);
      }, 100);
    },
    getintr() {
      var timer2 = setInterval(() => {
        let params = {
          serviceUuid: this.serviceUuid,
          apiUuid:this.apiUuid,
          apiDescId:this.descldUuid
        };
        api.overview.getintr(params).then(res => {
          // console.log(res,this.serviceUuid, this.apiUuid,this.descldUuid, "99999999999");
          if (res.code == 0) {
            console.log(res, "666666666");
          }
        });
        clearInterval(timer2);
      }, 2000);
    },
    intr() {
      this.$router.push("/developer/serveacc/intr");
    },
    file() {
      this.$router.push("/developer/serveacc/file");
    },
    user() {
      this.$router.push("/developer/serveacc/userGuide");
    },
    faq() {
      this.$router.push("/developer/serveacc/faq");
    },
    line() {
      this.$router.push("/developer/serveacc/debugging");
    }
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
.container {
  background-color: #fff;
}
p {
  font-size: 14px;
}
.d1 {
  padding-top: 20px;
}
.d1 {
  margin-left: 45px;
}
.d1 > ul {
  display: flex;
}
.d1 > ul > li {
  margin-right: 40px;
  position: relative;
}
.d1 > ul > li > div {
  width: 20px;
  height: 3px;
  position: absolute;
  left: 50%;
  top: 26px;
  transform: translateX(-50%);
  background-color: #007eff;
  display: none;
}
.block {
  display: block !important;
}
.blue {
  color: #007eff !important;
}
.d1 > ul > li > a {
  display: block;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  font-family: "微软雅黑";
  color: #4c4a65;
}
</style>