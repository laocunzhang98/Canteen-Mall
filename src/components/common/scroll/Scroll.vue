<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data() {
    return {
      scroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpload:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    let wrapper = document.querySelector('.wrapper')
    this.scroll = new BScroll(wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpload
    })
    // this.scroll.scrollTo(0,0)
    this.scroll.on('scroll',position=>{
      // console.log(position)
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp',()=>{
      // console.log('xxxxx')
      this.$emit('pullingUp')
    })
    
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  },
}
</script>

<style scope>

</style>
