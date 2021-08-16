<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  import BScroll from "better-scroll"
  export default{
    data () {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        observeDOM: true,
        probeType: this.probeType,
        // 下拉刷新
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动事件
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on("scroll", position =>{
          this.$emit("positionTop", position)
        })
      }


      // 下拉刷新事件
      if(this.pullUpLoad){
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp")
        })
      }

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
</style>
