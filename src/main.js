import Vue from 'vue'
import App from './App'
// 封装云开发数据库
import api from './api'
import './style/index.scss'
Vue.prototype.$http = api

import global from './utils/global'
Vue.prototype.$domain = global.domain
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
