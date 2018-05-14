<template>
  <div id="app">
    <Vheader :seller="seller"></Vheader>
    <div class="tab">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/rating">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from 'components/header/header.vue';
import {urlParse} from 'common/js/util.js';
const ERR_OK = 0;
let data = require('../data.json');
export default{
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      },
      goods: {},
      ratings: {}
    };
  },
  created() {
    // let _this = this;
    // this.$http.get('/api/seller?id='+this.seller.id).then(function(res) {
    //   if (res.data.errno === ERR_OK) {
    //     _this.seller = res.data.data;
    //     console.log(_this.seller.avatar);
    //     _this.seller = Object.assign({}, _this.seller, res.data.data);
    //   };
    // });
    // this.$http.get('/api/seller?id=' + this.seller.id).then((res) => {
    //   if (res.data.errno === ERR_OK) {
    //     // this.seller = res.data.data;
    //     // 用于对象的合并 , Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
    //     this.seller = Object.assign({}, this.seller, res.data.data);
    //   }
    // });
    this.seller = Object.assign({}, this.seller, data.seller);
    this.goods = data.goods;
    this.ratings = data.ratings;
  },
  components: {
    Vheader: header
  }
};
</script>
<style scoped>
  .tab{
    display: flex;
    width:100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    border: none;
  }
  .tab:after{
    content:'';
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    border-bottom:1px solid rgba(7,17,27,0.1);
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item a{
    display: block;
    text-decoration: none;
    font-size: 14px;
    color:rgb(77,85,93)
  }
  .tab-item .active {
    color: rgb(240,20,20)
  }
</style>



