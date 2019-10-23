import Vue from 'vue'
import App from './App'
import './database/index'
// 封装云开发数据库
import db from './database'
Vue.prototype.$http = db

import global from './utils/global'
Vue.prototype.$domain = global.domain
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
