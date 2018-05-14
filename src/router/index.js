import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods.vue'; // 引入组件
import rating from 'components/rating/rating.vue';
import seller from 'components/seller/seller.vue';

Vue.use(VueRouter);
const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/rating', component: rating},
  {path: '/seller', component: seller}
];
export default new VueRouter({
  routes,
  linkActiveClass: 'active'
});
