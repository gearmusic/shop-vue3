<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">
            请您在提交订单
            <em class="orange time">4小时</em>之内完成支付，超时订单会自动取消。订单号：
            <em>{{ Object.keys(payInfo).length > 0 && payInfo.orderId }}</em>
          </span>
          <span class="fr">
            <em class="lead">应付金额：</em>
            <em class="orange money">￥{{ Object.keys(payInfo).length > 0 && payInfo.totalFee }}</em>
          </span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>支付二维码：扫了付0.01元给学堂</h4>
        <ol>
          <li>
            <QrcodeVue :value="payInfo.codeUrl" :size="420"></QrcodeVue>
          </li>

        </ol>

      </div>
      <div class="checkout-steps">
        <div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li>
              <img src="./images/pay2.jpg" />
            </li>
            <li>
              <img src="./images/pay3.jpg" />
            </li>
          </ul>
        </div>
        <div class="hr"></div>

        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付网银</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li>
                <img src="./images/pay10.jpg" />
              </li>
              <li>
                <img src="./images/pay11.jpg" />
              </li>
              <li>
                <img src="./images/pay12.jpg" />
              </li>
              <li>
                <img src="./images/pay13.jpg" />
              </li>
              <li>
                <img src="./images/pay14.jpg" />
              </li>
              <li>
                <img src="./images/pay15.jpg" />
              </li>
              <li>
                <img src="./images/pay16.jpg" />
              </li>
              <li>
                <img src="./images/pay17.jpg" />
              </li>
              <li>
                <img src="./images/pay18.jpg" />
              </li>
              <li>
                <img src="./images/pay19.jpg" />
              </li>
              <li>
                <img src="./images/pay20.jpg" />
              </li>
              <li>
                <img src="./images/pay21.jpg" />
              </li>
              <li>
                <img src="./images/pay22.jpg" />
              </li>
            </ul>
          </div>
        </div>
        <div class="hr"></div>

        <div class="otherpay">
          <div class="step-tit">
            <h5>其他支付方式</h5>
          </div>
          <div class="step-cont">
            <span>
              <a href="weixinpay.html" target="_blank">微信支付</a>
            </span>
            <span>中国银联</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { reqPayInfo, reqOrderState } from '@/api'


interface PayInfo{
  codeUrl: string,
  orderId: number,
  totalFee: number,
  resultCode: string
}

const props = defineProps<{
  orderId: number
}>()

const payInfo = reactive({} as PayInfo)

const timerId = ref(0)

const router = useRouter()

onMounted(async () => {
  Object.assign(payInfo, (await reqPayInfo(props.orderId)).data as PayInfo)

  timerId.value = window.setInterval(async () => {

    if(((await reqOrderState(props.orderId)).data as { code: number }).code === 200) {
      window.clearInterval(timerId.value)
      router.push({ name: 'pay-success' })
    }

  }, 1000)

})

onUnmounted(async () => {
  window.clearInterval(timerId.value)
})

</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;
  .pay-container {
    margin: 0 auto;
    width: 1200px;
    a:hover {
      color: #4cb9fc;
    }
    .orange {
      color: #e1251b;
    }
    .money {
      font-size: 18px;
    }
    .zfb {
      color: #e1251b;
      font-weight: 700;
    }
    .checkout-tit {
      padding: 10px;
      .tit-txt {
        font-size: 14px;
        line-height: 21px;
        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(images/icons.png) no-repeat 0 0;
        }
        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
        }
      }
      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;
        .fl {
          float: left;
        }
        .fr {
          float: right;
          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }
    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;
      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }
      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }
      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }
    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;
      .hr {
        height: 1px;
        background-color: #ddd;
      }
      .step-tit {
        line-height: 36px;
        margin: 15px 0;
      }
      .step-cont {
        margin: 0 10px 12px 20px;
        ul {
          font-size: 0;
          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
          }
        }
      }
    }
    .submit {
      text-align: center;
      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>