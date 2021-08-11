<template>
  <div class="home">
    <!-- 头部导航 -->
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>

    <Scroll class="content" :probeType="3" ref="scroll" @positionTop="handlPosition">
      <!-- 轮播图 -->
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link"><img :src="item.image"/></a>
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
        @handItem="changeItemList">
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

import {
  Swipe,
  SwipeItem
} from "vant"

const TabControl = () => import("components/content/tabControl/TabControl.vue")
const goodList = () => import("components/content/goodsList/GoodList.vue")
const backTop = () => import("components/content/backTop/BackTop.vue")

const NavBar = () => import("components/common/navbar/Navbar.vue")
const Scroll = () => import("components/common/scroll/Scroll.vue")

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

    },

    // 返回最顶部
    scrollBackTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

    // 控制是否显示回到最顶部
    handlPosition(position){
      this.isShow = -(position.y) > 600
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
    }
  },
  created () {
    this.getMultidata()

    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
    console.log(this.goods["pop"])
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding-top: 44px;
    height: 100%;
    .content{
       height: calc(100% - 44px);
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

    .tabc{
      position: sticky;
      top: 44px;
      background: #fff;
    }
  }
</style>
