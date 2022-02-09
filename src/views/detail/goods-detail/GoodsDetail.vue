<template>
  <div class="goodsDetail">
    <h3 class="InfoName">{{ skuInfo.skuName }}</h3>
    <p class="news">{{ skuInfo.skuDesc }}</p>
    <div class="priceArea">
      <div class="priceArea1">
        <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
        <div class="price">
          <i>¥</i>
          <em>{{ skuInfo.price }}</em>
          <span>降价通知</span>
        </div>
        <div class="remark">
          <i>累计评价</i>
          <em>7878</em>
        </div>
      </div>
      <div class="priceArea2">
        <div class="title">
          <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
        </div>
        <div class="fixWidth">
          <i class="red-bg"> 加价购 </i>
          <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
        </div>
      </div>
    </div>
    <div class="support">
      <div class="supportArea">
        <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
        <div class="fixWidth">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
      </div>
      <div class="supportArea">
        <div class="title">配 送 至</div>
        <div class="fixWidth">广东省 深圳市 宝安区</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SkuInfo } from '@/types/detail' 

defineProps<{
  skuInfo: SkuInfo
}>()

</script>

<style lang="less" scoped>
.InfoName {
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
}
.news {
  color: #e12228;
  margin-top: 15px;
}
.priceArea {
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
  .priceArea1 {
    overflow: hidden;
    line-height: 28px;
    margin-top: 10px;
    .title {
      float: left;
      margin-right: 15px;
    }
    .price {
      float: left;
      color: #c81623;
      i {
        font-size: 16px;
      }
      em {
        font-size: 24px;
        font-weight: 700;
      }
      span {
        font-size: 12px;
      }
    }
    .remark {
      float: right;
    }
  }
  .priceArea2 {
    overflow: hidden;
    line-height: 28px;
    margin-top: 10px;
    .title {
      margin-right: 15px;
      float: left;
    }
    .fixWidth {
      width: 520px;
      float: left;
      .red-bg {
        background: #c81623;
        color: #fff;
        padding: 3px;
      }
      .t-gray {
        color: #999;
      }
    }
  }
}
.support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
  .supportArea {
    overflow: hidden;
    line-height: 28px;
    margin-top: 10px;
    .title {
      margin-right: 15px;
      float: left;
    }
    .fixWidth {
      width: 520px;
      float: left;
      color: #999;
    }
  }
}
</style>