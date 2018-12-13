<template>
    <div class="menu">
        <Product v-for="drink in drinks" :key="drink.id" v-bind:data="drink"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { getDrinks } from "../../core/api";
import { store } from '../../core/store'

export default {
    name: 'Drinks',
    data() {
        return {
            drinks: []
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            getDrinks()
                .then((drinks) => {
                    this.drinks = drinks.data
                })
                .catch(err => {
                    console.log(err)
                })
        })
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


