<template>
  <swiper>
    <swiper-item v-for="(item,key) in banners">
      <a :href="item.link">
        <img @load="imageLoad" :src="item.image"/>
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad :true
    }
  },
  props:{
    banners:{
      type:Array,
      
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad(){
      if(this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = false
      } 
    }
  },
};
</script>

<style>
</style>