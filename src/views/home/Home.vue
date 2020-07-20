<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h4>购物街</h4>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
// import Swiper from '@/components/common/swiper/Swiper'
import HomeSwiper from 'views/home/childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  }
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
</style>