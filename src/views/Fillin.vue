<template>
  <div class="fill-main">
    <Header title='填写订单'/>
    <p class="fill-title">[爱自驾]{{product.title}}</p> 
    <Box title='线路信息'> 
      <p>自驾团名称：{{product.title}}</p>
      <p>出游日期：{{signup.calendar}} <button @click="linksignup" class="modify">修改</button></p>
      <p>出游人数：{{signup.num}}成人，{{signup.num2}}儿童</p>
      <p>房间<el-input-number class="input-number"  v-model="num3"   size="small" :min="0" :max="10" label="描述文字"></el-input-number>（两人间）</p>
      <p class="order-room"> <span class="room-select">是否同意拼房:</span> <span><el-radio v-model="radio" label="1">同意</el-radio>
        <el-radio v-model="radio" label="2">不同意，愿意支付房差￥3500</el-radio></span> </p>
      </Box> 


       <div class="fill-box">
       <el-tabs v-model="activeName">
       <el-tab-pane label="费用说明" name="first"><div> 
            <h4>费用包含</h4>
            <p>*+7x24小时优秀中/英双语自驾向导服务（国内出发，全程陪同）；
             <br>*+国内往返美国经济舱机票、燃油附加税、机票税；
             <br>*+包含好莱坞环球影城+17英里海岸门票；
             <br>*+美国当地钻酒店住宿；
             <br>*+美国当地钻酒店住宿1；</p>
            </div> </el-tab-pane>
            <el-tab-pane label="退订规则" name="second"><div> 
            <h4>退订规则</h4>
            <p>*+7x24小时优秀中/英双语自驾向导服务（国内出发，全程陪同）2；
             <br>*+国内往返美国经济舱机票、燃油附加税、机票税2；
             <br>*+包含好莱坞环球影城+17英里海岸门票2；
             <br>*+美国当地钻酒店住宿2；
             <br>*+美国当地钻酒店住宿2；</p>
            </div> </el-tab-pane>
           </el-tabs>
      </div>


      <Box  title='联系人信息'>
        <p class="under">姓名：<input type="text" v-model="value" placeholder="必填"></p>
        <p class="under radio">性别  <el-radio v-model="radio1" label="男">男</el-radio>
        <el-radio v-model="radio1" label="女">女</el-radio></p>
        <p class="under">手机号码：<input  v-model="value2" type="text"></p>
        <p class="under">邮箱：<input  v-model="value3" type="text" placeholder="必填，接受合同信息"></p>
      </Box>

      <Box  title='游客信息' add='常用游客'>
        <p class="under">姓名： <input  v-model="value4" type="text"></p>
        <p class="under">证件号码：<input  v-model="value5" type="text"></p>
        <div  v-for="item in addpeople" :key="item.id">
          <p class="under">姓名： <input  v-model="item.name" type="text"></p>
        <p class="under">证件号码：<input  v-model="item.number" type="text"></p>
        </div>
      </Box>

      <Box  title='保险'>
        <div class="checked"><el-checkbox :checked='safe.safe1' @change="checked1"></el-checkbox>平安爱自驾长线保险 经典型 2份 <span>￥177/份</span></div>
         <div class="checked"><el-checkbox :checked='safe.safe2'  @change="checked2"></el-checkbox>平安爱自驾长线保险 经典型 2份 <span>￥177/份</span></div>
      </Box>

      <div class="fill-confirm">
        <input type="checkbox" v-model="checked" class="fill-confirm-checkbox"><span>已阅读并同意自驾游协议</span>
      </div>

      <div class="fill-footer">
        <span>总费用￥{{cost}}</span> <a><span class="confirm-fill" @click="addProducts({route:{num:signup.num,num2:signup.num2,calendar:signup.calendar,roomnum:num3,isroom:radio},information:{ name:value, sex:radio1,phone:value2,email:value3}, tourist:{id:new Date().getTime(),name:value4,number:value5}})">提交订单</span></a>  
      </div>
  </div>
</template>
s
<script>
import Header from './Header'
import {mapState,mapMutations,mapGetters} from 'vuex'
import Box from './Box'
import {Message} from 'element-ui'
export default {
    name:"Fillin",
    data(){
      return{
         radio: '1',
         radio1: '男',
         activeName: 'first',
         signupmsg:null,
         num3:1,
         value:'',
         value2:'',
         value3:'',
         value4:'',
         value5:'',
         checked:''    
      }
    },
    components:{
      Header,
      Box
    },
    computed:{
     ...mapState({
       products:state=>state.ProductModule.product,
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
      ...mapMutations(['addProduct','checked1','checked2']),
      linksignup(){
       this.$router.push(`/product/${this.product.id}/signup`)
      },
      addProducts(paylode){
        if(!this.value || !this.value2 || !this.value3 || !this.value4 || !this.value5){
           Message('请填写完整信息');
        }
        else if(!this.checked){
            Message('请同意自驾游协议');
        }
        else{
          this.$router.push(`/product/${this.product.id}/confirm`)
          this.addProduct(paylode)
        }
        
      }
    }
}
</script>

<style lang='scss'>
.fill-main{
  background-color: #f5f5f5;
  padding-bottom: 100px;
  .fill-title{
    height: 50px;
    margin: 0;
    line-height: 50px;
    padding-left: 15px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .fill-box{
      width: 80%;
     margin: 0 auto; 
     padding:0 5%;  
     border-radius: 8px;
     background-color: #fff;
     margin-bottom: 10px;
     background-image: url('../img/order-detail-bgc.png');
     background-repeat: no-repeat;
     background-position: 12px 12px;
     background-size: 2px 18px;
     font-size: 14px;
     line-height: 30px;
     h4{
       margin: 0;
     }
  }
  .fill-footer{
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
    .confirm-fill{
    color: #fff;
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
.fill-confirm{
  text-align: center;
  .fill-confirm-checkbox{
    margin-right: 6px;
  }
}

</style>