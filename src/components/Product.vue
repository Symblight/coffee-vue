<template>
    <div class="grid-item">
        <div class="section-item">
            <div class="picture">
                <img v-bind:src="data.url"/>
            </div>
            <div class="grid-content">
                <strong>{{data.name}}</strong>
                <p v-if="data.volume">{{data.volume}}</p>
                
                <div class="info">
                    <p>Стоимость:</p>
                    <p>{{data.price}}р</p>
                </div>

                <div>
                    <button v-if="!isActive" v-on:click="onProduct(data)" class="button is-primary">Взять</button>
                    <button v-if="isActive" v-on:click="onProduct(data)" class="button is-info">Еще?</button>
                    <span v-if="isActive" v-bind:class="[isActive ? 'scale-up-center': null]" class="tag is-link is-normal">В корзине</span>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    event: ['setProduct'],
    name: 'Product',
    data() {
        return{
        isActive: false,
        }
    },
    methods: {
        onProduct(data) {
            this.$emit('setproduct', data)
            this.isActive = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-item {
    transition: all 1s ease-in-out 500ms;
    align-items: stretch;
    overflow: hidden;
    display: flex;
    width: 300px;

    padding: 10px;
}
.grid-content {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.picture {
    flex: 1;
}

.info {
    display: flex;
}

.section-item {
    background-color: #f2eae3;
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 1024px) { 
    .grid-item {
       // width: 300
    }
}

@media screen and (min-width: 640px) {
    .grid-item { 
        // flex: 0 0 50%;
        // max-width: 50%;
    }
}

.scale-up-center {
-webkit-animation: wobble-ver-left 0.8s both;
	        animation: wobble-ver-left 0.8s both;
}

@-webkit-keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
            transform: translateY(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
            transform: translateY(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
            transform: translateY(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
            transform: translateY(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
            transform: translateY(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
            transform: translateY(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
            transform: translateY(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
            transform: translateY(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
            transform: translateY(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
            transform: translateY(-6px) rotate(-1.2deg);
  }
}
</style>


