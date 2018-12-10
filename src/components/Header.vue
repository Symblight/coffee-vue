<template>
    <nav class="navbar" id="header" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/home">
                <!-- <img src="http://www.starbucks.ru/media/logo_tcm84-366_w1024_n.png" width="112" height="28"> -->
                <strong>Coffee</strong>
            </router-link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/home" class="navbar-item">
                    Главная
                </router-link>

                <router-link to="/order" class="navbar-item">
                    Заказ
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/signup" class="button is-primary">
                            <strong>Регистрация</strong>
                        </router-link>
                        <router-link to="/login" class="button is-light">
                            Войти
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
#header {
    border-bottom: 1px solid #e5e5e5;
}
</style>
