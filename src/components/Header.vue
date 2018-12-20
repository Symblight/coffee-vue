<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/home">
                <img src="http://www.starbucks.ru/media/logo_tcm84-366_w1024_n.png" width="30" height="30">
                <strong class="hero-logo">Think Coffee</strong>
            </router-link>

            <a v-on:click="onActive" role="button" class="navbar-burger burger" v-bind:class="[isActive ? 'is-active': null]" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="[isActive ? 'is-active': null]">
            <div class="navbar-start">
                <router-link to="/order" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/shopping-bag.svg`)">Заказ</div>
                    <span class="label-header">Заказ</span>
                </router-link>

                <router-link to="/drinks" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/coffee.svg`)">Напитки</div>
                    <span class="label-header">Напитки</span>
                </router-link>

                <router-link to="/foods" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/doughnut.svg`)">Еда</div>
                    <span class="label-header">Еда</span>
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons" v-if="!auth">
                        <router-link to="/signup" class="button is-primary">
                            <strong>Регистрация</strong>
                        </router-link>
                        <router-link to="/login" class="button is-light">
                            Войти
                        </router-link>
                    </div>
                    <div class="buttons" v-if="auth">
                        <router-link to="/profile" class="button is-primary">
                            <strong>Профиль</strong>
                        </router-link>

                        <router-link to="/" class="button is-danger">
                            <strong v-on:click="logout()">Выйти</strong>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Coffee from '../assets/icons/coffee.svg'
import Doughnut from '../assets/icons/doughnut.svg'
import Breakfast from '../assets/icons/shopping-bag.svg'

import {getToken, getUser, clearCred} from '../utils/local'
import { store }  from '../core/store'

export default {
    name: 'Header',
    props: ['auth'],
    event: ['setAuth'],
    data() {
        return {
            coffee: Coffee,
            user: getUser(),
            isActive: false
        }
    },
    methods: {
        logout() {
            clearCred();
            this.$emit('setauth');
        },
        onActive() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped>
#header {
    border-bottom: 1px solid #e5e5e5;
}
.ic,svg {
    width: 25px;
    height: 25px;
}
.hero-logo {
    margin-left: 10px
}

.label-header {
    display: none;
}

@media screen and (max-width: 1024px) {
    .ic {
        display: none;
    }
    .label-header {
        display: block;
    }
}
</style>
