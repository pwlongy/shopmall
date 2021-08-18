<template>
  <div class="detailNavbar">
    <Navbar class="navbar">
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/detail/back.svg">
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item,index) in title"
          :key="index"
          v-text="item"
          @click="spanClick(index)"
          :class="{active: currentIndex === index}"></span>
      </div>
    </Navbar>
  </div>
</template>

<script>

const Navbar = () => import("components/common/navbar/Navbar.vue")
export default {
  components: {
    Navbar,
  },
  data () {
    return {
      title: ['商品',"参数","评论","推荐"],
      currentIndex: 0
    }
  },
  methods: {
    spanClick(index){
      this.currentIndex = index
      this.$emit("spanClick", index)
    },
    // f返回上一次路由
    back(){
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .detailNavbar{
    .navbar{
      font-size: 14px;
      background: #fff;
      .center{
        display: flex;
        span{
          flex: 1;
          color: #000;
        }
        .active{
          color: var(--color-high-text);
        }
      }
      .left{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>
