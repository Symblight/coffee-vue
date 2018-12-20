<template>
    <div class="wrap">
        <h1>Еда:</h1>
        <CoffeeSpinner v-if="loading"></CoffeeSpinner>
        <div class="menu" v-if="!loading">
            <Product v-for="food in foods" :key="food.id" v-bind:data="food" @setproduct="setProduct(food)"></Product>
        </div>
    </div>
</template>

<script>
import Product from '../../components/Product'
import CoffeeSpinner from '../../components/CoffeeSpinner'

import { getFoods } from "../../core/api";

export default {
    name: 'Foods',
    event: ['setproduct'],
    data() {
        return {
            foods: [],
            loading: true
        }
    },
    methods: {
        setProduct(food) {
            this.$emit('setproduct', food)
        }
    },
    components: {
        Product, CoffeeSpinner
    },
    mounted: function () {
        this.$nextTick(function () {
            getFoods()
                .then((foods) => {
                    this.loading = false
                    this.foods = foods.data
                })
                .catch(err => {
                    console.log(err)
                })
        })
    },
}
</script>

<style lang="scss" scoped>
    .wrap {
        width: 100%;
    }
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
