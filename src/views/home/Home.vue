<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h4>购物街</h4>
      </template>
    </nav-bar>
    <tab-control ref="TabControl" class="TabControl1" v-show="isFixed">
        <tab-control-item @tabClick="tabClick" ref="TabControlItem1"></tab-control-item>
    </tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpload="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>

      <feature-view></feature-view>
      <!-- <tab-control :titles="titles"></tab-control> -->
      <tab-control ref="TabControl" class="TabControl2">
        <tab-control-item @tabClick="tabClick" ref="TabControlItem2"></tab-control-item>
      </tab-control>

      <goods-list>
        <goods-list-item
          v-for="good in goods[currentTitle].list"
          :good="good"
          @itemImageLoad="ImageLoad"
        ></goods-list-item>
      </goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from "common/utils"
import HomeSwiper from "views/home/childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import FeatureView from "./childrenComps/FeatureView";
import TabControl from "@/components/content/tabControl/TabControl";
import TabControlItem from "@/components/content/tabControl/TabControlItem";
import GoodsList from "@/components/content/goods/GoodsList";
import GoodsListItem from "@/components/content/goods/GoodsListItem";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    TabControlItem,
    GoodsList,
    GoodsListItem,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["pop", "new", "sell"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTitle: "pop",
      isShow: false,
      refresh:'',
      tabOffsetTop:0,
      isFixed:false,
      saveY:0
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.refresh = refresh
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
    
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    // 事件监听方法

    // 防抖函数
    

    tabClick(index) {
      this.currentTitle = this.titles[index];
      // console.log(this.currentTitle);
      this.$refs.TabControlItem1.currentIndex = index
      this.$refs.TabControlItem2.currentIndex = index
    },
    backClick() {
      // console.log(this.$refs.scroll)
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      // console.log(position);
      if (position["y"] < -1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      // console.log(position.y)
      if(position.y<-this.tabOffsetTop){
        this.isFixed = true
      }
      else{
        this.isFixed = false
      }
    },
    loadMore() {
      console.log("上拉加载更多");
      console.log(this.currentTitle);
      this.getHomeGoods(this.currentTitle);
      
    },
    ImageLoad() {
      this.refresh && this.refresh()
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          // console.dir(res);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page = page;
          this.$refs && this.$refs.scroll.finishPullUp();
        })
        .catch((err) => err);
    },
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.tab-control2 {
  /* position: sticky;
  top: 44px; */
  background-color: #fff;
  z-index: 9;
}
.content {
  /* height: 100vh; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.TabControl1{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>