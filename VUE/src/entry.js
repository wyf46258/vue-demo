import Vue from 'vue';

import App from './App.vue';

import router from './router.js'

new Vue({
    el: document.getElementById('root'),

    router,//相当于router:router

    render:createElement=>createElement(App)
});