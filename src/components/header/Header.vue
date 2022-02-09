<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！{{ userName }}</p>
          <p v-if="isLogin">
            <a href="#" @click.prevent="clickLogout">退出登录</a>
          </p>
          <p v-if="!isLogin">
            <span>请</span>
            <router-link class="register" to="/login">登录</router-link >
            <router-link class="register" to="/register">免费注册</router-link >
          </p>
        </div>
        <div class="typeList">
          <router-link to="/my-order">我的订单</router-link>
          <router-link to="/cart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="尚品汇">
          <img src="/images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click.prevent="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';

import useLoginStore from '@/store/login'
import useSearchStore from '@/store/search'


const keyword = ref('')

const router = useRouter()

const searchStore = useSearchStore()
const loginStore = useLoginStore()
const userName = ref('')
const isLogin = ref(false)

watch(loginStore, () => {

  if(loginStore.loginInfo && Object.keys(loginStore.loginInfo).length > 0){
    isLogin.value = true
    userName.value = loginStore.loginInfo.name
  } else {
    isLogin.value = false
    userName.value = '游客'
  }

})

const goSearch = () => {
  searchStore.updateParam({ keyword: keyword.value })

  router.push({name: 'search'})
}

const clickLogout = () => {

  loginStore.logout()
}

</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-left: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }
    }
    
    .typeList {
      float: right;

      a {
        padding: 0 10px;

        & + a {
          border-left: 1px solid #b3aeae;
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    
    .logoArea {
      float: left;

      img {
        width: 175px;
        margin: 25px 45px;
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }

      }

    }

  }

}
</style>