import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from  'element-plus'
import 'element-plus/dist/index.css'
import store from "@/store/modules/auth"
import Util from '@/helpers/util'

createApp(App)
  .use(Util)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
