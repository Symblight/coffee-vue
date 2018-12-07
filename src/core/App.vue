<template>
    <div id="container">
        <Header></Header>
        <section class="content container">
            <router-view></router-view>
        </section>
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
    margin-top: 2rem;
}
#container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>