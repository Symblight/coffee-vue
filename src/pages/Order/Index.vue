<template>
    <div class="container" v-on:keyup.enter="onOrder">> 
        <h1>Заказ:</h1>
        <div class="menu">
            <ProductOrder 
                v-for="product in order.products" 
                :key="product.id" 
                :data="product" 

                @onRemove="$emit('removeproduct', product)"
                @onClear="$emit('clearproduct', product.id)"
                @onAdd="$emit('addproduct', product)"
            >
            </ProductOrder>
        </div>

        <div>Количество товаров: {{order.count}} шт</div>
        <div>Сумма: {{order.total.toFixed(2)}} рублей</div>

        <button class="button is-success" v-on:click="onOrder">Заказать</button>
        <button class="button" v-on:click="onClear">Очистить заказ</button>
        <button v-if="accumulationTotal" class="button is-info" v-on:click="onOrderSale">Заказать с накопительной суммы</button>
    </div>
</template>

<script>
import ProductOrder from '../../components/ProductOrder'

import { getUser } from "../../core/api"
import { getUser as getFromLocalUser } from "../../utils/local"

export default {
    name: 'Order',
    props: ["order", "messages"],
    event: ['clearorder', 'setorder', 'removeproduct', 'addproduct', 'clearproduct', 'setordersale'],
    data() {
        return {
            accumulationTotal: 0,
        }
    },
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
        onOrderSale() {
            if (this.accumulationTotal >= this.order.total) {
                this.$emit('setordersale')
            } else {
                const messages = {
                    value: '',
                    error : 'Недостаточно суммы'
                }
                this.$emit('setnotify', messages)
            }
        },
    },
    mounted() {
        const user = getFromLocalUser();
        if(user) {
            getUser(user.id)
                .then((user) => {
                    this.accumulationTotal = user.data.accumulationTotal
                })
                .catch(err => {
                    const messages = {
                        value: '',
                        error : err.text.error
                    }
                    this.$emit('setnotify', messages)
                })
        }
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

