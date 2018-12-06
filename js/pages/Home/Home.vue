<template>
    <div>
        <span>{{say}}</span>
        <span>{{count}}</span>
        <button class="button is-primary" v-on:click="click">Primary</button>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                say: 'Hello coffee!',
                count: 0
            }
        },
        methods: {
            click() {
                this.count ++;
            }
        }
    };
</script>