<template>
    <div class="item">
        <div v-bind:class="[isActive ? 'scale-up-center': null]">
        <figure class="image is-228x228">
            <img v-bind:src="data.url"/>
        </figure>
        <div class="content">
            <strong>{{data.name}}</strong>
            <p v-if="data.volume">{{data.volume}}</p>
            <div class="info">
                <p>Стоимость:</p>
                <p>{{data.price}}р</p>
            </div>
            <button v-on:click="onProduct(data)" class="button is-primary">Взять</button>
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
.item {
    width: 300px;
    padding: 8px;
    margin: 25px;
}

.selected {
    border: 4px solid #2ecc71;
}

.content {
    margin: 2em;
}
.info {
    display: flex;
}

.scale-up-center {
-webkit-animation: wobble-ver-left 0.8s both;
	        animation: wobble-ver-left 0.8s both;
    border-radius: 6px;
    border: 4px solid #fdbb04;
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


