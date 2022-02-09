<template>
  <type-nav :sort-hidden="false" />

  <list-container />

  <today-recommend />

  <rank />

  <like />

  <floor v-for="(item, index) in floorList" :key="index" :data="item" />

  <brand />

</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

import ListContainer from '@/views/home/list-container/ListContainer.vue'
import TodayRecommend from '@/views/home/today-recommend/TodayRecommend.vue'
import Rank from '@/views/home/rank/Rank.vue';
import Like from '@/views/home/like/Like.vue';
import Floor from '@/views/home/floor/Floor.vue';
import Brand from '@/views/home/brand/Brand.vue';

import { reqHomeFloor } from '@/api'
import { FloorData } from '@/types/home'

const floorList= reactive(new Array<FloorData>())

onMounted(async () => {
  floorList.push(...(await reqHomeFloor()).data as FloorData[])
})


/*
fetch('/mock/home/floor').then(res => res.json()).then(data => {
  console.log(data)
}) 
*/

</script>

<style scoped>
</style>