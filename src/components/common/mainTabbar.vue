<template>
  <div class="mainTabbar">
    <tabbar>
      <tabbarItem path="/home">
        <img slot="Img" src="../../assets/img/tabbar/home.svg"/>
        <img slot="ActiveImg" src="../../assets/img/tabbar/home_active.svg"/>
        <div slot="text"> 首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="Img" src="../../assets/img/tabbar/category.svg"/>
        <img slot="ActiveImg" src="../../assets/img/tabbar/category_active.svg"/>
        <div slot="text"> 分类</div>
      </tabbarItem>
      <tabbarItem path="/shopcart">
        <img slot="Img" src="../../assets/img/tabbar/shopcart.svg"/>
        <img slot="ActiveImg" src="../../assets/img/tabbar/shopcart_active.svg"/>
        <div slot="text"> 购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="Img" src="../../assets/img/tabbar/profile.svg"/>
        <img slot="ActiveImg" src="../../assets/img/tabbar/profile_active.svg"/>
        <div slot="text"> 我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>


<script>
const tabbar = () => import("@/components/common/tabbar/tabbar.vue")
const tabbarItem = () => import("@/components/common/tabbar/tabbarItem.vue")

export default {
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style lang="scss" scoped>
  .mainTabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
