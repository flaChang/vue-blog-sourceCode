import {createStore} from 'vuex'
import blog from './modules/blog'
import auth from './modules/auth'

export default createStore({
  modules:{
    blog,
    auth
  }
})