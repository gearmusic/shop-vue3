<template>
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">

      <li v-show="categoryName.hidden" class="with-x">
        {{ categoryName.text }}
        <i @click="clearParams(categoryName)">×</i>
      </li>

      <li v-show="keyword.hidden" class="with-x">
        {{ keyword.text }}
        <i @click="clearParams(keyword)">×</i>
      </li>

      <li v-show="trademark.hidden" class="with-x">
        {{ trademark.text ? trademark.text.split(':')[1] : '' }}
        <i @click="clearParams(trademark)">×</i>
      </li>      

      <li v-for="(item, index) in _props" class="with-x">
        {{ item.text ? item.text.split(':')[1] : '' }}
        <i @click="clearParams(item)">×</i>
      </li>    

    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import useSearchStore from '@/store/search'

interface Schema {
  name: string
  text: string
  hidden: boolean
}

const searchStore = useSearchStore()

const categoryName = computed(() => {
  return {
    name: 'categoryName',
    text: searchStore.params.categoryName,
    hidden: searchStore.params.categoryName !== ''
  } as Schema
})

const keyword = computed(() => {
  return {
    name: 'keyword',
    text: searchStore.params.keyword,
    hidden: searchStore.params.keyword !== ''
  } as Schema
})

const trademark = computed(() => {
  return {
    name: 'trademark',
    text: searchStore.params.trademark,
    hidden: searchStore.params.trademark !== ''
  } as Schema
})

const _props = computed(() => {
  return searchStore.params.props.map(m => {
    return {
      name: 'props',
      text: m,
      hidden: false
    } as Schema
  })
})

const clearParams = (obj: Schema) => {
  if(obj.name === 'categoryName'){
    searchStore.updateParam({ category1Id: '', category2Id: '', category3Id: '', categoryName: '' })
  } else if (obj.name === 'props') {
    searchStore.deleteParamProps(obj.text)
  }
  else {
    searchStore.updateParamAttr({ name: obj.name, value: '' })
  }
}

</script>

<style lang="less" scoped>

.bread {
  margin-bottom: 5px;
  overflow: hidden;
  .sui-breadcrumb {
    padding: 3px 15px;
    margin: 0;
    font-weight: 400;
    border-radius: 3px;
    float: left;
    li {
      display: inline-block;
      line-height: 18px;
      a {
        color: #666;
        text-decoration: none;
        &:hover {
          color: #4cb9fc;
        }
      }
    }
  }
  .sui-tag {
    margin-top: -5px;
    list-style: none;
    font-size: 0;
    line-height: 0;
    padding: 5px 0 0;
    margin-bottom: 18px;
    float: left;
    .with-x {
      font-size: 12px;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      color: #000;
      background: #f7f7f7;
      padding: 0 7px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dedede;
      white-space: nowrap;
      transition: color 400ms;
      cursor: pointer;
      i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      &:hover {
        color: #28a3ef;
      }
    }
  }
}

</style>