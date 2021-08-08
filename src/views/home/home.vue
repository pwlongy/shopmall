<template>
  <div class="home">
    <!-- 头部导航 -->
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>

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
    <!--  -->
    <feature></feature>

  </div>
</template>

<script>
import {getHomeMultidata} from "utils/home.js"

import {
  Swipe,
  SwipeItem
} from "vant"

const NavBar = () => import("components/common/navbar/Navbar.vue")
const recommens = () => import('./childcomponents/recommensView.vue')
const feature = () => import('./childcomponents/featureView.vue')
export default {
  components: {
    NavBar,
    recommens,
    feature,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {

  },
  data(){
    return{
      // 轮播图数据
      banner: [],
      recommend: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style lang="scss" scoped>
  .home{
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
  }
</style>
