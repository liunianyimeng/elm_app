// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './router/index.js';
import 'common/stylus/index.styl';
/* 设置为 false 以阻止 vue 在启动时生成生产提示 */
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 挂在到vue上
  components: { App },
  template: '<App/>'
});

