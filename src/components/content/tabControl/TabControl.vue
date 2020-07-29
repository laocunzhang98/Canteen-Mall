<template>
    <!-- <div v-for="(item,index) in titles">
      <span>{{item}}</span>
    </div> -->
    <div class="tab-control">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style >
 .tab-control>div{
   display: flex;
   text-align: center;
   font-size: 15px;
   
 }
 .tab-control-item{
   flex:1;
   height: 40px;
   line-height: 40px;
   text-align: center;
   
 }
</style>