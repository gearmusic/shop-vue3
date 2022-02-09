export interface AddressInfo {
  id: number,
  userAddress: string,
  userId: number,
  provinceId: number,
  consignee: string,
  phoneNum: string,
  isDefault: string
  regionId: number,
  fullAddress: string
}

export interface Order {
  consigneeTel: string,
  deliveryAddress: string,
  orderComment: string,
  paymentWay: string,
  orderDetailList: OrderDetail[]
}

export interface OrderDetail {
  imgUrl: string,
  orderPrice: number,
  refundStatus: string,
  refundStatusString: string,
  skuId: number,
  skuName: string,
  skuNum: number,
  sourceId: number,
  sourceType: string
}

export interface OrderItem {
  id: number,
  consignee: string,
  totalAmount: number,
  paymentWay: string,
  outTradeNo: string,
  tradeBody: string,
  createTime: string,
  orderStatusName: string,
  orderDetailList: OrderDetail[]
 
}