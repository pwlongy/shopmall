<template>
  <div class="cart">
    <van-swipe-cell
      v-for="(item, index) in CartList"
      :key= "index"
      class="SwipeCell">
        <van-row
          justify="center"
          align= "center">
          <van-col span="3" class="col">
            <van-cell class="cell">
                <van-checkbox v-model="item.itemChecked" @click="changeItemChecked(item)"/>
            </van-cell>
          </van-col>
          <van-col span="21">
            <van-card
              :num="item.count"
              :price="item.price"
              :desc="item.desc"
              :title="item.title"
              :thumb="item.image"
            >
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #footer>
                <van-button size="mini"><van-icon name="minus" /></van-button>
                <van-button size="mini"><van-icon name="plus" /></van-button>
              </template>
            </van-card>

            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>

          </van-col>
        </van-row>

    </van-swipe-cell>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"

import {
  Button,
  Card,
  Tag,
  Icon,
  SwipeCell,
  Row,
  Col,
  Cell,
  Checkbox
} from "vant"

export default {
    data () {
      return {
        checked: false,
        itemChecked: true
      }
    },
    components: {
      [Card.name]: Card,
      [Button.name]: Button,
      [Tag.name]: Tag,
      [Icon.name]: Icon,
      [SwipeCell.name]: SwipeCell,
      [Cell.name]: Cell,
      [Row.name]: Row,
      [Col.name]: Col,
      [Checkbox.name]: Checkbox,
    },
    computed: {
      ...mapState("cart",["CartList"])
    },

    methods: {
      ...mapMutations("cart",['updataChecked']),
      // 修改选中属性
      changeItemChecked(item) {
        this.updataChecked(item)

        let x = this.CartList.filter(item => {
          return item.itemChecked
        })
        if(x.length === this.CartList.length){
          this.$bus.$emit("changChecked",true)
        }else{
          this.$bus.$emit("changChecked",false)
        }
      }
    },

}
</script>

<style lang="scss" scoped>
  .delete-button {
    height: 100%;
  }
  .SwipeCell{
    margin-bottom: 5px;
  }
  .col{
    height: 128px;
    ::v-deep .cell{
      height: 100%;
      padding: 0;
      .van-cell__value{
        display: flex;
        justify-content: center;
      }
    }
  }

</style>
