<template>
    <router-link to="/order" v-if="count" class="order bounce-top">
        <div class="content" v-if="orderUrl">
            <div class="ic" v-html="require(`../assets/icons/coffee_bag.svg`)"></div>
            Ваш заказ
            <div class="count" v-if="count" v-bind:class="[count > 2 ? 'slide-in-fwd-center': null]">
                {{count}}
            </div>
        </div>
    </router-link>
</template>

<script>
import Bag from '../assets/icons/coffee_bag.svg'

const REJECT_URL = [
        '/order',
        '/login',
        '/signup'
];

export default {
    name: 'OrderBlock',
    props: ['count'],
    data() {
        return {
            orderUrl: true,
            isActive: true
        }
    },
    methods: {
            checkUrl(path) {
                 this.orderUrl = REJECT_URL.indexOf(path) !== 0
            }
    },
    watch: {
        '$route' (to, from) {
                this.checkUrl(to.path)
        }
    },
    mounted() {
        this.checkUrl(this.$route.path)
    }
}
</script>

<style lang="scss" scoped>
.order { 
    width: 110px;
    position: fixed;
    bottom: 5%;
    right: 5%;
    color: #fff;
    font-size: 18px;
}

.content {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 8px;
    color: #000;
}

.count {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 50px;
    text-align: center;
    color: #fff;
}

@media screen and (max-width: 640px) {
    .order { 
        width: 60px;
        font-size: 14px;
    }

    .content {
        border-radius: 4px;
        padding: 2px;
        }
}

.slide-in-fwd-center {
	-webkit-animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.bounce-top {
	-webkit-animation: bounce-top 0.9s both;
	        animation: bounce-top 0.9s both;
}
@-webkit-keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}


</style>

