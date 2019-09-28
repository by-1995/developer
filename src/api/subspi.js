import axios from 'axios'
import qs from 'qs'
import store from '@/store'
// import {message} from 'antd'
import {
  message
} from 'element-ui'
var url = document.domain,baseUrl

if (!url || url.indexOf('test') !== -1 || url === 'localhost') { // 测试环境
  baseUrl = 'http://192.168.0.111:8054'
  // 测试'https://open-devtest.colourlife.com'
  // 泊涛内网 'http://192.168.0.111:8054'
  // 稳内网 'http://192.168.0.119:8054'
} else if (url === 'open-devbeta.colourlife.com' || url.indexOf('beta') !== -1) {
  // 预发环境
  baseUrl = 'https://open-devbeta.colourlife.com'
} else { // 正式环境
  baseUrl = 'https://open-dev.colourlife.com'
}
//响应拦截
axios.interceptors.response.use(function (response) {
  // console.log(response)
  if (response.data.code === 400) {
    // sessionStorage.clear()
    // store.commit('user/SET_DEL_TOKEN')
    // store.commit('user/SET_DEL_USER')
    // store.commit('user/SET_DEL_DEVELOPERINFO')
    // window.location.href = _baseUrl+'/#/login'
    // message.error(response.data.message)
  }
  if (response.data.code !== 0) {
    //message.error(response.data.message)
    // console.log(response.data.message)
  }
  return response
}, function (error) {
  // Do something with response error  
  return Promise.reject(error)
})


//开发者文档
//概述部分接口
const overview={
  //服务列表
  getservelist () {
    return axios.get(`http://192.168.0.111:8054/open/service/list`, {
      // params: params
    }).then(res => res.data)
  },
  //服务概述
  getoverview(params){
    return axios.get(`http://192.168.0.111:8054/open/service/summary`, {
      params: params
    }).then(res => res.data)
  },
  //服务接口
  getserve(params){
    return axios.get(`http://192.168.0.111:8054/open/service/api/list`, {
      params: params
    }).then(res => res.data)
  },
  //接口介绍
  getintr(params){
    return axios.get(`http://192.168.0.111:8054/open/api/desc`, {
      params: params
    }).then(res => res.data)
  },
}


