<template>
  <div class="submitBar">
    <van-submit-bar :price="AllPrice*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="AllChecked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import {mapState} from "vuex"
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

    },
    // 全选
    AllChecked(){
      this.CartList.forEach(item => {
        item.itemChecked = this.checked
      })
    },

    // 判断购物车是否含有数据
  },
  computed: {
    ...mapState("cart",["CartList"]),
    // 计算总价格
    AllPrice(){
      let x = this.CartList.filter(item => {
        return item.itemChecked
      })
      let sum = 0
      for(let i = 0; i < x.length; i++){
        sum += x[i].price*1 * x[i].count*1
      }
      return sum
    },
    // checked(){
    //   let x = this.CartList.filter(item => {
    //     return item.itemChecked
    //   })
    //   if(x.length === this.CartList.length){
    //     return true
    //   }else{
    //     return false
    //   }
    // }
  },
  mounted () {

    this.$bus.$on("changChecked",(item) => {
      this.checked = item
    })
  }

  }
</script>

<style lang="scss" scoped>
  .submitBar{

  }
</style>
