export interface CarInfoList{
  cartInfoList: CartInfo[],
  createTime: string
}

export interface CartInfo {
  id: number,
  cartPrice: number,
  couponInfoList: null,
  createTime: string,
  imgUrl: string,
  isChecked: 0 | 1,
  isOrdered: number,
  operateTime: string,
  skuId: number,
  skuName: string,
  skuNum: number,
  skuPrice: number,
  sourceId: number,
  sourceType: string,
  userId: string,
}

export interface CartInfoView extends CartInfo {
  skuSumPrice: number
}
