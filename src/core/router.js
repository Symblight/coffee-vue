import Vue from 'vue'
import VueRouter from 'vue-router'

import {getToken} from '../utils/local'

import Home from '../pages/Home'
import Drinks from '../pages/Drinks'
import Foods from '../pages/Foods'
import Order from '../pages/Order'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import SignUp from '../pages/SignUp'

import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
    if (!getToken()) {
      next()
      return
    }
    next('/')
}
  
const ifAuthenticated = (to, from, next) => {
    if (getToken()) {
      next()
      return
    }
    next('/login')
}

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/drinks',
            component: Drinks
        },
        {
            path: '/foods',
            component: Foods
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/signup',
            component: SignUp,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/profile/:id',
            component: Profile,
            props: true,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})