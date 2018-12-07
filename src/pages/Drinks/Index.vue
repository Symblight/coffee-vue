<template>
    <div class="menu">
        <Product v-for="drink in drinks" :key="drink.id" v-bind:data="drink"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { store } from '../../core/store'

export default {
    name: 'Drinks',
    data() {
        return {
            drinks: store.state.drinks
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


