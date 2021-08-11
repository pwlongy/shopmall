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
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        observeDOM: true,
        probeType: this.probeType
      })

      this.scroll.on("scroll", position =>{
        this.$emit("positionTop", position)
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
