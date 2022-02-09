<template>
  <div class="cartWrap">
    <div class="controls">
      <input autocomplete="off" class="itxt" v-model="quantity" @input="inputValue" />
      <a href="###" class="plus" @click.prevent="upDateQuantity(0)">+</a>
      <a href="###" class="mins" @click.prevent="upDateQuantity(1)">-</a>
    </div>
    <div class="add">
      <a href="###" @click.prevent="addToCart" >加入购物车</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const quantity = ref(1)

const upDateQuantity = (lx: number) => {
  if(lx === 1 && quantity.value > 1){
    quantity.value --
  }
  else if(lx === 0 && quantity.value < 100) {
    quantity.value ++
  } 
}

const inputValue = (e: Event) => {
  let value = (e.target as HTMLInputElement).value
  if(value.replace(/[^\d]/g, '') === value) {
    let val = parseInt(value)
    if (val >= 100) {
      quantity.value = 99
    } else if (val < 1) {
      quantity.value = 1
    } else {
      quantity.value = val
    }
  } 
  else 
  {
    quantity.value = 1
  }
}

const emit = defineEmits<{
  (e: 'addToCart', quantity: number): void
}>()

const addToCart = () => {
  emit('addToCart', quantity.value)
}

</script>

<style lang="less" scoped>

.cartWrap {
  .controls {
    width: 48px;
    position: relative;
    float: left;
    margin-right: 15px;
    .itxt {
      width: 38px;
      height: 37px;
      border: 1px solid #ddd;
      color: #555;
      float: left;
      border-right: 0;
      text-align: center;
    }
    .plus,
    .mins {
      width: 15px;
      text-align: center;
      height: 17px;
      line-height: 17px;
      background: #f1f1f1;
      color: #666;
      position: absolute;
      right: -8px;
      border: 1px solid #ccc;
    }
    .mins {
      right: -8px;
      top: 19px;
      border-top: 0;
    }
    .plus {
      right: -8px;
    }
  }
  .add {
    float: left;
    a {
      background-color: #e1251b;
      padding: 0 25px;
      font-size: 16px;
      color: #fff;
      height: 36px;
      line-height: 36px;
      display: block;
    }
  }
}
</style>