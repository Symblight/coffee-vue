<template>
    <div class="menu container">
        <div class="header-coffee ">
            <span class="label-hero">Think coffee</span>
            <div class="inline-video">
                <img v-bind:src="require('../../assets/background.jpeg')" class="hero-img"/>
            </div>
        </div>
        <div class="header">
            <h1>Меню</h1>
            <h2>Вкусные напитки и великолепная еда. Секрет того, как сделать жизнь лучше.</h2>
            <div>
                <img src="http://www.starbucks.ru/media/meny_tcm84-11058_w1024_n.jpg"/>
            </div>
            <span class="header-paragraph">Идеальная чашка кофе и вкусная сытная закуска к ней могут поднять вам настроение на целый день. Поэтому мы стремимся к тому, чтобы все, что вы выбираете, было самого лучшего качества.</span>
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
import HeroImage from '../../assets/background.jpeg'

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

.header-coffee {
    position: relative;
    overflow: hidden;
    height: 220px;
    background-color: #00d1b2;
    display: flex;
    color: #fff;
    font-size: 27px;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
}

.products {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
}

.label-hero {
    position: absolute;
    left: 10px;
    top: 10px;
}

.item {
    display: block;
    max-width: 400px;
    text-align: left;
    margin-right: 30px;
    cursor: pointer;
    padding: 10px;
    color: #000; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.inline-video {
    width: 100%;
}

.hero-img {
    width: 100%;
}

.item:hover {
  //  background-color: #ffeaa7;
}
    
.paragraph {
    line-height: 17px;
    margin-top: 20px;
}

.header-paragraph {
    margin-top: 20px;
    font-size: 22px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 22px;
}

.header>h2 {
    background-color: #bb9675;
    color: white;
    padding: 8px;
    font-weight: 700;
    width: 100%;
    text-align: center;
}

@media screen and (max-width: 740px) {
    .products { 
        display: flex;
        flex-direction: column;
    }

    .header>h1 {
        font-size: 18px;
    }

    .header>h2 {
        font-size: 16px;
    }
    .header-paragraph {
        font-size: 16px;
    }
    .item {
        width: 100%;
        max-width: 100%;
        margin-bottom: 12px;
    }
}
</style>
