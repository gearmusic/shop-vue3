<template>
  <type-nav :sort-hidden="true" />

  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">

        <ul class="cart-list" v-for="item in cartStore.cartViewListAll" :key="item.id">
          <li class="cart-list-con1">
            <Checkbox :checked="item.isChecked === 1" :sku-id="item.skuId" @changeChecked="changeChecked" />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">{{ item.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <ConQuantity :quantity="item.skuNum" :sku-id="item.skuId" @changeQuantity="changeQuantity" />
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuSumPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click.prevent="deleteCart(item.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>

      </div>
    </div>

    <div class="cart-tool">
      <div class="select-all">
        <input type="checkbox" v-model="isAllChecked" @click="changeCheckedAll" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click.prevent="cartStore.deleteCartCheckedAll()">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择
          <span>{{ cartStore.checkedQuantity }}</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ cartStore.checkedTotalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import Checkbox from '@/views/cart/checkbox/Checkbox.vue'
import ConQuantity from '@/views/cart/con-quantity/ConQuantity.vue'

import useCartStore from '@/store/cart'

const cartStore = useCartStore()

const isAllChecked = computed(() => {
  return cartStore.cartInfoAll.length > 0 
    && cartStore.cartInfoAll.length === cartStore.cartInfoAll.filter(m => m.isChecked === 1).length
})

const changeCheckedAll = () => {
  let val = !isAllChecked.value
  cartStore.updateCartCheckedAll(val ? 1 : 0)
}

const deleteCart = (id: number) => {
  cartStore.delete(id)
}

const changeQuantity = (quantity: number, skuId: number) => {
  cartStore.updateCart(skuId, quantity)
}

const changeChecked = (skuId: number) => {
  
  cartStore.updateCartChecked(skuId)
}

</script>

<style lang="less" scoped>

.cart {
  width: 1200px;
  margin: 0 auto;
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
      & > div {
        float: left;
      }
      .cart-th1 {
        width: 25%;
        input {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .cart-th2 {
        width: 25%;
      }
      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }
    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        & > li {
          float: left;
        }
        .cart-list-con1 {
          width: 4.1667%;
        }
        .cart-list-con2 {
          width: 25%;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }
          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con3 {
          width: 20.8333%;
          .item-txt {
            text-align: center;
          }
        }
        .cart-list-con4 {
          width: 12.5%;
        }
        .cart-list-con5 {
          width: 12.5%;
        }
        .cart-list-con6 {
          width: 12.5%;
          .sum {
            font-size: 16px;
          }
        }
        .cart-list-con7 {
          width: 12.5%;
          a {
            color: #666;
          }
        }
      }
    }
  }
  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;
    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;
      span {
        vertical-align: middle;
      }
      input {
        vertical-align: middle;
      }
    }
    .option {
      padding: 10px;
      overflow: hidden;
      float: left;
      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }
    .money-box {
      float: right;
      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }
      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;
        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }
      .sumbtn {
        float: right;
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>