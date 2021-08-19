<template>
  <div class="submitBar">
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import {
  Checkbox,
  SubmitBar
} from "vant"
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    // 修改地址
    onClickEditAddress(){

    },
    // 提交订单
    onSubmit(){

    }
  }
}
</script>

<style lang="scss" scoped>
  .submitBar{

  }
</style>
