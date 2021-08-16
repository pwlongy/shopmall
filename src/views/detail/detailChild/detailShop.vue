<template>
  <div class="detailShop">
    <div class="top">
      <img :src="shopInfo.logo" alt="">
      <span v-text="shopInfo.name"></span>
    </div>

    <div class="main">
      <div class="left">
        <span>
          <u v-text="shopInfo.sells"></u>
          <i>总销量</i>
        </span>
        <span>
          <u v-text="shopInfo.goodsCount"></u>
          <i>全部宝贝</i>
        </span>
      </div>

      <div class="right">
        <ul>
          <li v-for="(item, index) in shopInfo.score" :key="index">
            <span v-text="item.name"></span>
            <u v-text="item.score" :class="item.isBetter ? 'active1' : ''"></u>
            <i v-text="item.isBetter ? '高' : '低'" :class="item.isBetter ? 'active' : ''"></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="goShop">进店逛逛</div>

  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .detailShop{
    padding: 20px 10px 0px;
    .top{
      display: flex;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #bdbdbd;

      }
      span{
        display: block;
        margin-left: 10px;
      }
    }

    .main{
      display: flex;
      div{
        flex: 1;
        height: 100px;
      }
      .left{
        display: flex;
        font-size: 14px;
        span{
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          i{
            font-style: normal;
            margin-top: 8px;
          }
          u{
              text-decoration: none
          }
        }
        span:nth-child(2){
          border-right: 1px solid #bdbdbd;
        }
      }
      .right{
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
          li{
            margin-bottom: 6px;
            font-size: 14px;
            u{
              margin-left: 4px;
              text-decoration: none
            }
            i{
              font-size: 12px;
              font-style: normal;
              margin-left: 5px;
              background: green;
              color: #fff;
              padding: 1px;
            }
            .active{
              background: red;
            }
            .active1{
              color: red;
            }
          }
        }
      }
    }
     .goShop{
        height: 30px;
        width: 200px;
        border-radius: 15px;
        background: #fafafa;
        margin: 10px auto;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
      }
  }
</style>
