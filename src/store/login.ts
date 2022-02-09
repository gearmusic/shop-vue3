import { defineStore } from 'pinia'

import useCartStore from '@/store/cart'

import {
  reqRegValCode,
  postRegUser,
  getUserLoginInfo,
  postUserLogin,
  logoutUserInfo,
} from '@/api'

import {
  getToken,
  setToken,
  removeToken
} from '@/libs/token'

import { LoginInfo} from '@/types/login'

//1定义并导出容器，容器ID必须唯一
const useLoginStore = defineStore('login', {
  state : () => {
    return { 
      loginInfo : {} as (LoginInfo | undefined), 

    }
  },

  getters: { 

  },
  
  //不能使用箭头函数定义actions,因为箭头函数绑定外部this
  actions: {
    async getValCode(phone: string) {
      return (await reqRegValCode(phone)).data
    },     
    async register(phone: string, password: string, code: string) {
      await postRegUser({ phone, password, code })
      return true
    },    
    async load() {
      if(getToken()){
        this.loginInfo = (await getUserLoginInfo()).data

        const cartStore = useCartStore()
        cartStore.loadList()
      }
      
    },
    async login(phone: string, password: string) {
      const data : { token: string } = (await postUserLogin({ phone, password })).data
      if(data.token) {
        setToken(data.token)

        this.load()
      }
    },    
    async logout() {
      await logoutUserInfo()        
      removeToken()
      this.loginInfo = undefined
    },

  },

})

export default useLoginStore