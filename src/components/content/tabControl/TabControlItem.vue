<template>
  <div>
    <div v-for="(item,index) in titles" class="tab-control-item" @click="itemClick(index)">
      <span :class="{active:index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabControlItem",
  data() {
    return {
      titles: ["流行", "新款", "精选"],
      currentIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style>
  .active{
    color: var(--color-high-text);
    padding: 0 3px 2px;
    border-bottom: solid 2px var(--color-high-text);
  }
</style>