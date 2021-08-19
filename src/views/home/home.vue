<template>
  <div class="home">
    <!-- 头部导航 -->
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>
    <tabControl
        :title="['流行','新款','精选']"
        class="tabc"
        @handItem="changeItemList"
        ref="tabControl1"
        v-show="isFiedx">
      </tabControl>

    <Scroll
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      ref="scroll"
      @positionTop="handlPosition"
      @pullingUp= "UpdataPullingUp">
      <!-- 轮播图 -->
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link"><img v-lazy="item.image" @load="swipeImage"/></a>
        </van-swipe-item>
      </van-swipe>

      <!-- 推荐 -->
      <recommens :recommend="recommend"></recommens>
      <!-- 热门 -->
      <feature></feature>

      <!-- 导航 -->
      <tabControl
        :title="['流行','新款','精选']"
        class="tabc"
        @handItem="changeItemList"
        ref="tabControl2"
        v-show="!isFiedx">
      </tabControl>

      <!-- 列表 -->
      <goodList :list="goods[currentType].list"></goodList>
    </Scroll>


    <!-- 回到最顶部 -->
    <back-top @click.native="scrollBackTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import {getHomeMultidata, getHomeGoods} from "utils/home.js"

import {itemListerMinxin} from "common/mixin.js"

import {
  Swipe,
  SwipeItem
} from "vant"

import TabControl from "components/content/tabControl/TabControl.vue"
const goodList = () => import("components/content/goodsList/GoodList.vue")
const backTop = () => import("components/content/backTop/BackTop.vue")

const NavBar = () => import("components/common/navbar/Navbar.vue")
import Scroll from "components/common/scroll/Scroll.vue"

const recommens = () => import('./childcomponents/recommensView.vue')
const feature = () => import('./childcomponents/featureView.vue')


export default {
  components: {
    NavBar,
    Scroll,
    goodList,
    backTop,
    recommens,
    feature,
    TabControl,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  mixins: [itemListerMinxin],
  methods: {
    // 获取首页轮播图数据
    getMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    // 获取首页列表数据
    getGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page++

        this.$refs.scroll.scroll.finishPullUp()

      })
    },
    // 改变列表数据
    changeItemList(index){
      switch (index){
        case 0 :
          this.currentType = "pop"
          break;
        case 1 :
          this.currentType = "new"
          break;
        case 2 :
          this.currentType = "sell"
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    // 返回最顶部
    scrollBackTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

    // 控制是否显示回到最顶部
    handlPosition(position){
      // 控制回到最顶部的显示与隐藏
      this.isShow = -(position.y) > 600

      // 控制导航栏的显示与隐藏
      this.isFiedx = (-position.y) > this.navOffsetTop

    },

    // 下拉刷新更新数据
    UpdataPullingUp(){
      this.getGoods(this.currentType)
    },

    // 事件防抖
    // debounce(func,delay){
    //   let myTime = null
    //   return function(...args) {
    //     if(myTime !== null) clearTimeout(myTime)
    //       myTime = setTimeout( ()=>{
    //         console.log('----')
    //         func.apply(this,args)
    //     }, delay)
    //   }
    // }

    // 轮播图图片加载
    swipeImage(){
      if(!this.loadSwiper){
        this.navOffsetTop = this.$refs.tabControl2.$el.offsetTop-this.$refs.tabControl2.$el.offsetHeight
        this.loadSwiper = true
      }
    }
  },
  data(){
    return{
      // 轮播图数据
      banner: [],
      recommend: [],
      goods: {
        "pop": {
          page: 0,
          list: []
        },
        "new": {
          page: 0,
          list: []
        },
        "sell": {
          page: 0,
          list: []
        },
      },
      currentType: 'pop',
      // 显示回到最顶部
      isShow: false,
      // 导航吸顶
      isFiedx: false,
      // 轮播图图片是否加载
      loadSwiper: false,
      // 导航 offsetTop
      navOffsetTop: 0,
      // 事件监听总线的方法
      // itemImageLoad: null,
      // // 定时器
      // mytime: null
    }
  },
  created () {
    this.getMultidata()

    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
  },
  deactivated () {
    // 没有选中时取消监听事件总线
    this.$bus.$off("itemImageLoad", this.itemImageLoad)

  },
  mounted () {

    // let refresh = this.debounce(this.$refs.scroll.scroll.refresh,100)

    // 图片加载完成事件监听
    // this.itemImageLoad = () =>{
    //   // 执行防抖事件
    //   if(this.mytime) clearTimeout(this.mytime)
    //   this.mytime = setTimeout(() =>{
    //     this.$refs.scroll.scroll.refresh()
    //     console.log(1)
    //   },200)

    //     // refresh()
    // }
    // this.$bus.$on("itemImageLoad", this.itemImageLoad)

    // 获取tabControl距离顶部距离
    // 所有组件都有一个属性 $el, 用于获取组件中的元素
  },
}
</script>

<style lang="scss" scoped>
  .home{
    // padding-top: 44px;
    height: 100%;
    .content{
       height: calc(100% - 44px);
       overflow: hidden;
       padding-bottom: 44px;
    }
    .my-swipe .van-swipe-item {
      height: 185px;
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
      a{
        img{
          width: 100%;
        }
      }

    }

    // .tabc{
    //   position: sticky;
    //   top: 44px;
    //   background: #fff;
    // }
  }
</style>
