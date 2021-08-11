<template>
  <div class="tabControl">
    <div v-for="(item,index) in title"
      :key="index"
      :class="{ active : currentIndex === index}"
      @click="itemClick(index)">
      <span v-text="item"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('handItem',index)
    }
  }

}
</script>

<style lang="scss" scoped>
  .tabControl{
    display: flex;
    text-align: center;
    line-height: 40px;
    &>div{
      flex: 1;
      font-size: 14px;
      span{
        padding: 5px;
      }
    }
    .active{
      color: var(--color-high-text);
      span{
        border-bottom: 3px solid var(--color-high-text);
      }
    }
  }
</style>
