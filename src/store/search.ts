import { defineStore } from 'pinia'

import { SearchPageInfo, SearchPageData, SearchPramas, Attr } from '@/types/search'

import { reqSearchData } from '@/api'

const useSearchStore = defineStore('search', {
  state : () => {
    const pageData: SearchPageData = {
      total: 0,
      pageSize: 0,
      pageNo: 0,
      totalPages: 0,
      goodsList: [],
      trademarkList: [], 
      attrsList: []
    }

    const searchPramas: SearchPramas = {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      categoryName: '',
      keyword: '',
      order: '1:desc',
      pageNo: 1,
      pageSize: 10,
      props: [],
      trademark: ''
    }

    return { 
      pageData,
      searchPramas
    }
  },

  getters: { 
    trademarks(state) {
      return state.pageData.trademarkList
    },
    attrs(state) {
      return state.pageData.attrsList
    },
    goodsList(state) {
      return state.pageData.goodsList
    },
    pageInfo(state): SearchPageInfo  {
      
      return {
        total: state.pageData.total,
        pageNo: state.pageData.pageNo,
        pageSize: state.pageData.pageSize,
        totalPages: state.pageData.totalPages
      }
    },    
    params(state) {
      return state.searchPramas
    },

  },

  actions: { 

    async updatePageData() {
      this.searchPramas.pageNo = 1
      this.pageData = (await reqSearchData(this.searchPramas)).data as SearchPageData
    },

    async updateParam(schema: {}) {
      Object.assign(this.searchPramas, schema)
      await this.updatePageData()
    },

    async updateParamAttr(attr: { name: string, value: string | number }) {
      Reflect.set(this.searchPramas, attr.name, attr.value)
      await this.updatePageData()
    },

    async updateParamProps(attr: Attr, propValue: string) {
      let key = `${ attr.attrId }:${ propValue}:${ attr.attrName }`
      this.searchPramas.props.filter(m => m === key).length === 0 && this.searchPramas.props.push(key)
      await this.updatePageData()
    },   

    async deleteParamProps(propValue: string) {
      this.searchPramas.props.splice(this.searchPramas.props.findIndex(m => m === propValue), 1)
      await this.updatePageData()
    },

    async updateParamOrder(order: string) {
      await this.updateParam({ order })
    },   

    async updatePageNum(pageNo: number) {
      Object.assign(this.searchPramas, { pageNo })
      this.pageData = (await reqSearchData(this.searchPramas)).data as SearchPageData
    },  

  },
})

export default useSearchStore