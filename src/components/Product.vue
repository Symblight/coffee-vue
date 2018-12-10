<template>
    <div class="item">
        <figure class="image is-228x228">
            <img v-bind:src="data.url"/>
        </figure>
        <div class="content">
            <strong>{{data.name}}</strong>
            <p v-if="data.volume">{{data.volume}}</p>
            <div class="info">
                <p>Стоимость:</p>
                <p>{{data.price}}р</p>
            </div>
            <button v-on:click="handleOrder(data)" class="button is-primary">Взять</button>
        </div>
    </div>
</template>

<script>
import { store } from '../core/store'

export default {
    props: ['data'],
    name: 'Product',
    methods: {
        handleOrder(value) {
            store.setProductToOrder(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    width: 300px;
}

.content {
    margin: 2em;
}
.info {
    display: flex;
}
</style>


