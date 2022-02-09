import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './styles/base.css'


//注册库组件
import TypeNav from '@/components/type-nav/TypeNav.vue'
import Carousel from '@/components/carousel/Carousel.vue'

//创建pinia对象
const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.component('type-nav', TypeNav)
.component('carousel', Carousel)
.mount('#app')
