<template>
  <div class="conPoin">
    <div class="conPoin">
      <a>{{ categoryView.category1Name }}</a>
      <a>{{ categoryView.category2Name }}</a>
      <a>{{ categoryView.category3Name }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CategoryView } from '@/types/detail'

defineProps<{
  categoryView: CategoryView
}>()

</script>

<style lang="less" scoped>

.conPoin {
  padding: 9px 15px 9px 0;
  & > a + a:before {
    content: "/\00a0";
    padding: 0 5px;
    color: #ccc;
  }
}
</style>