<template>
  <div class="detail">
    <!-- 头部导航 -->
    <detailNavbar class="navbar"></detailNavbar>

    <!-- 轮播图 -->
    <Scroll ref="scroll" class="scroll">
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
      <detail :itemParams= "itemParams"></detail>
      <!-- 用户评价 -->
      <detailCommon :commonInfo="commonInfo"></detailCommon>
      <!-- 推荐 -->
      <list :list="recommend"></list>
    </Scroll>

  </div>
</template>

<script>
import {getDetail, Goods, Shop, GoodsParams, getRecommend} from "utils/detail.js"

import {itemListerMinxin} from "common/mixin.js"

const detailNavbar = () => import("./detailChild/detailNavbar.vue")
const detailInfo = () => import("./detailChild/detailInfo.vue")
const detailShop = () => import("./detailChild/detailShop.vue")
const detaildescription = () => import('./detailChild/detailDescription.vue')
const detail = () => import("./detailChild/detail.vue")
const detailCommon = () => import("./detailChild/detailCommon.vue")

const list = () => import("components/content/goodsList/GoodList.vue")

import Scroll from "components/common/scroll/Scroll.vue"
import {
  Swipe,
  SwipeItem
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
    //  myTime: null
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
    }
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
    Scroll
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
      height: calc(100% - 44px);
      position: relative;
      left: 0;
      top: 0;
      z-index: 10;
      background: #fff;
      overflow: hidden;
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
