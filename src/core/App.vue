<template>
    <div id="container">
        <Header></Header>
        <section class="content container">
            <router-view></router-view>
            <router-link to="/order" class="order">Order</router-link>
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

.order { 
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 5%;
    right: 5%;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    background-color: #00d1b2;
    padding: 12px;
}
</style>