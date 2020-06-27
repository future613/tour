<template>
  <div>
<Header title='选择常用游客' right='确定' @add="add"/> 
<div class="history-title">已选择<span>{{number?number:0}}</span>/{{history.length}}游客</div> 
<div class="history-item" v-for="item in history" :key="item.id" >
    {{item.name}}  <input type="checkbox" :checked='item.isselect' @change="isselect(item.id)">
    
</div>
<div class="history-footer"> <router-link to='/addtourist'>添加常用游客</router-link></div>
  </div>
</template>

<script>
import Header from './Header'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'HistoryTourist',
    components:{
        Header
    },
    computed:{
        ...mapState({
            history:state=>state.MineModule.Common
        }),
        number(){
            return this.history.filter(item=>item.isselect).length
        }
    },
    methods:{
        ...mapMutations(['isselect','addpeople']),
        add(){
            this.addpeople(),
            window.history.back()
        }
    }
}
</script>

<style lang='scss'>

.history-title{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
    span{
        color: #50bbdb;
    }
}
.history-item{
    padding: 10px 10px 10px 50px;
    background-image: url('../img/cahngyong.jpg');
    background-repeat: no-repeat;
    background-position: 15px 0;
    background-size: 30px 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
}
.history-footer{
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    background-color: #50bbdb;
    color: #fff;
    position: fixed;
    bottom: 0;
    background-image: url('../img/jia.jpg');
    background-repeat: no-repeat;
    background-position: 30% center;
    background-size: 30px 30px;
    a{
        text-decoration: none;
        color: #fff;
    }
}
</style>