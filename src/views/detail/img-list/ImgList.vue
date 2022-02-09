<template>
<div>
  <swiper
    class="specScroll"
    :modules="modules"
    :slides-per-view="4"
    :space-between="5"
    :pagination="true"
  >
      <swiper-slide 
        @click="thumbClick(item.id)" 
        v-for="item in skuImageList" 
        :key="item.id" 
        >
        <img :src="item.imgUrl" alt="" :class="{active: currentImgId === item.id}" />
      </swiper-slide>
  </swiper>
</div>

</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import mitt from '@/libs/bus'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SkuImage } from '@/types/detail'

const props = defineProps<{
  skuImageList: Array<SkuImage>
}>()

const modules = [ Pagination, Navigation ]

const currentImgId = ref(0)

watch(props, () => {
  if(props.skuImageList.length > 0) {
    currentImgId.value = props.skuImageList[0].id
  }
})

const thumbClick = (thumbImgId: number) => {
  currentImgId.value = thumbImgId
  mitt.emit('thumbImgClick', thumbImgId)
}

</script>

<style lang="less" scoped>

.specScroll {
  margin-top: 5px;
  width: 400px;
  height: 90px;
  overflow: hidden;
  display: block;
  text-align: center;

  img {
    float: left;
    border: 1px solid #ccc;
    width: 85px;
    height: 90px;
    margin-right: 10px;
    box-sizing: border-box;
    &.active {
      border: 2px solid #ff0000;
    }   
  }


}
</style>