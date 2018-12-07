import Vue from 'vue';
import App from './App.vue';
import './index.scss';

export default new Vue({
  el: '#root',
  render: (h) => h(App),
});

document.querySelector('div').className += ' white';
