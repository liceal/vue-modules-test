import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]


const files = require.context(
    "@/views",
    true,
    /\.\/.[^/]*\/index\.vue?/
); //返回数组 ['./dirName/index.vue']

//自动路由
files.keys().forEach(file => {
    const dirName = file.match(/\.\/(.*)\//)[1];
    routes.push({
        path: '/' + dirName,
        name: dirName,
        component: () =>
            import ('../views/' + dirName)
    })
});

const router = new VueRouter({
    routes
})

export default router