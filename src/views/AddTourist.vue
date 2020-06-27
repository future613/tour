<template>
  <div>
      <Header title='添加常用游客' right='保存' @add='add'/>
      <div class="addtourits-content">
          <div>姓名 <input v-model="value" type="text" placeholder="必填"></div>
          <div>证件号 <input  v-model="value2" type="text"></div>
          <div>手机 <input v-model="value3" type="text" placeholder="选填"></div>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Header from './Header'
export default {
    name:'AddTourist',
    components:{
        Header
    },
    data(){
     return{
         value:'',
         value2:'',
         value3:''
     }
    },
    methods:{
        ...mapMutations(['addtourits']),
        add(){
            this.addtourits({ id:new Date().getTime(),name:this.value,type:'身份证',number:this.value2,phone:this.value3,isselect:false}),
            window.history.back()
        }
    }

}
</script>

<style lang='scss'>
.addtourits-content{
    padding: 5px 10px;
    div{
        width: 95%;
        margin:0 auto;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        padding-left: 20px;
        input{
            outline: 0;
            border: none;
            padding-left: 30%;
        }
    }
}
</style>