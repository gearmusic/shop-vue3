import { defineStore } from 'pinia'

import { 
  reqCategoryList,
} from '@/api'

import { Category } from '@/types'

//1定义并导出容器，容器ID必须唯一
const useCategoryStore = defineStore('category', {
  state : () => {
    return { 
      categoryList : new Array<Category>(),

    }
  },

  getters: { 

  },
  
  //不能使用箭头函数定义actions,因为箭头函数绑定外部this
  actions: { 
    async loadList() {
      this.categoryList = ((await reqCategoryList()).data as Category[]).splice(0, 8)
    }

    //
  },
})

export default useCategoryStore