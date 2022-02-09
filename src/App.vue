<template>

  <Header></Header>

  <router-view></router-view>
  
  <Footer v-show='$route.meta.showFooter'></Footer>

</template>

<script setup lang="ts">

import { onMounted } from 'vue';

import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'


import useLoginStore from '@/store/login'
import useCategoryStore from '@/store/category'
import useSearchStore from '@/store/search'
import useCartStore from '@/store/cart'

const loginStore = useLoginStore()
const categoryStore = useCategoryStore()
const searchStore = useSearchStore()
const cartStore = useCartStore()

loginStore.load()
searchStore.updatePageData()
cartStore.loadList()

onMounted (async () => {
  //type store的初始数据载入
  await categoryStore.loadList()
})

</script>

<style scoped>

</style>
