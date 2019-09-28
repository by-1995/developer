import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/page/home.vue'
import CreateApply from '@/subpage/myApply/CreateApply'
import RecycleBin from '@/subpage/myApply/RecycleBin'
import ViewApply from '@/subpage/myApply/ViewApply'
import DeveloperReg from '@/subpage/developerReg/developerReg'
import AuditProgress from '@/subpage/myMessage/auditProgress'
import MessageNotif from '@/subpage/myMessage/MessageNotif'
import DeveloperInfo from '@/subpage/personal/developerInfo'
import MemberManage from '@/subpage/personal/MemberManage'
import Login from '@/subpage/login/Login'

import Homepage from '@/page/homepage.vue'
import Overview from '@/subpage/overview/overview'
import Help from '@/subpage/loginhelp/help'
import GainKey from '@/subpage/loginhelp/GainKey.vue'
import Product from '@/subpage/product/product.vue'
import DownloadLogin from '@/subpage/compon/downloadLogin/downloadLogin.vue'
import ServeAccredit from '@/subpage/serveAccredit/serveAccredit.vue'
import File from '@/subpage/serveAccredit/file.vue'
import Intr from '@/subpage/serveAccredit/introduce.vue'
import UserGuide from '@/subpage/serveAccredit/userGuide.vue'
import Faq from '@/subpage/serveAccredit/faq.vue'
import OnlineDebugging from '@/subpage/serveAccredit/onlineDebugging.vue'

import { format } from 'util'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/login'
      // redirect: '/developerReg'
    },

    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/developer',
      // name: 'MyApply',
      component: Home,
      redirect: '/developer/overview',
      children: [
        {
          path: 'overview',
          // name: 'ViewApply',
          component: Overview,
          meta: {
            title: '概述',
          }
        },
        {
          path: 'help',
          // name: 'help',
          component: Help,
          meta: {
            title: '注册和获取秘钥'
          }
        },
        {
          path: 'gainKey',
          // name: 'help',
          component: GainKey,
          meta: {
            title: '获取秘钥',
            ewq: "扫码登录"
          }
        },
        {
          path: 'downloadLogin',
          // name: 'help',
          component: DownloadLogin,
          meta: {
            title: '下载彩之云',
            ewq: "扫码登录"
          }
        },
        {
          path: 'serveacc',
          // name: 'serveacc',
          component: ServeAccredit,
          redirect: '/developer/serveacc/intr',
          meta: {
            title: '服务授权'
          },
          children: [
            {
              path: "intr",
              // name:"intr",
              component: Intr,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "file",
              // name:"file",
              component: File,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "faq",
              // name:"faq",
              component: Faq,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "userGuide",
              // name:"userGuide",
              component: UserGuide,
              meta: {
                title: '服务授权'
              },
            },
            {
              path: "debugging",
              // name:"debugging",
              component: OnlineDebugging,
              meta: {
                title: '服务授权'
              },
            }
          ],
        },
      ]
    },


    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/developerReg',
      name: 'DeveloperReg',
      component: Home,
      redirect: '/developerReg/index',
      children: [
        {
          path: 'index',
          name: 'DeveloperRegIndex',
          component: DeveloperReg,
          meta: {
            title: '注册成为开发者'
          }
          // beforeEnter: (to, from , next) => {
          //   console.log(from.name)
          //   if (from.path === '/personal/developerInfo') {
          //     to.meta.title = '升级成为企业开发者'
          //   } else if (from.path === '/myMessage/auditProgress') {
          //     to.meta.title = '注册成为开发者'
          //   }
          //   next()
          // }
        }
      ]
    },
    {
      path: '/myApply',
      name: 'MyApply',
      component: Home,
      children: [
        {
          path: 'viewApply',
          name: 'ViewApply',
          component: ViewApply,
          meta: {
            title: '查看应用'
          }
        },
        {
          path: 'createApply',
          name: 'CreateApply',
          component: CreateApply,
          meta: {
            title: '创建应用'
          }
        },
        {
          path: 'recycleBin',
          name: 'RecycleBin',
          component: RecycleBin,
          meta: {
            title: '回收站'
          }
        }
      ]
    },
    {
      path: '/myMessage',
      name: 'myMessage',
      component: Home,
      children: [
        {
          path: 'auditProgress',
          name: 'AuditProgress',
          component: AuditProgress,
          meta: {
            title: '审核进度'
          }
        },
        {
          path: 'messageNotif',
          name: 'MessageNotif',
          component: MessageNotif,
          meta: {
            title: '消息通知'
          }
        }
      ]
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Home,
      children: [
        {
          path: 'developerInfo',
          name: 'DeveloperInfo',
          component: DeveloperInfo,
          meta: {
            title: '开发者资料'
          }
        },
        {
          path: 'memberManage',
          name: 'MemberManage',
          component: MemberManage,
          meta: {
            title: '成员管理'
          }
        }
      ]
    },
    {
      path: "*", component: { template: `<h1 style="color:red;fontSize:60px">404 Not Font </h1>`, },
    },


  ]
})
// router.beforeEach((to, from, next) => {
//   // next()
//   //   // 调用接口判断当前登录用户是否是开发者若不是开发者则重定向到注册开发者页面，且所有页面均为注册开发者页面，若已是开发者则重定向到查看应用列表页面
//   //   // 个人开发者待审核 个人开发者申请成功且未实名则所有页面显示为待审核
//   //   // 企业开发者注册 必须实名 否则注册失败
//   // let access_token = store.getters.access_token || router.query.access_token
//   // console.log(access_token,store.getters.access_token)
//   // let developerInfo = store.getters.developerInfo
//   // let status = 1 // 当前登录用户开发者认证审核状态 1 为待审核 2已通过 3已拒绝
//   if (to.path === '/login') {
//     next()
//   } else {
//     if (store.getters.access_token) { // 用户已登录
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   }
// })





export default router