<template>
  <div class="bottomBar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="star-o" text="收藏"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCar"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant"

export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  methods: {
    addCar(){
      this.$emit("addCar")
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottomBar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: forestgreen;
    height: 49px;
    z-index: 10;
  }
</style>
