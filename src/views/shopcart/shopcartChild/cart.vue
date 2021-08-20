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
                <van-button size="mini" @click="changecount(-1,item)"><van-icon name="minus" /></van-button>
                <van-button size="mini" @click="changecount(1,item)"><van-icon name="plus" /></van-button>
              </template>
            </van-card>
          </van-col>
        </van-row>

        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" @click="delCart(item)"/>
        </template>
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
  Checkbox,
  Toast,
  Dialog
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
      ...mapMutations("cart",['updataChecked','updataCount','addCount', 'delItemCart']),
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
      },
      // 商品数量的加减
      changecount(index,item){
        if(index === -1){
          if(item.count == 1){
            Toast("该宝贝不能减少了")
          }else{
            this.updataCount(item)
          }
        }else if(index === 1){
            this.addCount(item)
        }
      },
      // 删除商品
      delCart(item){
        Dialog.confirm({
          title: '确认删除',
          message: '是否删除该商品',
        })
          .then(() => {
            this.delItemCart(item)
            // on confirm
          })
          .catch(() => {
            // on cancel
          });

      },
    }
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
