<template>
  <div class="goodlist">
    <GoodListItem v-for="(item, index) in list" :key="index" :GoodsItem="item" class="listItem"></GoodListItem>
  </div>
</template>

<script>
const GoodListItem = () => import("./GoodListItem.vue")
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style lang="scss" scoped>
  .goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .listItem{
      width: 48%;
    }
  }
</style>
