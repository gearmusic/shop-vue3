<template>
  <div class="chooseArea">
    <div class="choosed"></div>
    <dl v-for="item in skuSaleAttrList" :key="item.id">
      <dt class="title">{{ item.saleAttrName }}</dt>
      <dd
        v-for="itemChild in item.spuSaleAttrValueList" 
        :key="itemChild.id" @click="addSaleAttr(item.id, itemChild.id)" 
        :class="{active: attrValueIds.indexOf(itemChild.id) >= 0}"
      >
        {{ itemChild.saleAttrValueName }}
      </dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>

import { reactive, computed, watch } from 'vue';

import { SpuSaleAttr } from '@/types/detail' 

const props = defineProps<{
  skuSaleAttrList: Array<SpuSaleAttr>
}>()

interface SaleInfo {
  attrs: {
    nameId: number,
    valueId: number
  } []
}

const saleInfo = reactive<SaleInfo>({
  attrs: []
})

watch(props, () => {
  if(props.skuSaleAttrList.length > 0) {
    saleInfo.attrs.push(
      ...props.skuSaleAttrList.map(m => {
        return {
          nameId: m.id,
          valueId: m.spuSaleAttrValueList.find(n => n.isChecked == "1")!.id
        }
      })
    )
  }
})


const attrValueIds = computed(() => saleInfo.attrs.map(m => m.valueId))

const addSaleAttr = (attrNameId: number, attrValueId: number) => {
  saleInfo.attrs.filter(m => m.nameId === attrNameId).length === 0 && saleInfo.attrs.push({ nameId: attrNameId, valueId: attrValueId })
  saleInfo.attrs.filter(m => m.nameId === attrNameId).length > 0 && (saleInfo.attrs[saleInfo.attrs.findIndex(m => m.nameId === attrNameId)].valueId = attrValueId)
}


</script>

<style lang="less" scoped>
.chooseArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
  .choosed {
    mark {
      height: 30px;
      display: inline-block;
      line-height: 30px;
      background-color: snow;
      border: 1px solid #ddd;
      padding: 0 20px;
      margin-right: 20px;
      a {
        font-size: 12px;
        color: red;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  dl {
    overflow: hidden;
    margin: 13px 0;
    dt {
      margin-right: 15px;
      float: left;
    }
    dd {
      float: left;
      margin-right: 5px;
      color: #666;
      line-height: 24px;
      padding: 2px 14px;
      border-top: 1px solid #eee;
      border-right: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
      border-left: 1px solid #eee;

      &.active {
        color: #090;
        border: 1px solid #090;
      }

    }
    
  }
}

</style>