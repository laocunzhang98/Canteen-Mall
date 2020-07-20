<template>
  <swiper>
    <swiper-item v-for="(item,key) in banners">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
</style>