<template>
  <div class="preview">
    <div class="jqzoom" @click="mouseMoveHandler" @mouseleave="maxShow=false" @mouseenter="maxShow=true">
      <img :src="skuImageList.find(m => m.id === currentSkuImageId)?.imgUrl || ''" />
      <div class="mask" ref="mask" :style="{left: left + 'px', top: top + 'px'}"></div>
    </div>
    <div v-show="maxShow" class="maxbox">
      <img ref="maxImg" :src="skuImageList.find(m => m.id === currentSkuImageId)?.imgUrl || ''" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, watch, ref, reactive } from 'vue'

import mitt from '@/libs/bus'

import { SkuImage } from '@/types/detail'

const props = defineProps<{
  skuImageList: Array<SkuImage>
}>()

const currentSkuImageId = ref(0)

watch(props, () => {
  if(props.skuImageList.length > 0) {
    currentSkuImageId.value = props.skuImageList[0].id
  }
})

const left = ref(0)
const top = ref(0)

const maxShow = ref(false)
const maxImg = ref({} as HTMLElement)

const mouseMoveHandler = (event: MouseEvent) => {
    
  let x = event.offsetX
  let y = event.offsetY
  if(x > 0 && y > 0) {
    left.value = x
    top.value = y

    maxImg.value.style.left = `${-2*x}px`
    maxImg.value.style.top = `${-2*y}px`
  }
}

onMounted(() => {
  mitt.on('thumbImgClick', thumbImgId => {
    currentSkuImageId.value = thumbImgId as number
  }) 
})

onUnmounted(() => {
  mitt.off('thumbImgClick')
})

</script>

<style lang="less" scoped>

.preview {
  width: 400px;
  height: 400px;
  border: 1px solid #dfdfdf;
  .jqzoom {
    //cursor: pointer;
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
    .mask {
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #ddd;
    }
  }
  .maxbox {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 405px;
    top: 0px;
    overflow: hidden;
    z-index: 20;
    border: 1px solid #ddd;
    background-color: #fff;
    img {
      position: absolute;
      width: 800px;
      height: 800px;
      display: block;
    }
  }
}
</style>