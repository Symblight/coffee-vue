<template>
    <div class="menu">
        <Product v-for="food in foods" :key="food.id" v-bind:data="food"></Product>
    </div>
</template>

<script>
import Product from '../../components/Product'

import { getFoods } from "../../core/api";
import { store } from '../../core/store'

export default {
    name: 'Foods',
    data() {
        return {
            foods: []
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
