<template>
  <div class="goodlistitem">
    <img :src="GoodsItem.show.img"/>
    <div>
      <p v-text="GoodsItem.title"></p>
      ￥<span v-text="GoodsItem.price"></span>
      <i v-text="GoodsItem.cfav"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .goodlistitem{
    font-size: 12px;
    margin-bottom: 20px;
    img{
      width: 100%;
      border-radius: 5px;
    }
    &>div{
      p{
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      }
      span{
        color: crimson;
      }
      i{
        float: right;
      }
    }
  }
</style>
