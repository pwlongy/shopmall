<template>
  <div class="goodlistitem" @click="routeDetail">
    <img :src="showImage" @load ="imgLoad"/>
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
  methods: {
    // 当图片加载完成执行事件
    imgLoad(){
      // 添加事件总线
      // 发送事件
      // if(this.$route.path.indexOf("/home")){
      //   this.$bus.$emit("itemImageLoad")
      // }else if(this.$route.path.indexOf("/detail")){
      //   this.$bus.$emit("DetailItemImageLoad")
      // }
         this.$bus.$emit("itemImageLoad")
    },
    // 跳转详情页
    routeDetail(){
      this.$router.push("/detail/"+this.GoodsItem.iid)
    }
  },
  computed: {
    showImage(){
      return  this.GoodsItem.image || this.GoodsItem.show.img
    }
  }
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
