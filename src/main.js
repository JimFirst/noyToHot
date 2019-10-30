import Vue from 'vue'
import App from './App'
// 封装云开发数据库
import api from './api'
import './style/index.scss'
Vue.prototype.$http = api

// 自定义全局组件
import DCell from './components/DCell.vue'
Vue.component('DCell', DCell)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
