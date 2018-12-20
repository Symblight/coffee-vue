<template>
    <div class="container">
        <h1>Заказ:</h1>
        <div class="menu">
            <ProductOrder 
                v-for="product in order.products" 
                :key="product.id" 
                :data="product" 

                @onRemove="$emit('removeproduct', product)"
                @onClear="$emit('clearproduct', product.id)"
                @onAdd="$emit('addproduct', product)"
            >
            </ProductOrder>
        </div>

        <div>Количество товаров: {{order.count}} шт</div>
        <div>Сумма: {{order.total}} рублей</div>

        <button class="button is-success" v-on:click="onOrder">Заказать</button>
        <button class="button" v-on:click="onClear">Очистить заказ</button>
        <button v-if="accumulationTotal" class="button is-info" v-on:click="onOrderSale">Заказать с накопительной суммы</button>

        <div v-if="messages.text" class="notify">
            <div class="notification is-primary">
                <button class="delete" v-on:click="onDeleteNotify"></button>
                {{messages.text}}
            </div>
            <div v-if="messages.error || error" class="notification is-danger">
            <button class="delete"></button>
                {{!error ? messages.error : error}}
            </div>
        </div>

    </div>
</template>

<script>
import ProductOrder from '../../components/ProductOrder'

import { getUser } from "../../core/api"
import { getUser as getFromLocalUser } from "../../utils/local"

export default {
    name: 'Order',
    props: ["order", "messages"],
    event: ['clearorder', 'setorder', 'removeproduct', 'addproduct', 'clearproduct', 'setordersale'],
    data() {
        return {
            accumulationTotal: 0,
            error: ''
        }
    },
    components: {
        ProductOrder
    },
    methods: {
        onClear() {
            this.$emit('clearorder')
        },
        onOrder() {
            this.$emit('setorder')
        },
        onOrderSale() {
            if (this.accumulationTotal >= this.order.total) {
                this.$emit('setordersale')
            } else {
                this.error = "Недостаточно суммы"
            }
        },
        onDeleteNotify() {
            this.messages.text = null
        },
        getUserOrder() {
            console.log(1111)
        }
    },
    mounted() {
        const user = getFromLocalUser();
        if(user) {
            getUser(user.id)
                .then((user) => {
                    this.accumulationTotal = user.data.accumulationTotal
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .notify {
        position: fixed;
        display: flex;
        flex-direction: column;
        bottom: 10;
        left: 10;
    }
</style>

