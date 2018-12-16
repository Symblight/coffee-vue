<template>
    <div class="menu container">
        <div class="header">
            <h1>Меню</h1>
            <h2>Вкусные напитки и великолепная еда. Секрет того, как сделать жизнь лучше.</h2>
            <img src="http://www.starbucks.ru/media/meny_tcm84-11058_w1024_n.jpg"/>
            <p>Идеальная чашка кофе и вкусная сытная закуска к ней могут поднять вам настроение на целый день. Поэтому мы стремимся к тому, чтобы все, что вы выбираете, было самого лучшего качества.</p>
        </div>
        <div class="products">
            <router-link to="/drinks" class="item">
                <h2>Напитки</h2>
                <img src="https://globalassets.starbucks.com/assets/10f88951d9ce4fd4b6eec3f0be5516d2.jpg" />
                <p class="paragraph">
                    Мы отбираем только самые лучшие зерна для Вашего напитка. 
                    Вот почему наши профессионалы тщательно работают с каждой партией кофе, добиваясь того, 
                    чтобы каждое зернышко достигло пика своей насыщенности. Бариста всегда готовы приготовить напиток по вашему желанию и мы хотим, 
                    чтобы вы насладились идеальной чашкой кофе,
                    сделанной специально для вас. Наш кофе заслуживает того, чтобы вы полюбили его так же страстно, как и мы!
                </p>
            </router-link>
            <router-link to="/foods" class="item">
                <h2>Еда</h2>
                <img src="https://globalassets.starbucks.com/assets/5c7c2bd2cdf240819e21a7596a37348f.jpg" />
                <p class="paragraph">
                    Вы сказали нам, что для вас важна – натуральная, сытная и вкусная еда.
                    Поэтому мы изъяли искусственные ароматизаторы, искусственные красители и кукурузный сироп с высоким содержанием фруктозы из всего ассортимента нашей еды. 
                    Все, что вы едите у нас,
                    — это вкусная, добросовестно приготовленная еда из натуральных ингредиентов.
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: 'App',
    data() {
        return {
            say: 'Hello coffee!',
            count: 0
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        click() {
            this.count ++;
        }
    }
};
</script>


<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.products {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.item {
    display: block;
    width: 400px;
    text-align: left;
    margin-right: 30px;
    cursor: pointer;
}
.paragraph {
    line-height: 17px;
}
</style>
