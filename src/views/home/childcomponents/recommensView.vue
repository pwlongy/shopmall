<template>
  <div class="recommens">
    <div v-for="item in recommend" :key="item.sort">
      <a :href="item.link"><img :src="item.image"></a>
      <span v-text='item.title'></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: Array,

  },
  mounted () {
    console.log(this.recommend)
  }
}
</script>

<style lang="scss" scoped>
  .recommens{
    width: 100%;
    display: flex;
    padding-top: 10px   ;
    &>div{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      img{
        width: 80px;
        height: 80px;
      }
      span{
        display: block;
        margin-top: 10px;
      }
    }
  }
</style>
