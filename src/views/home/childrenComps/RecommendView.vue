<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name:"RecommendView",
  props:{
    recommends:{
      type:Array
    }
  }
}
</script>


<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
   flex: 1;
   
  }
  .recommend-item img{
    height: 65px;
    width: 65px;
  }
</style>