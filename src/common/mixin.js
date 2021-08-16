export const itemListerMinxin = {
  data () {
    return {
      // 定时器
      myTime: null,
      // 总线执行的方法
      itemImageLoad: null
    }
  },

  mounted () {
    this.itemImageLoad = () => {
      if(this.myTime) clearTimeout(this.myTime)
      this.myTime = setTimeout(() =>{
        this.$refs.scroll.scroll.refresh()
        console.log("混入")
      },200)
    }

    this.$bus.$on("itemImageLoad", this.itemImageLoad)
  }
}
