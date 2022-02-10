import request from './request'

export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

//search
import { SearchPramas } from '@/types/search'
export const reqSearchData = (params: SearchPramas) => request({ url: '/list', method: 'post', data: params })

//detail
export const reqDetailData = (id: number) => request({ url: `/item/${ id }`, method: 'get' })

//cart
export const postCartData = (id: number, quantity: number) => request({ url: `/cart/addToCart/${ id }/${ quantity }`, method: 'post' })
export const reqCartData = () => request({ url: '/cart/cartList', method: 'get' })
export const deleteCartData = (skuId: number) => request({ url: `/cart/deleteCart/${ skuId }`, method: 'DELETE' })
export const updateCartChecked = (skuId: number, checked: 0 | 1) => request({ url: `/cart/checkCart/${ skuId }/${ checked }`, method: 'get' })

//login
export const reqRegValCode = (phone: string) => request({ url: `/user/passport/sendCode/${ phone }`, method: 'get' })
export const postRegUser = (params: { phone: string, code: string, password: string }) => request({ url: `/user/passport/register`, method: 'post', data: params })
export const postUserLogin = (params: { phone: string, password: string }) => request({ url: `/user/passport/login`, method: 'post', data: params })
export const getUserLoginInfo = () => request({ url: `/user/passport/auth/getUserInfo`, method: 'get' })
export const logoutUserInfo = () => request({ url: `/user/passport/logout`, method: 'get' })

//pay
import { Order } from '@/types/pay'

export const reqAddressInfo = () => request({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })
export const reqTradeNo = () => request({ url: '/order/auth/trade', method: 'get' })
export const postOrder = (param: Order, tradeNo: string) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data: param })
export const reqPayInfo = (orderId: number) => request({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
export const reqOrderPage = (pageNum: number) => request({ url: `/order/auth/${ pageNum }/5`, method: 'get' })


import request4pack from './request4pack'
export const reqOrderState = (orderId: number) => request4pack({ url: `/payment/weixin/queryPayStatus/${ orderId }`, method: 'get' })

//不使用MOCK默认用这里
import requestLocal from './request_local'
export const reqBannerList = () => requestLocal({ url: '/home/banner.json' })
export const reqHomeFloor = () => requestLocal({url: '/home/floor.json'})

//要是启用了MOCK就可以使用这里
/*
import requestMock from './request_mock'

//home
export const reqBannerList = () => requestMock({ url: '/home/banner', method: 'get' })
export const reqHomeFloor = () => requestMock({ url: '/home/floor', method: 'get' })
*/
