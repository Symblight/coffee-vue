<template>
    <div id="container">
        <Header v-bind:auth="auth" v-on:setauth="setAuth()"></Header>
        <section class="content container">
            <router-view 
                @setauth="setAuth()"

                @setproduct="setProduct"
                @clearorder="clearOrder"
                @setorder="setOrder"
                @setordersale="setOrderSale"
    
                @removeproduct="removeProduct"
                @addproduct="addProduct"
                @clearproduct="clearProduct"

                :order="order"
                :messages="messages"
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
import { updateOrderUser, updateOrderUserSale } from "./api"
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
            },
            messages: {
                text: '',
                error: ''
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
            const user = getFromLocalUser();
            const data = {
                order: this.order,
                user: user.id
            }
            if(this.order.total > 0) {
                updateOrderUser(data)
                    .then((json) => {
                        this.messages.text = json.message
                        this.clearOrder()
                    })
                    .catch(err => {
                        console.log(err)
                        this.messages.error = err.message
                    })
            }
        },
        setOrderSale() {
            const user = getFromLocalUser();
            const data = {
                order: this.order,
                user: user.id
            }
            if(this.order.total > 0) {
                updateOrderUserSale(data)
                    .then((json) => {
                        this.messages.text = json.message
                        this.clearOrder()
                    })
                    .catch(err => {
                        console.log(err)
                        this.messages.error = err.message
                    })
            }
        },
        clearOrder() {
            this.order.products = []
            this.order.count = 0
            this.order.total  = 0
        },
        removeProduct(product) {
            if (product.count > 1) {
                const findProduct = this.order.products.find((prod) => product.id === prod.id)
                const index = this.order.products.indexOf(findProduct)
                this.order.products[index] = {
                    ...product,
                    count: --product.count
                }
            } else {
                this.clearProduct(product.id) 
            }

            this.order.count--
            this.order.total -= product.price
        },
        addProduct(product) {
            const findProduct = this.order.products.find((prod) => product.id === prod.id)
            const index = this.order.products.indexOf(findProduct)
            this.order.products[index] = {
                ...product,
                count: ++product.count
            }

            this.order.count++
            this.order.total += product.price
        },
        clearProduct(id) {
            this.order.products = this.order.products.filter(product => product.id !== id)
        },
    },
    mounted () {
        const user = getFromLocalUser();

        if(user) {
            this.auth = !!user
        } 
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