<template>
    <nav class="navbar" id="header" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/home">
                <img src="http://www.starbucks.ru/media/logo_tcm84-366_w1024_n.png" width="30" height="30">
                <strong>Think Coffee</strong>
            </router-link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/home" class="navbar-item">
                    Главная
                </router-link>

                <router-link to="/order" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/breakfast.svg`)"></div>
                </router-link>

                <router-link to="/drinks" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/coffee.svg`)"></div>
                </router-link>

                <router-link to="/foods" class="navbar-item">
                    <div class="ic" v-html="require(`../assets/icons/doughnut.svg`)"></div>
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
import Breakfast from '../assets/icons/breakfast.svg'

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
        }
    },
    methods: {
        logout() {
            clearCred();
            this.$emit('setauth');
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
</style>
