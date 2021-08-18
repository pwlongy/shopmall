const cart = {
  namespaced: true,
  state: {
    CartList: []
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
    addCart(content, playload){
      console.log(content.state.CartList)
      let oldProduct = content.state.CartList.find(item => {
        return item.iid == playload.iid
      })
      console.log(oldProduct)
      if(oldProduct){
        content.commit("addCount",oldProduct)
      }else{
        playload.count = 1
        content.commit("addToCart",playload)
      }
    }
  }
}
export default cart
