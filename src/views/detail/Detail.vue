<template>
  <div class="detail">
    <!-- 头部导航 -->
    <detailNavbar class="navbar" @spanClick="spanClick" ref="navbar"></detailNavbar>

    <!-- 轮播图 -->
    <Scroll ref="scroll" class="scroll" :probeType="3" @positionTop="positionTop">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white">
        <van-swipe-item v-for="(item, index) in TopImage" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>

      <!-- 商品基本信息 -->
      <detailInfo :goods="goods"></detailInfo>

      <!-- 店铺信息 -->
      <detailShop :shopInfo="Shop"></detailShop>
      <!-- 商品描述 -->
      <detaildescription :detailInfo="detailInfo" @loadImg="LoadImg"></detaildescription>
      <!-- 商品详情 -->
      <detail :itemParams= "itemParams" ref="params"></detail>
      <!-- 用户评价 -->
      <detailCommon :commonInfo="commonInfo" ref="common"></detailCommon>
      <!-- 推荐 -->
      <list :list="recommend" ref="recom"></list>
    </Scroll>
    <!-- 返回顶部 -->
    <BackTop class="backTop" v-if="showBackTop" @click.native="backTop"></BackTop>
    <!-- 添加购物车 -->
    <detailBottomBar @addCar="addCar"></detailBottomBar>
  </div>
</template>

<script>
import {getDetail, Goods, Shop, GoodsParams, getRecommend} from "utils/detail.js"

import {itemListerMinxin} from "common/mixin.js"

import detailNavbar from "./detailChild/detailNavbar.vue"
const detailInfo = () => import("./detailChild/detailInfo.vue")
const detailShop = () => import("./detailChild/detailShop.vue")
import detailBottomBar from "./detailChild/detailBottomBar.vue"
import detaildescription from './detailChild/detailDescription.vue'
import detail from "./detailChild/detail.vue"
import detailCommon from "./detailChild/detailCommon.vue"
import list from "components/content/goodsList/GoodList.vue"
import BackTop from "components/content/backTop/BackTop.vue"

import {mapActions} from "vuex"

import Scroll from "components/common/scroll/Scroll.vue"
import {
  Swipe,
  SwipeItem,
  Toast
} from "vant"
export default {
  name: "Detail",
  mixins: [itemListerMinxin],
  data () {
    return {
      iid: null,
      TopImage: [],
      goods: {},
      // 店铺信息
      Shop: {},
      // 商品描述
      detailInfo: {},
      // 商品参数
     itemParams: {},
     // 评论信息
     commonInfo: {
       user:{}
     },
     // 推荐数据
     recommend: [],
     // 事件监听总线的方法
    //  itemImageLoad: null,
    //  // 定时器
    //  myTime: null,

    // 绑定top值
    themeTopYs: [],
    // this.$refs.navbar.currentIndex = 0
    // navbar 选中的数值
    currentIndex: 0,
    showBackTop: false
    }
  },
  mounted () {
    this.iid = this.$route.params.id
    // 获取详情数据
    getDetail(this.iid).then(res => {
      let result = res.data.result
      // 轮播图图片
      this.TopImage = result.itemInfo.topImages
      console.log(result)
      // 商品信息
      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
      // 店铺信息
      this.Shop = new Shop(result.shopInfo)
      // 商品描述
      this.detailInfo = result.detailInfo
      // 商品详情
      this.itemParams = new GoodsParams(result.itemParams.info, result.itemParams.rule)
      // 评论信息
      if(result.rate.cRate !==0){
        this.commonInfo = result.rate.list[0]
      }
    })

    // 获取推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.data.list
    })

    // 获取高度

    // 数据未完全加载完成
    // this.themeTopYs = []
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.common.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recom.$el.offsetTop)
    // console.log(this.themeTopYs)

    // 这个方法是等数据完全加载完成在执行回调函数
    // this.$nextTick(() =>{
    //   this.themeTopYs = []
    //   this.themeTopYs.push(0)
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.common.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.recom.$el.offsetTop)
    //   console.log(this.themeTopYs)
    // })

    // 推荐图片刷新轮播图
    // this.itemImageLoad = () => {
    //   if(this.myTime) clearTimeout(this.myTime)
    //   this.myTime = setTimeout(() =>{
    //     this.$refs.scroll.scroll.refresh()
    //   },200)

    // }
    // this.$bus.$on("itemImageLoad", this.itemImageLoad)

  },
  // 销毁时取消事件监听总线
  destroyed () {
    this.$bus.$off('itemImageLoad',this.itemImageLoad)
  },
  methods: {
    // 等待图片刷新
    LoadImg() {
      this.$refs.scroll.scroll.refresh()

      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.common.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recom.$el.offsetTop)
      console.log(this.themeTopYs)
    },

    // 标题点击跳转
    spanClick(index){
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },

    // 获取滚动高度事件
    positionTop(position){
      let y = -position.y
      // console.log(y)
      // if(y < this.themeTopYs[1]){
      //   this.$refs.navbar.currentIndex = 0
      //   console.log(1)
      // }else if(y < this.themeTopYs[2]){
      //   this.$refs.navbar.currentIndex = 1
      //   console.log(2)
      // }else if(y < this.themeTopYs[3]){
      //   this.$refs.navbar.currentIndex = 2
      //   console.log(3)
      // }else if(y > this.themeTopYs[3]){
      //   this.$refs.navbar.currentIndex = 3
      //   console.log(4)
      // // }
      // console.log(position)
      const length = this.themeTopYs.length
      // console.log(length)
      for(let i = 0 ; i < length; i++){
        if(this.currentIndex !== i && ((i < length-1 && y >= this.themeTopYs[i] && y < this.themeTopYs[i+1]) || (i === length - 1 && y > this.themeTopYs[i]))){
          this.currentIndex = i
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }


      // 返回最顶部
        this.showBackTop = y > 1000



    },
    // 返回最顶部
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    // 添加购物车
    addCar(){
      let product = {}
      product.image = this.TopImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 将数据添加到 vuex 中
      console.log(this.$store)
      this.addCart(product)
      Toast("添加购物车成功")
    },
    // 将 vuex 中的方法调用
    ...mapActions("cart",['addCart'])
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    detailNavbar,
    detailInfo,
    detailShop,
    detaildescription,
    detail,
    detailCommon,
    list,
    Scroll,
    detailBottomBar,
    BackTop
  }
}
</script>

<style lang="scss" scoped>
  .detail{
    height: 100%;
    .navbar{
      background: #fff;
    }
    .scroll{
      height: calc(100% - 44px - 49px);
      position: relative;
      left: 0;
      top: 0;
      z-index: 10;
      background: #fff;
      overflow: hidden;
    }
    .backTop{
      z-index: 10;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
      }
      .my-swipe{
        height: 260px;
        img{
          width: 100%;
        }
      }
  }
</style>
