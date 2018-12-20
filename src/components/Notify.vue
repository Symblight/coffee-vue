<template>
    <div class="notify">
        <div v-if="messages.text" class="notification is-primary">
            <button class="delete" v-on:click="$emit('ondeletenotify')"></button>
            {{messages.text}}
        </div>
        <div v-if="messages.error" class="notification is-danger">
            <button class="delete" v-on:click="$emit('ondeletenotify')"></button>
            {{messages.error}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notify',
    props: ['messages'],
    events: ['ondeletenotify']
}
</script>

<style lang="scss" scoped>
    .notify {
        position: fixed;
        display: flex;
        flex-direction: column;
        bottom: 10;
        left: 10;
    }
</style>


