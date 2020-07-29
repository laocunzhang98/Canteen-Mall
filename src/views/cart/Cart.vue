<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <h4>购物街({{cartLength}})</h4>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import {mapGetters} from 'vuex'
export default {
  name:"Cart",
  components:{
    NavBar
  },
  computed: {
    ...mapGetters([
      "cartLength"
    ])
  },
}
</script>
<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>