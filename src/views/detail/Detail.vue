<template>
  <type-nav :sort-hidden="true" />

  <div class="outer">
    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <con-poin :category-view="pageData.categoryView" />
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <previewer :sku-image-list="pageData.skuInfo.skuImageList" />

          <!--下方的缩略图-->
          <img-list :sku-image-list="pageData.skuInfo.skuImageList" />

        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <goods-detail :sku-info="pageData.skuInfo" />

          <choose :sku-sale-attr-list="pageData.spuSaleAttrList" />

          <add-cart @addToCart="addToCart" />
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="productDetail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###">商品介绍</a>
            </li>
            <li>
              <a href="###">规格与包装</a>
            </li>
            <li>
              <a href="###">售后保障</a>
            </li>
            <li>
              <a href="###">商品评价</a>
            </li>
            <li>
              <a href="###">手机社区</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

import { onMounted, reactive } from 'vue';

import ConPoin from '@/views/detail/con-poin/ConPoin.vue'
import Previewer from '@/views/detail/previewer/Previewer.vue'
import ImgList from '@/views/detail/img-list/ImgList.vue'
import GoodsDetail from '@/views/detail/goods-detail/GoodsDetail.vue'
import Choose from '@/views/detail/choose/Choose.vue';
import AddCart from '@/views/detail/add-cart/AddCart.vue';

import { useRoute, useRouter } from 'vue-router';

import { DetailPageData } from '@/types/detail'

import useCartStore from '@/store/cart'

import {
  reqDetailData,
} from '@/api'

interface Schema {
  code: number
}

const router = useRouter()
const route = useRoute()

const cartStore = useCartStore()

const pageData = reactive({
  price: 0,
  categoryView: {
    id: 0,
    category1Id:0,
    category1Name: '',
    category2Id: 0,
    category2Name: '',
    category3Id: 0,
    category3Name: ''
  },
  valuesSkuJson: '',
  skuInfo: {
    id: 0,
    category3Id: 0,
    createTime: '',
    isSale : 0,
    price: 0,
    skuAttrValueList: [],
    skuDefaultImg: '',
    skuDesc: '',
    skuImageList: [],
    skuName: '',
    skuSaleAttrValueList: [],
    spuId: 0,
    tmId: 0,
    weight: ''   
  },
  spuSaleAttrList: []
} as DetailPageData)

const addToCart = async (quantity: number) => {
  cartStore.addCart(pageData.skuInfo.id, quantity)
  router.push({ name: 'cart' })
}

onMounted(async () => {
  Object.assign(pageData, { ...(await reqDetailData(Number(route.params.id))).data })
})


</script>

<style lang="less" scoped>
.outer {
  .con {
    width: 1200px;
    margin: 15px auto 0;

    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;
      .previewWrap {
        float: left;
        width: 400px;
        position: relative;

      }
      .InfoWrap {
        width: 700px;
        float: right;
 

      }
    }
  }
  .productDetail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;
    .aside {
      width: 210px;
      float: left;
      border: 1px solid #ccc;
      .tabWraped {
        height: 40px;
        h4 {
          border-top: 3px solid #fff;
          float: left;
          line-height: 37px;
          width: 105px;
          text-align: center;
          border-bottom: 1px solid #ccc;
          &.active {
            border-top: 3px solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }
      .tabContent {
        padding: 10px;
        .tab-pane {
          display: none;
          &.active {
            display: block;
          }
          &:nth-child(1) {
            .partList {
              overflow: hidden;
              li {
                width: 50%;
                float: left;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }
            .goodsList {
              & > li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                padding-bottom: 5px;
                .list-wrap {
                  .p-img {
                    text-align: center;
                    img {
                      width: 152px;
                    }
                  }
                  .price {
                    font-size: 16px;
                    color: #c81623;
                  }
                  .operate {
                    text-align: center;
                    margin: 5px 0;
                    a {
                      background-color: transparent;
                      border: 1px solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: 2px 14px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .detail {
      width: 980px;
      float: right;
      .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;
        .kt {
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 5px 0 5px 15px;
        }
        .good-suits {
          height: 170px;
          padding-top: 10px;
          .master {
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;
            img {
              width: 87px;
            }
            p {
              color: #c81623;
              font-size: 16px;
              font-weight: 700;
            }
            i {
              position: absolute;
              top: 48px;
              right: -25px;
              font-size: 16px;
            }
          }
          .suits {
            width: 668px;
            height: 165px;
            float: left;
            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;
              img {
                width: 120px;
                height: 130px;
              }
              p {
                font-size: 12px;
              }
              label {
                display: block;
                position: relative;
                input {
                  vertical-align: middle;
                }
                span {
                  vertical-align: middle;
                }
              }
            }
          }
          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 20px;
            float: left;
            .num {
              font-size: 14px;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
            }
            .price {
              color: #b1191a;
              font-size: 16px;
              margin-bottom: 10px;
            }
            .addshopcar {
              background-color: #e1251b;
              border: 1px solid #e1251b;
              padding: 10px 25px;
              font-size: 16px;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }
      .intro {
        .tab-wraped {
          background: #ededed;
          // border: 1px solid #ddd;
          overflow: hidden;
          li {
            float: left;
            & + li > a {
              border-left: 1px solid #ddd;
            }
            &.active {
              a {
                // border: 0;
                background: #e1251b;
                color: #fff;
              }
            }
            a {
              display: block;
              height: 40px;
              line-height: 40px;
              padding: 0 11px;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
            }
          }
        }
        .tab-content {
          .tab-pane {
            display: none;
            &.active {
              display: block;
            }
            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;
                li {
                  margin: 10px 0;
                }
              }
              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>