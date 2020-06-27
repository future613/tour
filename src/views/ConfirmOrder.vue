<template>
  <div class="confirm-main">
    <Header title='确认订单'/>
    <p class="confirm-title">[爱自驾]{{product.title}}</p> 
    <Box title='线路信息'> 
      <p>自驾团名称：{{product.title}}</p>
      <p>出游日期：{{order.route.calendar}}</p>
      <p>出游人数：{{order.route.num}}成人，{{order.route.num2}}儿童</p>
      <p>房间: 2人间, {{order.route.isroom === '1'?'愿意拼房':'不拼房'}}</p>
      </Box> 
      <Box  title='联系人信息'>
        <p class="under">姓名：{{order.information.name}}</p>
        <p class="under radio">性别 {{order.information.sex}} </p>
        <p class="under">手机号码：{{order.information.phone}}</p>
        <p class="under">邮箱：{{order.information.email}}</p>
      </Box>
      <Box  title='游客信息' add='常用游客'>
        <div v-for="item in addpeople" :key="item.id">
           <p class="under people">{{item.name}}</p>
        </div>       
      </Box>
      <Box  title='保险'>
        <div class="checked"><el-checkbox :checked='safe.safe1' @change="checked1"></el-checkbox>平安爱自驾长线保险 经典型 2份 <span>￥177/份</span></div>
         <div class="checked"><el-checkbox :checked='safe.safe2' @change="checked2"></el-checkbox>平安爱自驾长线保险 经典型 2份 <span>￥177/份</span></div>
      </Box>
       <div class="fill-confirm">
        <span>已阅读并同意自驾游协议</span>
      </div>
      <div class="confirm-footer">
        <span>总费用￥{{cost}}</span> <router-link :to='`/product/${product.id}/payment`'>确认，去支付</router-link>
      </div>
  </div>
</template>

<script>
import Header from './Header'
import {mapState,mapGetters,mapMutations} from 'vuex'
import Box from './Box'
export default {
    name:"ConfirmOrder",
    data(){
      return{
          radio: '1',
          num10:6,
          activeName: 'first',
      }
    },
    components:{
      Header,
      Box
    },
    computed:{
     ...mapState({
       products:state=>state.ProductModule.product,
       order:state=>state.MineModule.Order,
       addpeople:state=>state.MineModule.Order.tourist,
       signup:state=>state.MineModule.Order.route,
       safe:state=>state.MineModule.Order.safe
     }),
     ...mapGetters(['cost']),
       product(){
          return this.products.filter(item=>item.id === this.$route.params.id)[0]
        }
    },
    methods:{
      ...mapMutations(['checked1','checked2']),
    }

}
</script>

<style lang='scss'>
.confirm-main{
  background-color: #f5f5f5;
  padding-bottom: 100px;
  .confirm-title{
    height: 50px;
    margin: 0;
    line-height: 50px;
    padding-left: 15px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  
  }
  .confirm-footer{
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
  .fill-confirm{
  text-align: center;
  .fill-confirm-checkbox{
    margin-right: 6px;
  }
}
</style>