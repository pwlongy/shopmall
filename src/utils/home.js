import {request} from "./request.js"

// 获取导航图片数据
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
    method: "get"
  })
}
// 获取商品数据列表
export function getHomeGoods(type, page){
  return request({
    url: "/home/data",
    params: {
      type,
      page
    },
    method: "get"
  })
}
