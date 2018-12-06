<template>
    <div id="container">
        <Header></Header>
        <menu class="content">
            <router-view></router-view>
        </menu>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Home from '../pages/Home'

export default {
    name: 'App',
    components: {
        Header, Footer
    }
}
</script>


<style lang="scss" scoped>
.content {
    display: flex;
    flex-grow: 1;
}
#container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>