<template>
  <div class="detail" v-if="Object.keys(itemParams).length !== 0">
    <!-- 尺码 -->
    <table width="100%" cellspacing="0">
      <tr v-for= "(item, index) in itemParams.sizes[0]" :key= "index">
        <td v-for="(items, i) in itemParams.sizes[0][index]" :key="i" v-text="item[i]"></td>
      </tr>
    </table>
    <!-- 信息 -->
    <table width="100%" cellspacing="0" class="tab">
      <tr v-for="(item, index) in itemParams.info" :key="index">
        <td v-for="(items, i) in itemParams.info[index]" :key="i" v-text="item[i]"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail{
    table{
      font-size: 12px;
      tr{
        height: 50px;
        td{
          border-bottom: 1px solid #dbdbdb;
        }
        td:nth-child(1){
          width: 100px;
          padding-left: 10px;
        }
      }
    }
    .tab{
      tr{
        td:nth-child(2){
          color: var(--color-high-text);
        }
      }
    }
  }
</style>
