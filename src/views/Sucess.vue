<template>
  <div>
  <Header title="支付详情" right='关闭' @add='add'/>
  <div class="sucess-title">支付成功</div>
  <div class="sucess-content">
      <div>
         <p> <span>游客姓名</span><span>{{information.name}}</span></p> 
         <p><span>自驾团名称</span><span>{{product.title}}</span></p> 
      </div>
      <div>
          <p> <span>支付方式</span><span>{{payment}}付款</span></p>
          <p> <span>交易订单</span><span>12245577864565699999999</span></p> 
         <p><span>交易时间</span><span>{{currenttime}}</span></p> 
      </div>
      <div>
         <p><span>支付金额</span><span>{{cost}}.00元</span></p> 
      </div>
  </div>
  <div class="sucess-footer">
      <p>感谢你订购爱自驾云南落地自驾行摄7天之旅，爱自驾预祝您旅途愉快！</p>
      <button @click="back">返回继续订票</button>
  </div>
  </div>
</template>

<script>
import moment from 'moment'
import {mapState,mapGetters} from 'vuex'
import Header from './Header'
export default {
    name:"Sucess",
    components:{
        Header,
        payment:''
    },
    created(){
    this.payment = localStorage.getItem('payment')
    },
    computed:{
    ...mapState({
         products:state=>state.ProductModule.product,
         information:state=>state.MineModule.Order.information
    }),
    ...mapGetters(['cost']),
     product(){
          return this.products.filter(item=>item.id === this.$route.params.id)[0]
        },
        currenttime(){
        return  moment().format('YYYY-MM-DD HH:mm:ss')
        }
      },
    methods:{
        back(){
            this.$router.push('/')
        },
        add(){
          this.$router.push('/')  
        }
    }

}
</script>

<style lang='scss'>
.sucess-title{
    text-align: center;
    color: #50bbdb;
    height: 60px;
    line-height: 60px;
    margin-bottom: 10px;
     border-bottom: 1px solid #ccc;
     background-image: url('../img/sucess.jpg');
     background-repeat: no-repeat;
     background-position: 30% center;
     background-size: 24px 24px;
}
.sucess-content{
width: 100%;
div{
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
p{
   display: flex;
    justify-content: space-between;
    margin:8px 0;  
}
   
}
}
.sucess-footer{
   padding: 10px 20px;
   background-color: #f5f5f5;  
   padding-bottom: 200px;
   button{
       display: block;
       width: 100%;
       border: 1px solid #ccc;
       outline: 0;
       color: #50bbdb;
        background-color: #f5f5f5; 
       font-size: 20px;
       text-align: center;
       height: 50px;
       line-height: 50px;
   }
}
</style>