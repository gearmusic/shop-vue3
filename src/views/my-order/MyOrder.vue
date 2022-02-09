<template>
  <div class="order-main">
    <div class="container">
      <div class="order-body">
        <!--左侧列表-->
        <div class="order-left">
          <dl>
            <dt>
              <i>·</i> 订单中心
            </dt>
            <dd>我的订单</dd>
            <dd>团购订单</dd>
            <dd>本地生活订单</dd>
            <dd>我的预售</dd>
            <dd>评价晒单</dd>
            <dd>取消订单记录</dd>
          </dl>
          <dl>
            <dt>
              <i>·</i> 关注中心
            </dt>
            <dd>关注的商品</dd>
            <dd>关注的店铺</dd>
            <dd>关注的专辑</dd>
            <dd>关注的品牌</dd>
            <dd>关注的活动</dd>
            <dd>浏览历史</dd>
          </dl>
          <dl>
            <dt>
              <i>·</i> 特色业务
            </dt>
            <dd>我的营业厅</dd>
            <dd>京东通信</dd>
            <dd>定期送</dd>
            <dd>京东代下单</dd>
            <dd>我的回收单</dd>
            <dd>节能补贴</dd>
            <dd>医药服务</dd>
            <dd>流量加油站</dd>
            <dd>黄金托管</dd>
          </dl>
          <dl>
            <dt>
              <i>·</i> 客户服务
            </dt>
            <dd>返修退换货</dd>
            <dd>价格保护</dd>
            <dd>意见建议</dd>
            <dd>购买咨询</dd>
            <dd>交易纠纷</dd>
            <dd>我的发票</dd>
          </dl>
          <dl>
            <dt>
              <i>·</i> 设置
            </dt>
            <dd>个人信息</dd>
            <dd>收货地址</dd>
          </dl>
        </div>
        <!-- 右侧内容 -->
        <div class="order-right">
          <!--订单内容-->
          <div class="order-content">
            <div class="title">
              <h3>我的订单</h3>
            </div>
            <div class="chosetype">
              <table>
                <thead>
                  <tr>
                    <th width="29%">商品</th>
                    <th width="31%">订单详情</th>
                    <th width="13%">收货人</th>
                    <th>金额</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="orders">

              <table class="order-item" v-for="item in orderList" :key="item.id">
                <thead>
                  <tr>
                    <th colspan="5">
                      <span class="ordertitle">
                        {{ item.createTime }} 订单编号：{{ item.outTradeNo }}
                        <span class="pull-right delete">
                          <img src="@/assets/images/delete.png" />
                        </span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="(childItem, index) in item.orderDetailList" :key="childItem.sourceId">
                    <td width="60%">
                      <div class="typographic">
                        <img :src="childItem.imgUrl" />
                        <a href="#" class="block-text">{{ childItem.skuName }}</a>
                        <span>x{{ childItem.skuNum }}</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                    <td v-if="index === 0" :rowspan="item.orderDetailList.length" width="8%" class="center">{{ item.consignee }}</td>
                    <td v-if="index === 0" :rowspan="item.orderDetailList.length" width="13%" class="center">
                      <ul class="unstyled">
                        <li>总金额¥{{ item.totalAmount }}</li>
                        <li>在线支付</li>
                      </ul>
                    </td>
                    <td v-if="index === 0" :rowspan="item.orderDetailList.length" width="8%" class="center">
                      <a href="#" class="btn">{{ item.orderStatusName }}</a>
                    </td>
                    <td v-if="index === 0" :rowspan="item.orderDetailList.length" width="13%" class="center">
                      <ul class="unstyled">
                        <li>
                          <a href="mycomment.html" target="_blank">评价|晒单</a>
                        </li>
                      </ul>
                    </td>
                  </tr>


                </tbody>
              </table>

            </div>
            <div class="choose-order">
              
              <pagination :page-size="5" :currentPage="currentPage" :total-count="totalRecordCount" @pageChange="pageChange" />

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, reactive, ref } from 'vue'
import { reqOrderPage } from '@/api'
import { OrderItem } from '@/types/pay'
import Pagination from '@/components/pagination/Pagination.vue';

