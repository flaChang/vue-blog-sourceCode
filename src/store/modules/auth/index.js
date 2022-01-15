import {createStore} from 'vuex'
import getters from './getters'
import actions from "./actions"
import mutations from "./mutations"

const state ={
  user: null,
  isLogin: false
}
const store = createStore({
  state,
  getters,
  actions,
  mutations
})

export default store