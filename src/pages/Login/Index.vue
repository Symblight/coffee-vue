<template>
    <form class="form" v-on:keyup.enter="onSubmit">
        <h2>Авторизация</h2>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Логин" v-model="username">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Пароль" v-model="password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" v-on:click="onSubmit">
                    Войти
                </button>
            </p>
        </div>
            <div class="field">
            <p class="control">
                <router-link to="/signup">
                    Регистрация
                </router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { login } from "../../core/api"
import { setToken, setUser } from '../../utils/local'

    export default {
        name: 'Login',
        event: ['setAuth', 'setnotify'],
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();

                const user = {
                    username: this.username,
                    password: this.password,
                }

                login(user)
                    .then(res => {
                         setToken(res.data.token);
                         setUser(res.data.user);
                         this.$emit('setauth');
                         this.$router.push("profile/");
                    })
                    .catch(err => {
                        const messages = {
                            value: '',
                            error : err.text.error
                        }
                        this.$emit('setnotify', messages)
                    })
            },
        }
    }
</script>


<style lang="scss" scoped>
    .form {
        margin: auto;
        max-width: 400px;
        width: 100%;
    }
</style>
