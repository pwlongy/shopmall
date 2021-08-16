<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .navbar{
    height: 44px;
    line-height: 44px;
    display: flex;
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 10;
    background: var(--color-tint);
    .left, .right{
      width: 60px;
    }
    .center{
      flex: 1;
      text-align: center;
      color: #fff;
    }
  }
</style>
