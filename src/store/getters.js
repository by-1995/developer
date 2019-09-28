const getters = {
  user: state => state.user.user,
  access_token: state => state.user.access_token,
  developerInfo: state => state.user.developerInfo
}

export default getters