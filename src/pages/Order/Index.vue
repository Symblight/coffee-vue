<template>
    <div class="container">
        <h1>Заказ:</h1>
        <div class="menu">
            <ProductOrder v-for="product in order" :key="product.id" v-bind:data="product"></ProductOrder>
        </div>
        <div>Количество товаров: </div>
        <div>Сумма: </div>
        <button v-on:click="onOrder">Заказать</button>
        <button v-on:click="onClear">Очистить заказ</button>
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
            store.clearOrder()
        },
        onOrder(){
            store.setOrder()
        }
    },
    components: {
        ProductOrder
    },
    computed: {
        order() {
            return this.order
        },
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

