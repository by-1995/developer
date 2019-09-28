<template>
  <div>
    <el-card class="box-card" style="text-align: center">
    <div slot="header" class="clearfix">
      <span>扫码登录</span>
    </div>
    <div style="position: relative" class="QRcodeImgWrapper">
      <el-image 
        class="QrcodeImg"
        v-if="qrcode_img"
        :src="qrcode_img"
      >
        <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
        </div>
      </el-image>
      <div v-if="showReload">
        <div
          class="mask"
          style="position: absolute;
          top: 0px;
          left: 40px;
          width: 360px;
          height: 360px;
          background: #666;
          opacity: .3;"
        >
        </div>
        <i
          style="position:absolute;
          top: 140px;
          left: 160px;
          font-size: 100px;
          color: #eee"
          class="el-icon-refresh-right"
          @click="reload"
        ></i>
      </div>
    </div>
      <div>
        <span>
          打开
          <span style="cursor: pointer; color: #409EFF;">彩之云APP</span>
          扫一扫登录
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '@/api/subspi'
export default {
  name: 'Login',
  data () {
    return {
      qrcode_uuid: "",
      qrcode_img: "",
      access_token: "",
      source: '',
      code: '',
      isDeveloper: '',//当前用户是否为开发者
      status: '', // 当前登录用户注册开发者审核进度
      showReload: false,
      timer: null
    }
  },
  methods: {
    reload () {
      this.showReload = false
      this.getQrcodeInfo()
    },
    getQrcodeInfo () {
      let timer = setInterval(() => {
        this.getCodeFromQRcode()
      }, 1500)
      this.timer = timer
      this.getQRcodeImg()
    },
    getQRcodeImg () { // 获取二维码图片及二维码唯一编号
      let timer = setInterval(() => {
        api.userLogin.getLoginQRcode().then(res => {
          if (res.code === 0) {
          // sessionStorage.setItem('weq', "1231231")
          sessionStorage.setItem('wweq', "1231wwwwwwwww231")
          //   console.log("55555555",sessionStorage.getItem("weq"))
          //   console.log("55555555",sessionStorage.getItem("wweq"))
            let content = res.content
            this.qrcode_img = content.qrcode_img
            this.qrcode_uuid = content.qrcode_uuid
            clearInterval(timer)
          } else {
            this.$notify({
              title: "警告",
              message: res.message,
              type: "warning"
            })
          }
        })
      }, 1000)
    },
    getCodeFromQRcode () {
      let params = {
        qrcode_uuid: this.qrcode_uuid
      }
      api.userLogin.getCodeFromQRcode(params).then(res => {
        if (res.code === 0) {
          console.log("33333333")
          let { source, code } = res.content
          this.source = source
          this.code = code
          if (this.source && this.code) {
            this.qrcode_uuid = ''
            clearInterval(this.timer)
            this.getTokenFromCode()
          }
        } else if (res.code === 5016) {
          this.$notify({
            title: "警告",
            message: "二维码已过期，请点击图片重新获取二维码！",
            type: "warning"
          })
          this.showReload = true
          clearInterval(this.timer)
        }
      })
    },
    //根据授权code获取授权token (登陆请求)
    getTokenFromCode () {
      let params = {
        source: this.source,
        code: this.code
      }
      api.userLogin.getTokenFromCode(params).then(res => {
        console.log("1111111111111")
        if (res.code === 0) {
          console.log('222222222')
          sessionStorage.setItem('user', JSON.stringify(res.content))
          this.$store.commit('user/changeLogin','100')  //登录后改变登录状态
          this.$store.commit('user/SET_USER', res.content)
          let access_token = this.access_token
          access_token = sessionStorage.getItem('user').access_token || res.content.access_token
          this.$store.commit('user/SET_ACCESS_TOKEN', res.content.access_token)
          let params = {
            accessToken: access_token
          }
          this.loginUserIdentity(params)
        } else {
          this.$notify({
            title: "错误",
            message: res.message,
            type: "warning"
          })
        }
      })
    },
    //用户状态判断
    loginUserIdentity (params) {
      api.developerReg.loginUserIdentity(params).then(res => {
        if (res.code === 0) {
          this.isDeveloper = res.content.isDeveloper
          sessionStorage.setItem('developerInfo', JSON.stringify(res.content))
          this.$store.commit('user/SET_DEVELOPERINFO', res.content)
        }
      }).then(res => {
        let developerInfo = this.$store.getters.developerInfo
        console.log(developerInfo)
        if (developerInfo && this.isDeveloper) {
          this.$router.replace('/myApply/viewApply')
        } 
        else { // 如果还不是开发者 判断开发者认证审核进度
          this.getCertificationAudit(params).then(res => {
            if (this.status !== 2) { // 待审核
              this.$router.replace('developerReg')
            }
          })
        }
      })
    },
    getCertificationAudit (params) {
      api.myMessage.getDeveloperCertificationAudit(params).then(res => {
        if (res.code === 0) {
          console.log(res)
          this.status = res.content.status
        }
      })
    }
  },
  created () {
    this.getQrcodeInfo()
  }
}
</script>
<style lang="scss" scoped>
.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
  .QRcodeImgWrapper {
    height: 0;
    padding-bottom: 82.7%;
  }
</style>