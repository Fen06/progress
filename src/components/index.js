import myprogress from './progress/index.vue';

export default {
  install(Vue) {
    Vue.component('my-progress', myprogress);
  },
};
