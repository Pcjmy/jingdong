import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocaCartList = () => {
  if (localStorage.cartList == null) {
    return {}
  }
  return JSON.parse(localStorage.cartList)
}

export default Vuex.createStore({
  state: {
    cartList: getLocaCartList(),
    // cartList: {
    //   // 第一层级是商铺的id
    //   shopId: {
    //     // 第二层是商品id
    //     // 第二层内容是商品内容以及购物数量
    //     productId: {
    //       _id:
    //       name:
    //       imgUrl:
    //       sales:
    //       price:
    //       oldPrice:
    //       count:
    //     }
    //   }
    // }
    addressList: []
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    clearCartData(state, shopId) {
      state.cartList[shopId].productList = {}
    },
    changeAddressList(state, addressList) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  }
})
