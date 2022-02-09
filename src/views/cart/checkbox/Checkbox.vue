<template>
  <input type="checkbox" v-model="checked" @click="emit('changeChecked', skuId)" />
</template>

<script lang="ts" setup>

const props = defineProps<{
  checked: boolean,
  skuId: number
}>()

const emit = defineEmits<{
  (e: 'changeChecked', skuId: number): void
}>() 

</script>

<style lang="less" scoped>

</style>