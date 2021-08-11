<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="test">按钮</button>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
      <li>数据列表￥</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll"


export default {
  data () {
    return {
      bscroll: null
    }
  },
  mounted () {
    this.bscroll = new BScroll(".wrapper",{
      // probetype 是指是否滚动监听
      // 值为 0 或 1 时, 表示不监听事件
      // 值为 2 时 , 表示当手指在屏幕上时，监听滚动位置
      // 值为 3 时 , 表示通过惯性的滑动也会进行监听
      probeType: 1,
      //下拉刷新
      pullUpLoad: true
    })

    this.bscroll.on('scroll', position => {
      console.log(position)
    })
    console.log(this.bscroll)
    // 下拉刷新
    this.bscroll.on("pullingUp", () => {
      console.log('下拉刷新')
      // 完成本次下拉刷新
      this.bscroll.finishPullUp()
    })
  },
  methods: {
    test(){
      console.log("单击按钮")
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    height: 500px;
    background: sandybrown;
    .content{

    }
  }
</style>
