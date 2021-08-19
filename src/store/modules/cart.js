const cart = {
  namespaced: true,
  state: {
    CartList: [
      {
        image:"//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg",
        title:"2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
        desc:"建议零售价\t¥129.00\t\n面料名称\t奥戴尔\t主面料成分\t棉\t主面料成分的含量\t95（%）\n图案\t纯色\t风格\t文艺\n款式\t套头\t袖长\t短袖\t工艺\t拼贴/拼接 88803",
        price:"56.64",
        iid:"1jw0sr2",
        count:1,
        itemChecked:true,
      }
    ]
  },
  getters: {

  },
  mutations: {
    // mutations 唯一的目的就是修改 state 中的状态
    // mutations 中的每一个方法尽可能完成的事件比较单一
    addCount(state, payload){
      payload.count++
    },
    addToCart(state, payload){
      state.CartList.push(payload)
    }
  },
  actions: {
    // 添加商品到 vuex
    addCart(content, playload){
      console.log(content.state.CartList)
      let oldProduct = content.state.CartList.find(item => {
        return item.iid == playload.iid
      })
      if(oldProduct){
        content.commit("addCount",oldProduct)
      }else{
        playload.count = 1
        playload.itemChecked = true
        content.commit("addToCart",playload)
      }
    },

    // changeChecked(content) {

    // }
  }
}
export default cart
