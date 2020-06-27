<template>
  <div class="main">
      <Header class="city-head" title='南京 产品推荐'/>
    <Cityitem v-for="item in CityProduct" :key="item.id" :item='item'/> 
     <Dialog :show="show" @close='close'>
      </Dialog> 
     <div v-show="footer" class="footer">
        <li  @click="open" >出发城市</li>
        <li  @click="open">行程天数</li>
        <li  @click="open">出行时间</li>
        <li  @click="open">推荐排序</li>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import Cityitem from '../views/Cityitem'
import Header from '../views/Header'
import Dialog from '../views/Dialog'
export default {
    name:"City",
    components:{
      Cityitem,
      Header,
      Dialog
    },
    data(){
      return{
       show:false,
       footer:true
      }
    },
    computed:{
      ...mapState({
        CityProduct:state=>state.CityModule.city
      })
    },
    methods:{
      open(){
             this.show = true,
            this.footer = false
      },
       close(){
            this.show = false,
            this.footer = true
        }
    }
}
</script>

<style lang='scss' scoped>
.main{
  background-color: #f1f1f1;
}
.city-head{
  margin-bottom: 2px;
}
.footer{
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  display: flex;
  padding: 10px 0;
  background-color: #fff;
  justify-content: space-between;
 
  li{
    width: 60px;
    text-align: center;
    list-style: none;
    padding-top: 40px;
    font-size:12px;
  }
  li:hover{
    color: #50bbdb;
  }
}
.footer>li:first-child{
  background-image: url('../img/searchbgc1.png');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 35px 35px;
}
.footer>li:nth-child(2){
  background-image: url('../img/searchbgc2.png');
  background-repeat: no-repeat;
  background-position: center 0;
 background-size: 35px 35px;
}
.footer>li:nth-child(3){
  background-image: url('../img/searchbgc3.png');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 35px 35px;
}
.footer>li:nth-child(4){
  background-image: url('../img/searchbgc4.png');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 35px 35px;
}
</style>