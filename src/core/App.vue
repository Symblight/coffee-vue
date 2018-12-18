<template>
    <div id="container">
        <Header v-bind:auth="auth" v-on:setauth="setAuth()"></Header>
        <section class="content container">
            <router-view 
                v-on:setauth="setAuth()"
                v-on:setproduct="setProduct"
                v-bind:order="order"
                @clearorder="clearOrder"
                @setorder="setOrder"
                @removeproduct="removeProduct"
            ></router-view>
            <router-link to="/order" class="order">Order</router-link>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../pages/Home'

import { store }  from '../core/store'
import { getUser } from "./api"
import { getUser as getFromLocalUser} from "../utils/local"

export default {
    name: 'App',
    data() {
        return {
            auth: false,
            order: []
        }
    },
    components: {
        Header, Footer
    },
    methods: {
         setAuth() {
            this.auth = !this.auth;
        },
        setProduct(product) {
            const findProduct = this.order.find((prod) => product.id === prod.id)

            if (findProduct) {
                product.count = findProduct.count + 1
                 //
            } else {
                product.count = 1;
                this.order.push(product)
            }
        },
        setOrder() {
            console.log('set order!')
            this.clearOrder()
        },
        clearOrder() {
            console.log('clear!')
            this.order = []
        },
        removeProduct(id) {
            console.log('remove!', id)
            this.order = this.order.filter(product => product.id !== id)
        }
    },
    mounted () {
        const user = getFromLocalUser();
        this.auth = !!user 
    }
}
</script>


<style lang="scss" scoped>
.content {
    display: flex;
    flex-grow: 1;
    margin-top: 2rem;
}
#container {
    display: flex;
    position: relative;
    background-color: white;
    min-height: 100vh;
    flex-direction: column;
    z-index: 1000;
}

.order { 
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 5%;
    right: 5%;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    background-color: #00d1b2;
    padding: 12px;
}
</style>