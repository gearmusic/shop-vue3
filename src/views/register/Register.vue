<template>
  <div class="register">
    <h3>注册新用户
      <span class="go">我有账号，去 <router-link to="/login" >登陆</router-link>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" v-model="phone" placeholder="请输入你的手机号" />
      <span class="error-msg">{{ phoneMsg }}</span>
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" readonly="true" v-model="code" placeholder="请输入验证码" />
      <button class="btnVal" :disabled="!(phoneMsg === '')" @click.prevent="getValCode">获取验证码</button>
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input type="password" v-model="password" placeholder="请输入你的登录密码" />
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input type="password" v-model="passwordVal" placeholder="请输入确认密码" />
       <span class="error-msg">{{ errorMsg }}</span>
    </div>
    <div class="btn">
      <button :disabled="!(errorMsg === '')" @click="registerUser">完成注册</button>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import useLoginStore from '@/store/login'

const phone = ref('')
const phoneMsg = ref('请输入正确的11位手机号码')
const code = ref('')
const password = ref('')
const passwordVal = ref('')
const errorMsg = ref('请输入大于6位的任意密码')

const router = useRouter()
const loginStore = useLoginStore()

watch(phone, (val: string) => {
  if((/^1[3456789]\d{9}$/).test(val)){
    phoneMsg.value = ''
  }else{
    phoneMsg.value = '请输入正确的11位手机号码'
  }
})

watchEffect(() => {
  if(password.value.length < 6) {
    return errorMsg.value = '请输入大于6位的任意密码'
  } 
  
  if(password.value !== passwordVal.value) {
    return errorMsg.value = '两次输入的密码不一致'
  } 
  
  if(code.value === '') {
    return errorMsg.value = '请获取有效的验证码'
  }
  
  return errorMsg.value = ''
})

const getValCode = async () => {
  if(phoneMsg.value === ''){
    code.value = await loginStore.getValCode(phone.value)
  }
}

const registerUser = async () => {
  if(errorMsg.value === '' && loginStore.register(phone.value, password.value, code.value)) {
    router.push({ name: 'login' })
  } else {
    alert('注册失败，请检查。')
  }
}

</script>

<style lang="less" scoped>

.register {
	width: 1200px;
	height: 445px;
	border: 1px solid rgb(223, 223, 223);
	margin: 0 auto;

	h3 {
		background: #ececec;
		margin: 0;
		padding: 6px 15px;
		color: #333;
		border-bottom: 1px solid #dfdfdf;
		font-size: 20.04px;
		line-height: 30.06px;

		span {
			font-size: 14px;
			float: right;

			a {
				color: #e1251b;
			}
		}
	}

	div:nth-of-type(1) {
		margin-top: 40px;
	}

	.content {
		padding-left: 390px;
		margin-bottom: 18px;
		position: relative;

		label {
			font-size: 14px;
			width: 96px;
			text-align: right;
			display: inline-block;
		}

		input {
			width: 270px;
			height: 38px;
			padding-left: 8px;
			box-sizing: border-box;
			margin-left: 5px;
			outline: none;
			border: 1px solid #999;
		}

		img {
			vertical-align: sub;
		}

		.error-msg {
			position: absolute;
			top: 100%;
			left: 495px;
			color: red;
		}
    .btnVal {
			width: 160px;
			height: 38px;
      margin-left: 10px;
    }

	}

	.controls {
		text-align: center;
		position: relative;

		input {
			vertical-align: middle;
		}

		.error-msg {
			position: absolute;
			top: 100%;
			left: 495px;
			color: red;
		}
	}

	.btn {
		text-align: center;
		line-height: 36px;
		margin: 17px 0 0 55px;

		button {
			outline: none;
			width: 270px;
			height: 36px;
			background: #e1251b;
			color: #fff !important;
			display: inline-block;
			font-size: 16px;
		}
	}
}

.copyright {
	width: 1200px;
	margin: 0 auto;
	text-align: center;
	line-height: 24px;

	ul {
		li {
			display: inline-block;
			border-right: 1px solid #e4e4e4;
			padding: 0 20px;
			margin: 15px 0;
		}
	}
}
</style>