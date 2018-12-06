import Vue from 'vue';
import router from './src/core/router';

import App from './src/core/App.vue';

new Vue({
    el: '#app',

    router,

    render: h => h(App)
});