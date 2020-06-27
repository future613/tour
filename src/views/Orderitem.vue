<template>
  <div class="main">
    <Header title='订单详情'/>
      <p class="title">{{order.title}}</p>
      <div class="box">
       <h3>订单信息</h3>
        <p><span>订单编号：</span>{{order.order.number}} </p>
        <p><span>出发城市：</span> {{order.order.city}}</p>
        <p><span>出发时间：</span> {{order.order.setout}}</p>
        <p><span>归来时间：</span>{{order.order.setin}} </p>
        <p><span>出游人数：</span> {{order.order.people}}</p>
        <p><span>房间：</span>{{order.order.room}} </p>
        <p><span>订单状态：</span>{{order.order.state}} </p>
      </div>
      <div class="box">
          <h3>费用详情</h3>
          <div class="cost"><span>出游团费：￥{{order.cost.groupconst}}</span><span>保险费用：￥{{order.cost.safeconst}}</span></div>
          <div class="const-item">
          <p><span>订单总额：</span>￥{{order.cost.allconst}} </p>
        <p><span>待付金额：</span>￥{{order.cost.notpayment}} </p></div>  
      </div>
      <div class="box">
          <h3>保险方案</h3>
         <p>{{order.safe.safeone}} </p>
         <p>{{order.safe.safetwo}} </p>
        <p>{{order.safe.safethree}} </p>
      </div>
      <div class="box">
         <h3>联系人信息</h3> 
         <p>{{order.information.name}} </p>
         <p>{{order.information.phone}} </p>
         <p>{{order.information.email}} </p>
       </div>
      <div class="box">
          <h3>游客信息</h3>
          <div class="tourist" v-for="item in order.tourist" :key="item.id">
          <p>姓名：{{item.name}} </p>
          <p>证件号：{{item.myid}} </p> 
           <p>电话：{{item.phone}} </p>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../views/Header'
export default {
    name:'Orderitem',
    components:{
    Header
    },
    data(){
     return {
     }
    },
    computed:{
        ...mapState({
            orders:state=>state.MineModule.MineProduct
        }),
        order(){
          return this.orders.filter(item=>item.id === this.$route.params.id)[0].details
        }
    }
 }
</script>

<style lang='scss' scoped>
.main{
  .title{
    padding: 10px 20px;
    font-size: 14px;
    color: #444;
    border-bottom: 1px solid #ccc;
  }
  .box{
     padding:0 30px;
     padding-bottom: 20px;
     border-bottom: 1px solid #ccc;
     background-image: url('../img/order-detail-bgc.png');
     background-repeat: no-repeat;
     background-position: 20px 2px;
     background-size: 2px 18px;
  .cost{
     display: flex;
     justify-content: space-between;
      padding-bottom: 10px;
     border-bottom: 1px solid #ccc;
  }
  .const-item{
     text-align: right;
  }
  .tourist{
    border-bottom: 1px solid #ccc;
  }     
    .tourist:last-child{
    border-bottom: none;
  }
     h3{
       color: #222;
       font-size: 16px;
     }
  }
}

</style>