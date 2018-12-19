<template>
    <div id="container">
        <Header v-bind:auth="auth" v-on:setauth="setAuth()"></Header>
        <section class="content container">
            <router-view 
                @setauth="setAuth()"

                @setproduct="setProduct"
                @clearorder="clearOrder"
                @setorder="setOrder"
    
                @removeproduct="removeProduct"
                @addproduct="addProduct"
                @clearproduct="clearProduct"

                v-bind:order="order"
            ></router-view>
            <OrderBlock :count="order.count"></OrderBlock>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../pages/Home'
import OrderBlock from '../components/Order'

import { store }  from '../core/store'
import { getUser } from "./api"
import { getUser as getFromLocalUser } from "../utils/local"

export default {
    name: 'App',
    data() {
        return {
            auth: false,
            order: {
                products: [],
                count: 0,
                total: 0
            }
        }
    },
    components: {
        Header, Footer, OrderBlock
    },
    methods: {
         setAuth() {
            this.auth = !this.auth;
        },
        setProduct(product) {
            const findProduct = this.order.products.find((prod) => product.id === prod.id)

            if (findProduct) {
                const index = this.order.products.indexOf(product)
                this.order.products[index] = {
                    ...product, 
                    count: ++findProduct.count
                }
            } else {
                product.count = 1;
                this.order.products.push(product)
            }

            this.order.count++
            this.order.total += product.price
        },
        setOrder() {
            console.log('set order!')
            this.clearOrder()
        },
        clearOrder() {
            console.log('clear!')
            this.order.products = []
            this.order.count = 0
            this.order.total  = 0
        },
        removeProduct(id) {
            console.log('remove!', id)
            const product = this.order.products.find(product => product.id === id)

            console.log(product)
           // this.order.products = this.order.products.filter(product => product.id !== id)
           // this.order.count--

           // this.order.total -= product.price
        },
        addProduct(product) {
            console.log("add product")
        },
        clearProduct() {
            console.log("clear")
        },
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
</style>