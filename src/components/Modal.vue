<template>
    <div class="grid-guest" v-if="openmodal">
        <div class="modal-wrap">
            <div class="content-modal">
                Ваш адрес:
                <input class="input is-medium" type="text" placeholder="Адрес">
            </div>
            <div class="actions-modal">
                <button class="button is-success" v-on:click="$emit('setorder')">Заказать</button>
                <button class="button" v-on:click="$emit('closemodal')">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ["openmodal"],
    events: ["closemodal", "setorder"]
}
</script>

<style lang="scss" scoped>
    .grid-guest {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: rgba(10, 10, 10, 0.86);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-wrap {
        width: 400px;
        height: 400px;
        background-color: #fff;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .content-modal {
        flex: 1;
    }
</style>

