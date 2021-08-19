<template>
  <div class="shopcart">
    <!-- 导航 -->
    <navbar>
      <div slot="center">购物车(<i v-text="CartList.length"></i>)</div>
    </navbar>

    <!-- 购物车信息 -->
    <scroll class="scroll" ref="scroll">
      <cart></cart>
    </scroll>
    <!-- 提交订单 -->
     <submitBar class="submitBar"></submitBar>
  </div>
</template>

<script>

import {mapState} from "vuex"

const navbar = () => import("components/common/navbar/Navbar.vue")
const cart = () => import("./shopcartChild/cart.vue")
const submitBar = () => import("./shopcartChild/submitBar.vue")

import scroll from "components/common/scroll/Scroll.vue"
export default {
  components: {
    navbar,
    scroll,
    cart,
    submitBar,
  },
  computed: {
    ...mapState("cart",['CartList'])
  },
  activated () {
    this.$refs.scroll.scroll.refresh()
  }
}

</script>

<style lang="scss" scoped>
  .shopcart{
    height: 100%;
    .scroll{
      height: calc(100% - 44px - 44px - 84px);
      overflow: hidden;
    }
     ::v-deep .submitBar{
        .van-submit-bar{
          bottom: 44px
        }
      }
  }
</style>
