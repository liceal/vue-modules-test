import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        //优美的线条
        path: '/vue-trend',
        name: 'VueTrend',
        component: () =>
            import ('../views/vue-trend')
    },
    {
        //粒子特效
        path: "/vue-particles",
        name: "VueParticles",
        component: () =>
            import ('../views/vue-particles')
    },
    {
        //markdown编辑器
        path: "/mavon-editor",
        name: "MavonEditor",
        component: () =>
            import ('../views/mavon-editor')
    },
    {
        //markdown代码解析器+代码高亮
        path: "/marked_and_highlight",
        name: "Marked+highlight",
        component: () =>
            import ('../views/marked_and_highlight')
    },
    {
        //socket 长连接
        path: "/socket",
        name: "socket",
        component: () =>
            import ('../views/socket')
    },
    {
        //瀑布流
        path: '/water_fall',
        name: "WaterFall",
        component: () =>
            import ('../views/vue-waterfall-easy')
    },
    {
        //bootstrap
        path: '/bootstrap',
        name: 'bootstrap',
        component: () =>
            import ('../views/bootstrap')
    },
    {
        //swiper
        path: '/swiper',
        name: 'swiper',
        component: () =>
            import ('../views/swiper')
    }
]

const router = new VueRouter({
    routes
})

export default router