const orderList = reactive([] as OrderItem[]) 
const currentPage = ref(1)
const pageTotal = ref(0)
const totalRecordCount = computed(() => {
  return 5 * pageTotal.value
})

const pageChange = async (pageNum: number) => {
  currentPage.value = pageNum

  const { records, pages } = (await reqOrderPage(pageNum)).data as { records : OrderItem[], pages : number }

  pageTotal.value = pages

  orderList.length = 0
  orderList.push(
    ... records
  )
}

onMounted(async () => {
  
  pageChange(currentPage.value)

})

</script>

<style lang="less" scoped>
.order-main {
  .container {
    margin: 0 auto;
    width: 1200px;
    .order-body {
      padding: 10px;
      color: #333;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      //左边
      .order-left {
        float: left;
        width: 16.67%;

        dl {
          line-height: 28px;
          dt {
            font-weight: 700;
            padding: 5px;
            i {
              color: #77b72c;
            }
          }
          dd {
            margin: 0 0 6px;
            border-bottom: 1px solid #ededed;
            text-align: center;
          }
        }
      }
      //右边
      .order-right {
        float: right;
        width: 83.33%;

        //订单部分
        .order-content {
          margin: 0 20px;
          color: #666;

          //标题
          .title {
            margin-bottom: 22px;
            border: 1px solid #ddd;
            h3 {
              padding: 12px 10px;
              font-size: 15px;
              background-color: #f1f1f1;
            }
          }
          //表头
          .chosetype {
            margin-bottom: 15px;
            color: #666;
            table {
              border: 1px solid #e6e6e6;
              border-collapse: separate;
              border-radius: 2px;
              width: 100%;
              max-width: 100%;
              border-spacing: 0;
              th {
                padding: 6px 8px;
                color: #666;
                font-weight: 700;
                vertical-align: bottom;
                background-color: #f4f4f4;
                line-height: 18px;
                border-bottom: 1px solid #e6e6e6;
                font-size: 12px;
                text-align: left;
              }
            }
          }

          // 表单内容
          .orders {
            font-size: 12px;
            a {
              &:hover {
                color: #4cb9fc;
              }
            }
            table {
              border: 1px solid #e6e6e6;
              border-collapse: collapse;
              border-radius: 2px;
              width: 100%;
              margin-bottom: 18px;
              max-width: 100%;
              th {
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: bottom;
                background-color: #f4f4f4;
                font-size: 12px;
                color: #666;
                .pull-right {
                  float: right;
                  cursor: pointer;
                  img {
                    margin-right: 10px;
                    vertical-align: middle;
                  }
                }
              }
              td {
                font-size: 12px;
                color: #666;
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: middle;
                border: 1px solid #e6e6e6;
                &.center {
                  text-align: center;
                }
                .typographic {
                  img {
                    float: left;
                    margin-right: 10px;
                    width: 85px;
                    height: 85px;
                  }
                  a {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    color: #e1251b;
                    &.service {
                      color: #666;
                    }
                  }
                  span {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    text-align: center;
                  }
                }
              }
            }
          }

          // 分页
          .choose-order {
            .pagination {
              margin: 38px 0;
              ul {
                font-size: 0;
                display: inline-block;
                li {
                  display: inline-block;
                  padding: 4px 9px;
                  font-size: 14px;
                  border: 1px solid #e0e9ee;
                  &.prev,
                  &.next {
                    background-color: #fafafa;
                  }
                  &.prev {
                    border-right-color: #28a3ef;
                  }
                  &.page {
                    border-color: #28a3ef;
                    border-left: 0;
                    &.actived {
                      background-color: #28a3ef;
                      a {
                        color: #fff;
                      }
                    }
                  }
                }
              }
              div {
                display: inline-block;
                font-size: 14px;
                color: #333;
              }
            }
          }
        }


      }
    }
  }
}
</style>