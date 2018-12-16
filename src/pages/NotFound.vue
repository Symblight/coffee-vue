<template>
    <p class="cont">
        <img v-bind:src="notfoundsrc" alt="not found" />
    </p>
</template>

<script>
import NotFound from '../assets/simpli.png'

export default {
    name: 'NotFound',
    data() {
        return {
            notfoundsrc: NotFound
        }
    }
}
</script>

<style lang="scss" scoped>
    .cont {
        text-align: center;
        width: 100%;
    }
</style>
