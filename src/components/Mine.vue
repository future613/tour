<template>
  <div class="mine">
      <Header title='订单列表'/>
      <div class="nav">
           <li @click="open('all')">全部分类</li>
           <li @click="open('time')">按时间排序</li>
      </div>
      <div class="dialog-box">
        <Dialogtwo :show="show1" @close='close'>
             <li>按下单时间排序</li>
             <li>按出行时间排序</li>
            </Dialogtwo> 
      <Dialogtwo :show="show" @close='close'>
             <li  @click="filter('all')">全部分类</li>
             <li  @click="filter('待出行')">待出行</li>
             <li  @click="filter('待支付')">待支付</li>
             <li  @click="filter('待评价')">待评价</li>
             <li  @click="filter('已取消')">已取消</li>
        </Dialogtwo> 
            
      </div>
      <Mineitem class="mine-item" v-for="mine in filterProduct" :key="mine.id" :mine='mine'/>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Mineitem from '../views/Mineitem'
import Header from '../views/Header'
import Dialogtwo from '../views/Dialogtwo'
export default {
    name:"mine",
    data(){
        return{
              show:false,
              show1:false,
              type:''
        }
    },
    components:{
        Mineitem,
        Header,
        Dialogtwo
    },
    computed:{
        ...mapState({
            MineProduct:state=>state.MineModule.MineProduct
        }),
        filterProduct(){
           return this.type === 'a11'?this.MineProduct:this.type === '待出行'?this.MineProduct.filter(item=>item.type === '待出行'):this.type === '待支付'?this.MineProduct.filter(item=>item.type === '待支付'):this.type === '待评价'?this.MineProduct.filter(item=>item.type ==='待评价'):this.type === '已取消'?this.MineProduct.filter(item=>item.type === '已取消'):this.MineProduct
        } 
    },
    methods:{
     ...mapMutations(['filterType']),
      open(type){
             type === 'all'?this.show = true:this.show1 = true
      },
       close(){
            this.show = false
            this.show1 = false
        },
    
      filter(type){     
          this.show = false
          this.show1 = false
          this.type = type
      }
    }
}
</script>

<style lang='scss' scoped>

.nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
   
    li{
        width: 50%;
        text-align: center;
        list-style: none;
    }
    li:first-child{
        border-right:1px solid #ccc;
    }
}
.mine{
    background-color:#f5f5f5;
}
.dialog-box{
    position: relative;
}

</style>