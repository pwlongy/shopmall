const cart = {
  namespaced: true,
  state: {
    CartList: [
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
    },

    updataChecked(state, payload){
      // let res = state.CartList.find(item => {
      //   return item = payload
      // })
      // if(res){
      //   res.itemChecked = !res.itemChecked
      // }
      payload.itemChecked === payload.itemChecked
    },
    updataCount(state,payload){
      payload.count = payload.count-1
    },
    delItemCart(state, payload){
      let index = state.CartList.indexOf(payload)
      state.CartList.splice(index, 1)
    }
  },
  actions: {
    // 添加商品到 vuex
    addCart(content, payload){
      console.log(content.state.CartList)
      let oldProduct = content.state.CartList.find(item => {
        return item.iid == payload.iid
      })
      if(oldProduct){
        content.commit("addCount",oldProduct)
      }else{
        payload.count = 1
        payload.itemChecked = false
        content.commit("addToCart",payload)
      }
    },

    // changeChecked(content,payload) {

    // }
  }
}
export default cart
