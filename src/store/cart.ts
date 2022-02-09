import { defineStore } from 'pinia'

import {
  postCartData,
  reqCartData,
  deleteCartData,
  updateCartChecked,
} from '@/api'

import { CarInfoList, CartInfo, CartInfoView } from '@/types/cart'

//1定义并导出容器，容器ID必须唯一
const useCartStore = defineStore('cart', {
  state : () => ({
    cartList : new Array<CarInfoList>(),
  }),

  getters: {
    cartInfoAll: (state): CartInfo[] => {
      let cartInfos = new Array<CartInfo>()
      state.cartList.forEach(m =>
        cartInfos.push(...m.cartInfoList)
      )

      return cartInfos
    },
    cartViewListAll(): CartInfoView[] {
      return this.cartInfoAll.map(m => Object.assign(m, { skuSumPrice : m.skuNum * m.skuPrice }))
    }
    , checkedQuantity(): number {
      return this.cartInfoAll.filter(m => m.isChecked === 1).length
    }
    , checkedTotalPrice(): number {
      return this.cartInfoAll.filter(m => m.isChecked === 1).reduce((preVal: number, item: CartInfo) => preVal + item.skuNum*item.skuPrice, 0)
    }
  },
  
  //不能使用箭头函数定义actions,因为箭头函数绑定外部this
  actions: { 
    async loadList() {
      //console.log((await reqCartData()).data)
      this.cartList = (((await reqCartData()).data) as Array<CarInfoList>)
    },
    async addCart(skuId: number, quantity: number) {
      await postCartData(skuId, quantity)
      this.loadList()
    },
    async delete(skuId: number) {
      await deleteCartData(skuId)

      for(let i = 0; i < this.cartList.length; i++) {
        if(this.cartList[i].cartInfoList.filter(m => m.skuId === skuId).length > 0) {
          this.cartList[i].cartInfoList.splice(this.cartList[i].cartInfoList.findIndex(m => m.skuId === skuId), 1)
          break;
        }
      }

    },
    async deleteCartCheckedAll() {

      await this.cartList.forEach(m => m.cartInfoList.filter(n => n.isChecked === 1).forEach(n => {
        this.delete(n.skuId)
      }))

    },    
    async updateCart(skuId: number, quantity: number) {      
      for(let i = 0; i < this.cartList.length; i++) {
        if(this.cartList[i].cartInfoList.filter(m => m.skuId === skuId).length > 0) {
          await postCartData(skuId, quantity)
          this.cartList[i].cartInfoList[this.cartList[i].cartInfoList.findIndex(m => m.skuId === skuId)].skuNum += quantity
          break;
        }
      }

    },
    async updateCartChecked(skuId: number) {
      
      for(let i = 0; i < this.cartList.length; i++) {
        if(this.cartList[i].cartInfoList.filter(m => m.skuId === skuId).length > 0) {
          let val: 0 | 1 = this.cartList[i].cartInfoList[this.cartList[i].cartInfoList.findIndex(m => m.skuId === skuId)].isChecked === 1 ? 0 : 1
          
          await updateCartChecked(skuId, val)

          this.cartList[i].cartInfoList[this.cartList[i].cartInfoList.findIndex(m => m.skuId === skuId)].isChecked = val
          break;
        }
      }

    },
    async updateCartCheckedAll(checked: 0|1) {

      await this.cartList.forEach(m => m.cartInfoList.forEach(n => {
        updateCartChecked(n.skuId, checked)
        n.isChecked = checked
      }))

    }

  },
})

export default useCartStore