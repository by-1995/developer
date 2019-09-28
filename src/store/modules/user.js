// 用户登录信息
const state = {
  user: '', // 当前登录的用户信息
  access_token: '', // 登录凭证
  developerInfo: '', // 开发者信息
  isLogin:0,//用户状态
}

const mutations = {
    changeLogin(state,data){
      state.isLogin = data;
    },
  SET_ACCESS_TOKEN (state, data) {
    state.access_token = data
  },
  SET_USER (state, data) {
    state.user = data
  },
  SET_DEVELOPERINFO (state, data) {
    state.developerInfo = data
  },
  SET_DEL_TOKEN (state, data) {
    state.access_token = ''
  },
  SET_DEL_USER(state, data) {
    state.user = ''
  },
  SET_DEL_DEVELOPERINFO (state, data) {
    state.developerInfo = ''
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
