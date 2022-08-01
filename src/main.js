import Vue from 'vue';
import App from './App.vue';
import MyPr from './components/index';

Vue.config.productionTip = false;
Vue.use(MyPr);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