// 用户登录部分接口
const userLogin = {
  // 1.获取二维码图片
  getLoginQRcode (params) {
    return axios.get(`${baseUrl}/open/qrcode`, {
      params: params
    }).then(res => res.data)
  },
  // 2.根据二维码编号获取授权code
  getCodeFromQRcode (params) {
    return axios.get(`${baseUrl}/open/qrcode/redirect`, {
      params: params
    }).then(res => res.data)
  },
  // 3.根据授权code获取授权token
  getTokenFromCode (params) {
    return axios.get(`${baseUrl}/open/qrcode/token`, {
      params: params
    }).then(res => res.data)
  }
}
// 注册开发者部分接口
const developerReg = {
  // 1. 登录用户身份判断
  loginUserIdentity (params) {
    return axios.get(`${baseUrl}/open/user/identity`, {
      params: params
    }).then(res => res.data)
  },
  // 2. 发送验证码
  sendVerificationCode (params) {
    return axios.post(`${baseUrl}/open/sms/send`, qs.stringify(params)).then(res => res.data)
  },
  // 3. 查询用户是否实名
  checkUserIdentity (params) {
    return axios.get(`${baseUrl}/open/identity/check`, {
      params: params
    }).then(res => res.data)
  },
  // 4.注册个人开发者
  regPersonalDeveloper (params) {
    return axios.post(`${baseUrl}/open/developer/apply`, qs.stringify(params)).then(res => res.data)
  },
  // 5.实名认证二维码地址获取
  getIdentityQRcode (params) {
    return axios.get(`${baseUrl}/open/identity/qrcode`, {
      params: params
    }).then(res => res.data)
  },
  // 6.上传图片
  uploadImg (params) {
    return axios.post(`${baseUrl}/open/upload`, qs.stringify(params)).then(res => res.data)
  },
  // 7. 获取行业类别
  getCategoryList (params) {
    return axios.get(`${baseUrl}/open/category`, {
      params: params
    }).then(res => res.data)
  },
  // 8. 获取省市区地址列表
  getRegionList (params) {
    return axios.get(`${baseUrl}/open/region`, {
      params: params
    }).then(res => res.data)
  },
  // 9. 注册企业开发者
  regEnterpriseDeveloper (params) {
    return axios.get(`${baseUrl}/open/enterpriseDeveloper/apply`, {
      params: params
    }).then(res => res.data)
  }
}
// 我的应用部分接口
const myApply = {
  // 1.获取应用列表
  getAppList (params) {
    return axios.get(`${baseUrl}/open/application/list`, {
      params: params
    }).then(res => res.data)
  },
  // 2.创建应用
  createApp (params) {
    return axios.post(`${baseUrl}/open/application/create`, qs.stringify(params)).then(res => res.data)
  },
  // 3.修改应用
  updateApp (params) {
    return axios.post(`${baseUrl}/open/application/update`, qs.stringify(params)).then(res => res.data)
  },
  // 4. 删除应用
  deleteApp (params) {
    return axios.post(`${baseUrl}/open/application/delete`, qs.stringify(params)).then(res => res.data)
  },
  // 5. 恢复应用
  recoveryApp (params) {
    return axios.post(`${baseUrl}/open/application/recovery`, qs.stringify(params)).then(res => res.data)
  },
  // 6. 安全回调域名设置
  setUpSafeDomain (params) {
    return axios.get(`${baseUrl}/safe/domain`, {
      params: params
    }).then(res => res.data)
  },
  // 7. 获取开放服务接口列表数据
  getOpenApiList (params) {
    return axios.get(`${baseUrl}/service/apis`, {
      params: params
    }).then(res => res.data)
  },
  // 8. 接口权限申请
  applyForApiJurisdiction (params) {
    return axios.get(`${baseUrl}/apis/jurisdiction/apply`, {
      params: params
    }).then(res => res.data)
  }
}
// 我的消息部分接口
const myMessage = {
  // 1.获取接口权限审核列表
  getApiPermissionAuditList (params) {
    return axios.get(`${baseUrl}/open/verify/list`, {
      params: params
    }).then(res => res.data)
  },
  // 2.获取开发者认证审核进度
  getDeveloperCertificationAudit (params) {
    return axios.get(`${baseUrl}/open/developer/verify`, {
      params: params
    }).then(res => res.data)
  },
  // 3.获取消息通知列表
  getMessageNotiyList (params) {
    return axios.get(`${baseUrl}/open/message/list`, {
      params: params
    }).then(res => res.data)
  },
  // 4.消息通知标记为已读
  markMessageNotiyRead (params) {
    return axios.post(`${baseUrl}/open/message/read`, qs.stringify(params)).then(res => res.data)
  },
  // 5.消息通知删除
  deleteMessageNotiy (params) {
    return axios.post(`${baseUrl}/open/message/delete`, qs.stringify(params)).then(res => res.data)
  }
}
// 个人中心部分接口
const Personal = {
  // 1.获取开发者资料详情
  getDeveloperInfo (params) {
    return axios.get(`${baseUrl}/open/developer/info`, {
      params: params
    }).then(res => res.data)
  },
  // 2.获取开发者企业成员列表
  getDeveloperMemberList (params) {
    return axios.get(`${baseUrl}/open/developer/members`, {
      params: params
    }).then(res => res.data)
  },
  // 3.企业开发者新增成员
  addMember (params) {
    return axios.post(`${baseUrl}/open/member/add`, qs.stringify(params)).then(res => res.data)
  },
  // 4. 企业开发者删除成员
  removeMember (params) {
    return axios.post(`${baseUrl}/open/member/remove`, qs.stringify(params)).then(res => res.data)
  },
  // 5.企业开发者转让管理员
  transferAdmin (params) {
    return axios.post(`${baseUrl}/open/member/transfer`, qs.stringify(params)).then(res => res.data)
  }
}
export default {
  //获取时间
  getTime: params => {
    var date = params
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },
  userLogin,
  developerReg,
  myApply,
  myMessage,
  Personal,
  overview
}
