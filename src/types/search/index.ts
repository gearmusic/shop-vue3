export interface SearchPageInfo {
  total: number,
  pageSize: number,
  pageNo: number,
  totalPages: number,
}

export interface SearchPramas {
  category1Id: string,
  category2Id: string,
  category3Id: string,
  categoryName: string,
  keyword: string,
  order: string,
  pageNo: number,
  pageSize: number,
  props: string[],
  trademark: string
}

export interface SearchPageData extends SearchPageInfo {
  goodsList: Goods[],
  trademarkList: TradeMark[], 
  attrsList: Attr[]
}

export interface TradeMark {
  tmId: number,
  tmName: string
}

export interface Attr {
  attrId: number,
  attrName: string,
  attrValueList: string[]
}

export interface Goods extends SearchPramas {
  id: number,
  attrs: string,
  category1Name: string,
  category2Name: string,
  category3Name: string,
  createTime: string,
  defaultImg: string,
  hotScore: number,
  price: number,
  title: string,
  tmId: number,
  tmName: string
}

