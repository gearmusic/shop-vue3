<template>
  <type-nav :sort-hidden="true" />

  <!-- 项目的最外层 -->
  <div class="outer">

    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <BreadCumb />

        <!--selector-->
        <selector :trademarks="searchStore.trademarks!" :attrs="searchStore.attrs!"  />
        
        <!--details-->
        <div class="details clearfix">

          <SuiNavbar />

          <GoodsList :goods-list="searchStore.goodsList || []" />

          <Pagination :total-count="searchStore.pageInfo.total" :page-size="searchStore.pageInfo.pageSize" :current-page="searchStore.pageInfo.pageNo" @page-change="pageChange" />

        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import BreadCumb from '@/views/search/bread-cumb/BreadCumb.vue'
import Selector from '@/views/search/selector/Selector.vue'

import Pagination from '@/components/pagination/Pagination.vue'

import SuiNavbar from '@/views/search/sui-navbar/SuiNavbar.vue'
import GoodsList from '@/views/search/goods-list/GoodsList.vue'

import useSearchStore from '@/store/search'

const searchStore = useSearchStore()

const pageChange = (pageNum: number) => {
  searchStore.updatePageNum(pageNum)
}

</script>

<style lang="less" scoped>
.outer {

  .main {
    margin: 10px 0;
    .py-container {
      width: 1200px;
      margin: 0 auto;

      .details {
        margin-bottom: 5px;

      }
    }
  }


}

</style>