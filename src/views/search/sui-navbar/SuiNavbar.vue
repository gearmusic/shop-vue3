<template>
  <div class="sui-navbar">
    <div class="navbar-inner filter">
      <ul class="sui-nav">
        <li :class="{active: curIndex === 0 }">
          <a v-show="curSort[0] === '1:asc'" @click.prevent="navClick(0, '1:desc')" href="#">综合⬇</a>
          <a v-show="curSort[0] === '1:desc'" @click.prevent="navClick(0, '1:asc')" href="#">综合⬆</a>
        </li>        
        <li :class="{active: curIndex === 1 }">
          <a v-show="curSort[1] === '2:asc'" @click.prevent="navClick(1, '2:desc')" href="#">价格⬇</a>
          <a v-show="curSort[1] === '2:desc'" @click.prevent="navClick(1, '2:asc')" href="#">价格⬆</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'

import useSearchStore from '@/store/search'

  const curIndex = ref(0)
  const curSort = reactive(['1:asc','2:asc'])

  const searchStore = useSearchStore()


  const navClick = (index: number, order: string) => {
    curIndex.value = index
    curSort[index] = order

    searchStore.updateParamOrder(order)
  } 
</script>

<style lang="less" scoped>

.sui-navbar {
  overflow: visible;
  margin-bottom: 0;
  .filter {
    min-height: 40px;
    padding-right: 20px;
    background: #fbfbfb;
    border: 1px solid #e2e2e2;
    padding-left: 0;
    border-radius: 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
    .sui-nav {
      position: relative;
      left: 0;
      display: block;
      float: left;
      margin: 0 10px 0 0;
      li {
        float: left;
        line-height: 18px;
        a {
          display: block;
          cursor: pointer;
          padding: 11px 15px;
          color: #777;
          text-decoration: none;
        }
        &.active {
          a {
            background: #e1251b;
            color: #fff;
          }
        }
      }
    }
  }
}

</style>