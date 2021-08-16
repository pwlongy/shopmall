<template>
  <div class="detailInfo" v-if="Object.keys(goods).length !== 0">
    <p v-text="goods.title"></p>
    <div class="price">
      <span v-text="'￥'+goods.realPrice"></span>
      <del v-text="goods.oldPrice"></del>
      <i v-text="goods.discount"></i>
    </div>
    <div class="message">
      <span v-text="goods.columns[0]"></span>
      <span v-text="goods.columns[1]"></span>
      <span v-text="goods.services[2].name"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .detailInfo{
    padding: 10px 5px;
    border-bottom: 1px solid #dedede;
    .price{
      margin-top: 5px;
      span{
        color: var(--color-high-text);
        font-size: 20px;
      }
      del{
        color: rgb(129, 120, 120);
        font-size: 12px;
        margin-left: 15px;
      }
      i{
        font-style: normal;
        background: rgb(243, 41, 41);
        border-radius: 15px;
        padding: 2px 15px;
        font-size: 12px;
        color: #fff;
        margin-left: 5px;
      }
    }

    .message{
      display: flex;
      font-size: 12px;
      margin-top: 10px;
      color: #b4b4b4;
      span{
        flex: 1;
        text-align: center;
      }
    }
  }
</style>
