<template>
  <div class="payment-main">
  <Header title='选择支付方式'/>
  <div class="payment-title">
      订单总额： ￥{{cost}}
  </div>
  <div class="payment-item">
      <li > <span>支付宝支付</span> <el-radio v-model="radio" label="1" ></el-radio></li>
      <li><span>微信支付</span> <el-radio v-model="radio" label="2"></el-radio></li>
      <li ><span>银联支付</span> <el-radio v-model="radio" label="3" ></el-radio></li>
  </div>
  <div class="payment-footer"> <span>总费用￥{{cost}}</span> <a @click="payment">付款</a></div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import Header from './Header'
import { Message } from 'element-ui'
export default {
components:{
    Header
},
data(){
    return{
        radio:''
    }
},
computed:{
    ...mapState({
         products:state=>state.ProductModule.product,
    }),
    ...mapGetters(['cost']),
    product(){
          return this.products.filter(item=>item.id === this.$route.params.id)[0]
        }
},
methods:{
payment(){
    if(this.radio){
     this.$router.push(`/product/${this.product.id}/sucess`) 
     this.radio === '1'?localStorage.setItem('payment','支付宝'): this.radio === '2'?localStorage.setItem('payment','微信'): this.radio === '3'?localStorage.setItem('payment','银联'):''  
    }
    else{
         Message('请选择付款方式');
    }    
},

}
}
</script>

<style lang='scss'>
.payment-main{
    background-color: #f5f5f5;
    .payment-title{
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        font-size: 16px;
        text-align: center;
        color:#f69a43;
        margin-bottom: 20px;
    }
    .payment-item{
        background-color: #fff;
        padding-top: 10px;
        li{
             display: flex;
             justify-content: space-between;
            width: 76%;
            margin: 0 auto;
            padding: 10px 0px 20px 14%;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;  
         .el-radio__label{
             display: none;
         }
         .el-radio__inner{
          width: 18px;
          height: 18px;
         }
        }
        li:first-child{
            background-image: url('../img/zhifubao.jpg');
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 40px 40px;

        }
        li:nth-child(2){
            background-image: url('../img/weixin.jpg');
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 40px 40px;   
        }
         li:nth-child(3){
            background-image: url('../img/yinlain.jpg');
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 40px 40px;
        }
    }
    .payment-footer{
    width: 86%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content:space-between;
    padding:5px 7%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    span{
      color: #f08211;
    }
    
    a{
      padding: 0px 32px;
      text-decoration: none;
      color: #fff;
      background-color: #50bbdb;
      border-radius: 8px;
    }
  }
}
</style>