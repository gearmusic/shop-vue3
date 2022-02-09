<template>
  <a href="#" class="mins" @click.prevent="increaseQuantity(-1)">-</a>
    <input autocomplete="off" type="text" :value="quantity" class="itxt" @input="inputValue" ref="refQuantity" />
    <input type="hidden"  />
  <a href="#" class="plus" @click.prevent="increaseQuantity(1)">+</a>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const refQuantity = ref({} as HTMLInputElement) 

const props = defineProps<{
  quantity: number,
  skuId: number
}>()

const emit = defineEmits<{
  (e: 'changeQuantity', quantity: number, id: number): void
}>() 

const increaseQuantity = (increament: number) => {
  let val = props.quantity + increament
  if(val > 0 && val < 100) {
    emit('changeQuantity', increament ,props.skuId)
  }

  refQuantity.value.value = props.quantity + '' 
}

const inputValue = (e: Event) => {
  let val = (e.target as HTMLInputElement).value
  
  if(val.replace(/[^\d]/g, '') === val) {
    increaseQuantity(parseInt(val) - props.quantity)
  } else {
    (e.target as HTMLInputElement).value = props.quantity + ''
  }
}

</script>

<style lang="less" scoped>


.mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}

</style>