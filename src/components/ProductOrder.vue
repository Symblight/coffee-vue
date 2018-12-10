<template>
    <div class="item">
        <img v-bind:src="data.url" width="50" height="50" />
        <div class="content">
            <div>
                <strong>{{data.name}}</strong>
                <span>Стоимость: {{data.price}}р</span>
            </div>
            <p>Количество: 0</p>
        </div>
        <div class="action">
            <i v-on:click="handleDelete(data.id)">x</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductOrder',
    props: ['data'],
    methods: {
        handleDelete(id) {
            console.log(id);
        },
    }
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

    .content {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
        margin-right: 25px;
    }

    .action>i {
        cursor: pointer;
    }

    .image {
        flex-basis: 200px;
    }
</style>


