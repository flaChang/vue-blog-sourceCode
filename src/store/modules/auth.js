const state = {
  user: null,
  isLogin:false
}

const getter = {

}

const mutations = {
   setUser(state,payload){
     state.user = payload.user
   },
   setLogin(state,payload){
     state.isLogin = payload.isLogin
   }
}

const action = {

}

export default {
  state,
  getter,
  action,
  mutations
}