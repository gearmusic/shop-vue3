<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="showSort">
          <div class="all-sort-list2" @click.stop="goSearch">
            <div v-for="(item, index0) in categoryList" :key="item.categoryId" class="item" @mouseover="categoryChange(index0)" :class="{ cur: index0 === curType0Index }">
              <h3>
                <a :data-category-name="item.categoryName" :data-category1-id="item.categoryId" >{{ item.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{ display: curType0Index === index0 ? 'block' : 'none' }">
                <div v-for="itemChild in item.categoryChild" :key="itemChild.categoryId" class="subitem">
                  <dl class="fore">
                    <dt>
                      <a :data-category-name="itemChild.categoryName" :data-category2-id="itemChild.categoryId">{{ itemChild.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="itemChildChild in itemChild.categoryChild" :key="itemChildChild.categoryId">
                        <a :data-category-name="itemChildChild.categoryName" :data-category3-id="itemChildChild.categoryId">{{ itemChildChild.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useDebounceRef } from '@/libs/utils'

import useCategoryStore from '@/store/category'
import useSearchStore from '@/store/search'

const props = defineProps<{
  sortHidden: {
    type: Boolean,
    required: true
  }
}>()

//type store的载入和暴露
const categoryStore = useCategoryStore()
const categoryList = computed(() => categoryStore.categoryList)

const curType0Index = useDebounceRef<number>(-1, 200)

const categoryChange = (index0: number) => {
  curType0Index.value = index0
}

const router = useRouter()

const goSearch = (event: Event) => {
  
  let element: HTMLElement = event.target as HTMLElement
  const searchStore = useSearchStore()

  const categoryId = Object.assign({ category1Id: '', category2Id: '', category3Id: '' }, element.dataset)
  searchStore.updateParam(categoryId)

  router.push({name: 'search'})

  curType0Index.value = -1

  /*
  const { categoryname,category0id, category1id, category2id  } = element.dataset

  if(categoryname) {
    let location: RouteLocationRaw = { 
      name: 'search', 
      params: route.params || undefined,
      query: { categoryname, category0id,  category1id, category2id }}

    router.push(location)
  }
  */
}

const showSort = ref(true)

const mouseLeave = () => {
  curType0Index.value = -1
  props.sortHidden && (showSort.value = false)

}

const mouseEnter = () => {
  props.sortHidden && (showSort.value = true)
}

onMounted(() => {

  showSort.value = !props.sortHidden

  
})

</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background-color: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background-color: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                
                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding:0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }                
              }
            }
          }
         
        }

        .cur {
          background: skyblue;
        }


      }

    }

    .sort-enter-from {
      height: 0;
      opacity: 0;
    }

    .sort-enter-to {
      height: 461px;
      opacity: 1;
    }

    .sort-enter-active {
      transition: all 400ms linear;
    }
  }
}

</style>