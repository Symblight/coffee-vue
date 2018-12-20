<template>
    <div class="item">
        <img v-bind:src="data.url" width="50" height="50" />
        <div class="info">
            <div>
                <strong>{{data.name}}</strong>
                <span>Стоимость: {{data.price}}р</span>
            </div>
            <p>Количество: {{data.count}}</p>
        </div>
        <div class="action">
            <i class="material-icons"  v-on:click="$emit('onadd', data)">
                add
            </i>
            <i class="material-icons"  v-on:click="$emit('onremove', data.id)">
                remove
            </i>
            <i class="material-icons" v-on:click="$emit('onclear', data.id)">delete</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductOrder',
    props: ['data'],
    events: ['onadd', 'onclear', 'onremove']
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        width: 100%;
        padding:  10px;
    }

    .item:hover{
        background-color: #f5f5f5;
        transition: all 0.2s ease-out;
    }

    .item>img {
        margin-right: 25px;
    }

    .info {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
        margin-right: 25px;
    }

    .action>i {
        cursor: pointer;
    }

    .action {
        display: flex;
    }
    .image {
        flex-basis: 200px;
    }

@media screen and (max-width: 640px) {
    .info { 
        display: flex;
        flex-direction: column;
    }
}
</style>


