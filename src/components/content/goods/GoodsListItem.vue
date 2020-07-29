<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imageload"/>
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">￥{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImage(){
      return this.good.image || this.good.show.img
    }
  },
  methods: {
    imageload(){
      // this.$bus.$emit('itemImageLoad')
      this.$emit("itemImageLoad")
    },
    itemClick(){
      console.log('跳转到详情页');
      // console.log(this.good)
      // this.$router.push('/detail/'+this.good.iid)
      this.$router.push({
        path:'/detail',
        query:{
          iid:this.good.iid
        }
      })
      // window.location.reload();
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  /* 根据宽带来显示你的一行里塞几个*/
  /* flex-wrap: wrap; */
  /* 设置一个宽度 */
  /* 为了适应各类屏幕设置百分比 */
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>