<template>
    <form class="form" v-on:keyup.enter="onSubmit">>
        <h2>Регистрация</h2>
        <div class="field">
            <label class="label">Имя</label>
            <div class="control">
                <input class="input" type="text" v-model="firstName">
            </div>
        </div>

        <div class="field">
            <label class="label">Фамилия</label>
            <div class="control">
                <input class="input" type="text" v-model="lastName">
            </div>
        </div>

        <div class="field">
            <label class="label">Логин</label>
            <div class="control">
                <input class="input" type="text" v-model="username">
            </div>
        </div>

        <div class="field">
            <label class="label">Адрес</label>
            <div class="control">
                <input class="input" type="text" v-model="adress">
            </div>
        </div>

        <div class="field">
            <label class="label">Пароль</label>
            <div class="control">
                <input class="input" type="password" v-model="password">
            </div>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" v-on:click="onSubmit">
                    Регистрация
                </button>
            </p>
        </div>
            <div class="field">
            <p class="control">
                Есть аккаунт?
                <router-link to="/login">
                    Войти
                </router-link>
            </p>
        </div>
    </form>
</template>

<script>
import { signUp } from "../../core/api";
import { setToken, setUser } from '../../utils/local'

export default {
    name: 'SignUp',
    props: ["setauth", "messages"],
    events: ["setnotify"],
    data(){
        return {
            username: '',
            password: '',
            lastName: '',
            firstName: '',
            adress: ''
        }
    },
    methods: {
            onSubmit(event) {
                event.preventDefault()

                const user = {
                    username: this.username,
                    password: this.password,
                    lastName: this.lastName,
                    firstName: this.firstName,
                    adress: this.adress
                }
                let valid  = false

                signUp(user)
                    .then(res => {
                         setToken(res.data.token)
                         setUser(res.data.user)
                         this.$emit('setauth')
                         this.$router.push(`profile`)
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
 .form{
     max-width: 400px;
     width: 100%;
     margin: auto;
 }
</style>

