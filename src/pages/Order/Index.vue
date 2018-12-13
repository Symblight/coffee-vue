<template>
    <div class="container">
        <h1>Заказ:</h1>
        <div class="menu">
            <ProductOrder v-for="product in order" :key="product.id" v-bind:data="product" @onRemove="onRemove"></ProductOrder>
        </div>
        <div>Количество товаров: {{countProducts}}</div>
        <div>Сумма: {{totalCost}}</div>
        <button class="button is-success" v-on:click="onOrder">Заказать</button>
        <button class="button" v-on:click="onClear">Очистить заказ</button>
    </div>
</template>

<script>
import { store } from '../../core/store'
import ProductOrder from '../../components/ProductOrder'

export default {
    name: 'Order',
    data() {
        return {
            order: store.state.order
        }
    },
    methods: {
        onClear() {
            this.order = []
        },
        onOrder() {
          //  store.setOrder()
         // this.clearOrder()
         this.order = []
        },
        onRemove(id) {
         //   store.removeProduct(id)
         this.order = this.order.filter(product => product.id !== id)
        }
    },
    components: {
        ProductOrder
    },
    computed: {
        countProducts() {
            return this.order.length
        },
        totalCost() {
            return this.order.map(product => product.price)
        }
    },
}
</script>

<style lang="scss" scoped>
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

