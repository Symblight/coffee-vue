<template>
    <div class="menu">
        <Product v-for="food in foods" :key="food.id" v-bind:data="food"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { store } from '../../core/store'

export default {
    name: 'Foods',
    data() {
        return {
            foods: store.state.foods
        }
    },
    components: {
        Product
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
