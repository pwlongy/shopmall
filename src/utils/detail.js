import {request} from "./request"

export function getDetail(iid){
  return request({
    url: '/detail',
    params:{
      iid
    },
    method: 'get'
  })
}

// 推荐商品接口
export function getRecommend(){
  return request({
    url: '/recommend',
    method: "get"
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.newPrice = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice,
    this.columns = columns,
    this.services = services
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.fans = shopInfo.cFans,
    this.sells = shopInfo.cSells,
    this.score = shopInfo.score,
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams{
  constructor(info, rule){
    this.image = info.images ? info.images[0] : '',
    this.info = info.set,
    this.sizes = rule.tables
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
