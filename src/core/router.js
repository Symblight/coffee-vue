import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Drinks from '../pages/Drinks'
import Foods from '../pages/Foods'
import Order from '../pages/Order'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import SignUp from '../pages/SignUp'

import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

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
            component: Login
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})