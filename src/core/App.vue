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
                @setnotify="setNotify"

                :order="order"
            ></router-view>
            <OrderBlock :count="order.count"></OrderBlock>
            <Modal :openmodal="modal" @closeModal="closeModal" @setorder="setOrderModal"> </Modal>
            <Notify :messages="messages" @ondeletenotify="onDeleteNotify"></Notify>
        </section>
        <Footer />
        
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../pages/Home'
import OrderBlock from '../components/Order'
import Modal from '../components/Modal'
import Notify from '../components/Notify'

import { store }  from '../core/store'
import { updateOrderUser, updateOrderUserSale } from "./api"
import { 
    getUser as getFromLocalUser,
    getOrder as getOrderLocal,
    setOrder as setOrderLocal,
    clearOrder as clearOrderLocal
 } from "../utils/local"

export default {
    name: 'App',
    data() {
        return {
            auth: false,
            modal: false,
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
        Header, Footer, OrderBlock, Modal, Notify
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

            setOrderLocal(this.order)
        },
        setOrder() {
            const user = getFromLocalUser();
            if(this.order.total > 0) {
                if (user) {
                    const data = {
                        order: this.order,
                        user: user.id
                    }
                    updateOrderUser(data)
                        .then((json) => {
                            this.messages.text = json.message
                            this.clearOrder()
                        })
                        .catch(err => {
                            console.log(err)
                            this.messages.error = err.message
                        })
                } else {
                    this.modal = true;
                }
            }
        },
        setOrderModal() {
            this.modal = false;
            this.clearOrder()
            this.messages.text = "Заказ выполнен!"
        },
        setOrderSale() {
            const user = getFromLocalUser();
            const data = {
                order: this.order,
                user: user.id
            }
            if(this.order.total > 0 && user) {
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

            clearOrderLocal()
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
            setOrderLocal(this.order)
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

            setOrderLocal(this.order)
        },
        clearProduct(id) {
            const findProduct = this.order.products.find((prod) => prod.id === id)
            const index = this.order.products.indexOf(findProduct)

            this.order.products = this.order.products.filter(product => product.id !== id)

            this.order.count -= findProduct.count
            this.order.total -= findProduct.price

            setOrderLocal(this.order)
        },
        closeModal() {
            this.modal = false
        },
        setNotify(value) {
            this.messages = value
        },
        onDeleteNotify() {
            this.messages = {
                error:'',
                text: ''
            }
        }
    },
    mounted () {
        const user = getFromLocalUser();
        const order = getOrderLocal();

        if (order) {
            this.order = order
        }

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

@media screen and (max-width: 640px) {
    .content {
        padding-left: 8px;
        padding-right: 8px;
    }
}
</style>