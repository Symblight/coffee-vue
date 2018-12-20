<template>
    <div class="menu">
        <Product v-for="drink in drinks" :key="drink.id" v-bind:data="drink" @setproduct="setProduct(drink)"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { getDrinks } from "../../core/api";

export default {
    name: 'Drinks',
    event: ['setproduct'],
    data() {
        return {
            drinks: []
        }
    },
    methods: {
        setProduct(drink) {
            this.$emit('setproduct', drink)
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
        justify-content: space-between;
        flex-direction: row;
        max-width: 960px;
        margin: 0 auto;
    }
</style>


