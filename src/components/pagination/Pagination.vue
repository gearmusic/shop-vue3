<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :readonly="props.currentPage === 1 ? false : 'readonly'" :class="{ disabled: props.currentPage === 1 }" @click.prevent="pageChange(props.currentPage - 1)">
          <a href="#">«上一页</a>
        </li>
        <li class="dotted" v-show="pageNums[0] > 5">
          <span @click="pageChange(pageNums[0] - 1)">...</span>
        </li>

        <li v-for="item in pageNums" :class="{ active : item === props.currentPage }" @click.prevent="pageChange(item)">
          <a href="#">{{ item }}</a>
        </li>

        <li class="dotted" v-show="pageNums[pageNums.length - 1] < totalPageCount">
          <span @click="pageChange(pageNums[pageNums.length - 1] + 1)">...</span>
        </li>
        <li class="next" :readonly="props.currentPage >= totalPageCount ? false : 'readonly'" :class="{ disabled: props.currentPage >= totalPageCount }" @click.prevent="pageChange(props.currentPage + 1)">
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div>
        <span>共{{ totalCount }}条 / {{ totalPageCount }}页</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps<{
  totalCount: number,
  currentPage: number,
  pageSize: number
}> ()

const totalPageCount = computed(() => props.totalCount === 0 ? 1 : (props.totalCount / props.pageSize === 0 ? props.totalCount / props.pageSize : Math.ceil(props.totalCount / props.pageSize)))

const pageNums = computed(() => {
  const nums: number[] = []
  if(totalPageCount.value < 5) {
    for(let i = 1; i <= totalPageCount.value; i++) {
      nums.push(i)
    }
  } else if(props.currentPage % 5 === 0) {
    for(let i = 1; i <= 5; i++) {
      nums.push(props.currentPage - 5 + i)
    }
  } else if(totalPageCount.value - 4 <= props.currentPage) {
    for(let i = totalPageCount.value - 4; i <= totalPageCount.value; i++) {
      nums.push(i)
    }
  } else {
    for(let i = 1; i <= 5; i++) {
      nums.push(props.currentPage - props.currentPage % 5 + i)
    }
  }

  return nums
})

const emit = defineEmits<{
  (e: 'pageChange', pageNum: number): void
}
>()

const pageChange = (pageNum: number) => {

  emit('pageChange', pageNum)
}

</script>

<style lang="less" scoped>

  .page {
    width: 820px;
    height: 66px;
    overflow: hidden;
    float: right;
    .sui-pagination {
      margin: 18px 0;
      ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        width: 550px;
        float: left;
        li {
          line-height: 18px;
          display: inline-block;
          a {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid #e0e9ee;
            margin-left: -1px;
            font-size: 14px;
            padding: 9px 18px;
            color: #333;
          }
          &.active {
            a {
              background-color: #e1251b;
              color: #fff;
              border-color: #fff;
              cursor: default;
            }
          }
          &.prev {
            a {
              background-color: #fafafa;
            }
          }
          &.disabled {
            a {
              color: #999;
              cursor: default;
            }
          }
          &.dotted {
            span {
              margin-left: -1px;
              position: relative;
              float: left;
              line-height: 18px;
              text-decoration: none;
              background-color: #fff;
              font-size: 14px;
              border: 0;
              padding: 9px 18px;
              color: #333;
              border: 1px solid #e0e9ee;
              cursor: pointer;
            }
          }
          &.next {
            a {
              background-color: #fafafa;
            }
          }
        }
      }
      div {
        color: #333;
        font-size: 14px;
        float: right;
        width: 241px;
      }
    }
  }

</style>