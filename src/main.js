import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocal from 'element-ui/lib/locale/lang/zh-CN'

//可爱的样式
// import 'papercss/dist/paper.css'
Vue.config.productionTip = false
Vue.prototype._BaseUrl = "http://server.test/api"

Vue.use(ElementUI,{zhLocal})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')