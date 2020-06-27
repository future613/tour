<template>
  <div class="signup-main">
    <Header title='北京出发'/>
    <div class="calendar"><el-calendar>
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''"> <span  @click="handercalendar(data.day)">{{ data.day.split('-').slice(2).join('-') }}</span> <span> {{ time.includes(data.day.split('-').slice(2).join('-'))? '￥5890' : ''}} </span>  
    </p>
  </template>
</el-calendar></div> 
<div class="people-number">
   <div><span class="people-number-d">成人</span><span class="signup-price">￥5890</span>
    <el-input-number v-model="num"  @change="handleChange"  size="small" :min="0" :max="10" label="描述文字"></el-input-number></div>
  <div><span class="people-number-d">儿童</span><span class="signup-price">￥5890</span><el-input-number v-model="num2" @change="handleChange"  size="small" :min="0" :max="10" label="描述文字"></el-input-number></div>
</div>
<div class="calendar-bottom">
  <p>日历价格为起价，最终价格以出游价格为准</p>
</div>
<div class="signup-footer"> 
  <div class="signup-footer-left">  <span v-if="num">{{signupmsg.num?signupmsg.num:num}}成人</span> <span v-if="num2" >{{signupmsg.num2?signupmsg.num2:num2}}儿童</span>
  <p  >团期:{{signupmsg.calendar?signupmsg.calendar:calendar}}</p>
  </div>
  <router-link :to='`/product/${id}/fillin`'> <span @click="signup({num:num,num2:num2,calendar:calendar})" >下一步</span></router-link> </div>   
  </div>
</template>

<script>
import moment from 'moment'
import {mapState,mapMutations} from 'vuex'
import Header from "./Header"
export default {
    name:"Signup",
    components:{
      Header
    },
    data(){
    return{
       time:['13','15','18','20','21','24'],
       num:0,
       num2:0,
       calendar:moment().format('YYYY-MM-DD')
    }
    },
    created(){
      this.num = this.signupmsg.num?this.signupmsg.num:this.num
      this.num2 = this.signupmsg.num2?this.signupmsg.num2:this.num2
    },
     
    computed:{
      ...mapState({
        signupmsg:state=>state.MineModule.Order.route
      }),
      id(){
        return this.$route.params.id
      }
     },
    methods:{
      ...mapMutations(['signup']),
      handleChange(value) {

      },
      handercalendar(value){
      this.calendar = value
      }
      },
      
     }
</script>

<style lang='scss'>
.signup-main{
  background-color: #f5f5f5;
  padding-bottom: 60px;
}
.calendar{
  padding: 0;
  width: 100%;
  background-color: #fff;
  .el-calendar-table .el-calendar-day{
    height: 50px;
    padding: 0;
    text-align: center;
    padding-top: 10px;
    p{
      font-size: 10px;
      margin: 0;
    }
  }
}
.calendar .el-calendar__body {
  padding-bottom: 10px;
}
 .is-selected {
    color: #f08519;
  }
.people-number{
  padding: 0 24px;
  padding-bottom: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
 justify-content: space-between;
div{
  .el-input-number{
  width: 60%;
  height: 30px;
 outline: none;
  }
  .people-number-d{
    margin-right: 10px;
  }
  .signup-price{
  color: #f08519;
  }
}
}
.calendar-bottom{
 padding: 10px 24px;
 background-color: #fff;
 margin-bottom: 20px;
 p{
   background-image: url('../img/xiaoguan.jpg');
   padding-left: 22px;
   background-size: 18px 18px;
   background-position: 0 center;
   background-repeat: no-repeat;
 }
}
.signup-footer{
  width: 86%;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 10px 7%;
  a{
    text-decoration: none;
    height: 20px;
    padding: 10px 35px;
    border-radius: 5px;
    color: #fff;
    background-color: #50bbdb;
  }
  p{
    margin: 0;
  }
}
</style>