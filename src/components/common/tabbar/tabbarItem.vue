<template>
  <div class="tabbarItem" @click="handlpath">
    <div v-if="isActive">
      <slot name="Img"></slot>
    </div>
    <div v-else>
    <slot name="ActiveImg"></slot>
    </div>
    <div :style="ActiveColor">
    <slot name="text"></slot>
    </div>
  </div>  
</template>


<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  mounted () {
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) === -1
    },
    ActiveColor() {
      return !this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    handlpath() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabbarItem{
    height: 100%;
    flex: 1;
    text-align: center;
    font-size: 14px;
    img{
      margin-top: 4px;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
    
  }
</style>