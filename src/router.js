import Router from 'vue-router'
import Vue from 'vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {path: '/',component:Home},
        {path: '/login',component:Login},
    ]
})
