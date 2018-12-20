<template>
    <div class="wrap">
        <h1>Напитки:</h1>
        <CoffeeSpinner v-if="loading"></CoffeeSpinner>
        <div class="menu" v-if="!loading">
            <Product v-for="drink in drinks" :key="drink.id" v-bind:data="drink" @setproduct="setProduct(drink)"></Product>
        </div>
    </div>
</template>

<script>
import Product from '../../components/Product'
import CoffeeSpinner from '../../components/CoffeeSpinner'

import { getDrinks } from "../../core/api";

export default {
    name: 'Drinks',
    event: ['setproduct'],
    data() {
        return {
            drinks: [],
            loading: true
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
                    this.loading = false
                    this.drinks = drinks.data
                })
                .catch(err => {
                    console.log(err)
                })
        })
    },
    components: {
        Product, CoffeeSpinner
    }
}
</script>

<style lang="scss" scoped>
    .wrap {
        width: 100%;
    }
    .menu {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
    }
</style>


