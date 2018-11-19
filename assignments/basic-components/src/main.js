import Vue from 'vue'
import App from './App.vue'
import Header from './shared/Header.vue';

Vue.component('vc-header', Header)

new Vue({
  el: '#app',
  render: h => h(App)
})
