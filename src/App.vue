<template>
  <div id="app">
    <router-view></router-view>

    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
const mainTabbar = () => import("@/components/common/mainTabbar.vue")
export default {
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import "./assets/css/base.css"
</style>
