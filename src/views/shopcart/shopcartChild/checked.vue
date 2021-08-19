<template>
  <van-checkbox v-model="checked" />
</template>

<script>
import {
  Checkbox
} from "vant"
export default {
  components: {
    [Checkbox.name]: Checkbox
  },
  props: {
    itemChecked: {
      type: Boolean
    }
  },
  mounted () {
    this.checked = this.itemChecked
    console.log(this.checked)
  },
  data () {
    return {
      checked: null
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
