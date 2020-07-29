import Vue from 'vue'
import Vuex from 'vuex'


// 安装插件
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
  state: {
    cartList :[]
  },
  mutations: {
    addCount(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      let ordProduct = context.state.cartList.find(item => item.iid === payload.iid)
      
      if (ordProduct) {
        // ordProduct.count++
        context.commit('addCount',ordProduct)
      } else {
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
      }
      
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    }
  }
})
export default store
