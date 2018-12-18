<template>
    <div class="menu">
        <Product v-for="food in foods" :key="food.id" v-bind:data="food" @setproduct="setProduct(food)"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { getFoods } from "../../core/api";

export default {
    name: 'Foods',
    event: ['setproduct'],
    data() {
        return {
            foods: []
        }
    },
    methods: {
        setProduct(food) {
            this.$emit('setproduct', food)
        }
    },
    components: {
        Product
    },
    mounted: function () {
        this.$nextTick(function () {
            getFoods()
                .then((foods) => {
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
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
