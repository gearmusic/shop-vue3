import { MockMethod } from 'vite-plugin-mock'

import bannerJSON from '@/mock/home/banner.json'
import floorJSON from '@/mock/home/floor.json'

export default [
  {
    url: '/mock/home/banner',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: bannerJSON,
      }
    }
  },
  {
    url: '/mock/home/floor',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: floorJSON,
      }
    }
  }

] as MockMethod[]