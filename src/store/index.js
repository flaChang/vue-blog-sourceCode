import {createStore} from 'vuex'
import getters from './modules/auth/getters'
import actions from "./modules/auth/actions"
import mutations from "./modules/auth/mutations"

const state ={
  user: null,
  isLogin: false
}
export default createStore({
  state,
  getters,
  actions,
  mutations
})