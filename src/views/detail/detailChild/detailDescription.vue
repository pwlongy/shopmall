<template>
  <div class="detaildescription" v-if="Object.keys(detailInfo).length !== 0 ">
    <p v-text="detailInfo.desc"></p>
    <span v-text="detailInfo.detailImage[0].key"></span>
    <div class="infoImg">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{
      currrntImage: 0
    }
  },
  computed: {
  },
  methods: {
    imgLoad(){
      if(++this.currrntImage === this.detailInfo.detailImage[0].list.length-1){
        this.$emit("loadImg")
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .detaildescription{
    padding-top: 10px;
    p{

    }
    p,span{
      padding: 0 10px;
      font-size: 14px;
    }
    span{
      margin-top: 10px;
      display: block;
    }
    .infoImg{
      img{
        width: 100%;
      }
    }
  }
</style>
