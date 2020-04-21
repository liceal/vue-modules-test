import Vue from 'vue'
import App from './App.vue'
import router from './router'

//可爱的样式
// import 'papercss/dist/paper.css'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')