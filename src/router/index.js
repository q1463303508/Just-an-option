import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/index'
import Pro from '../components/page/prolist'
import Name from '../components/page/namelist'
import New from '../components/page/newbuild'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/Main'
    }, {
        path: '/Main',
        component: Main,
        children: [{
            path: '/Name',
            component: Name,
        }, {
            path: '/Pro',
            component: Pro
        }, ]
    }, {
        path: '/New',
        component: New
    }]
})