<template>

  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination ="{ clickable: true }"
    :navigation = "true"
  >
    <swiper-slide v-for="(item, index) in imgUrls" :key="index">
      <img :src="item" alt="" />
    </swiper-slide>
  </swiper>
  
</template>

<script lang="ts" setup>
import { reactive,defineProps } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps<{
  imgUrls: Array<string>
}>()

const modules = reactive([ Pagination, Navigation ])

</script>

<style lang="less" scoped>

</style>