<template>
  <div class="detailcommon">
    <div class="top">
      <span>用户评价</span>
      <u>更多<van-icon name="arrow" /></u>
    </div>
    <div class="title">
      <img :src="commonInfo.user.avatar"/>
      <span v-text="commonInfo.user.uname"></span>
    </div>

    <span class="message">
      <p v-text="commonInfo.content"></p>
      <div class="create">
        <span>{{commonInfo.created | showDate}}</span>
        <span v-text="commonInfo.style"></span>
      </div>
      <div class="messageImg">
        <img v-for="(item, index) in commonInfo.images" :key="index" :src="item">
      </div>
    </span>
  </div>
</template>

<script>
import {
  Icon
} from "vant"

import {formatDate} from "utils/detail"
export default {
  props: {
    commonInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    [Icon.name]: Icon
  },
  filters: {
    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style lang="scss" scoped>
  .detailcommon{

    .top{
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #dbdbdb;
      u{
        text-decoration: none;
        float: right;
        font-size: 12px;
        margin-right: 10px;
      }
    }

    .title{
      padding: 10px;
      display: flex;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span{
        display: block;
        margin-left: 10px;
      }
    }

    .message{
      font-size: 12px;
      p{
        margin: 10px 5px;
      }
      .create{
        padding: 0 5px;
        span{
          margin-right: 10px;
        }
      }
      .messageImg{
        margin-top: 15px;
        margin-left: 5px;
        img{
          width: 80px;
          height: 80px;
          margin-right: 5px;
        }
      }
    }
  }
</style>
