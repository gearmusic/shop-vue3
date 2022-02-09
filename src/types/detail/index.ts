export interface DetailPageData {
  price: number,
  categoryView: CategoryView,
  valuesSkuJson: string,
  skuInfo: SkuInfo,
  spuSaleAttrList: SpuSaleAttr[],
}

export interface CategoryView {
  id: number,
  category1Id: number,
  category1Name: string,
  category2Id: number,
  category2Name: string,
  category3Id: number,
  category3Name: string
}


export interface SkuInfo {
  id: number,
  category3Id: number,
  createTime: string,
  isSale : number,
  price: number,
  skuAttrValueList: SkuAttrValue[],
  skuDefaultImg: string,
  skuDesc: string,
  skuImageList: SkuImage[],
  skuName: string,
  skuSaleAttrValueList: SkuSaleAttrValue[],
  spuId: number,
  tmId: number,
  weight: string

}

interface SkuAttrValue {
  attrId: number,
  attrName: string,
  id: number,
  skuId: number,
  valueId: number,
  valueName: string,
}

export interface SkuImage {
  id: number,
  imgName: string,
  imgUrl: string,
  isDefault: string,
  skuId: number,
  spuImgId: number,
}

export interface SkuSaleAttrValue {
  id: number,
  saleAttrId: number,
  saleAttrName: string,
  saleAttrValueId: number,
  saleAttrValueName: string,
  skuId: number,
  spuId: number
}

export interface SpuSaleAttr {
  baseSaleAttrId: number,
  id: number,
  saleAttrName: string,
  spuId: number,
  spuSaleAttrValueList: SpuSaleAttrValue[]
}

export interface SpuSaleAttrValue {
  id: number,
  spuId: number,
  baseSaleAttrId: number,
  saleAttrValueName: string,
  saleAttrName: string,
  isChecked: string  
}