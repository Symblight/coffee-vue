<template>
    <div class="container">
        <h1>Заказ:</h1>
        <div class="menu">
            <ProductOrder v-for="product in order.products" :key="product.id" v-bind:data="product" @onRemove="onRemoveProduct"></ProductOrder>
        </div>
        <div>Количество товаров: {{order.count}} шт</div>
        <div>Сумма: {{order.total}} рублей</div>
        <button class="button is-success" v-on:click="onOrder">Заказать</button>
        <button class="button" v-on:click="onClear">Очистить заказ</button>
    </div>
</template>

<script>
import ProductOrder from '../../components/ProductOrder'

export default {
    name: 'Order',
    props: ["order"],
    event: ['clearorder', 'setorder', 'removeproduct'],
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
        onRemoveProduct(id) {
            this.$emit('removeproduct', id)
        },
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

