<template>
  <div class="goods">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodsList"
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center;
  justify-content: space-around; */
  justify-content: space-evenly;
}
</style>