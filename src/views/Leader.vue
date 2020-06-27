<template>
  <div>
    <Header title='领队详情页'/>
    <h4 class="leader-item">领队介绍</h4>
    <div class="head">
      <img src="../img/leader.jpg" alt="">
      <span>{{leader.title}}</span>
    </div>
    <p class="content">{{leader.content}}</p>
    <h4>领队商品</h4>
    <div v-for="item in LeaderProduct" :key="item.id">
     <router-link :to="`/product/${item.id}`">
     <img class="leader-product" :src="item.pic" alt="">
     </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from './Header'
export default {
    name:"Leader",
    components:{
    Header
    },
    computed:{
      ...mapState({
        leader:state=>state.ProductModule.product.filter(item=>item.id === '1')[0].loader,
        LeaderProduct:state=>state.ProductModule.product.filter(item=>item.leader === '小红')
      })
    }

}
</script>

<style scoped>
h4{
  margin: 0;
  width: 100%;
  background-color: #e9e9e9;
  height: 38px;
  text-align: center;
  line-height: 38px;
}
.leader-item{
  margin-bottom: 10px;
}
.head{
   width: 90%;
  margin:0 auto;
  display: flex;
  margin-bottom: 20px;
  line-height: 101px;
}
.head>img{
margin-right: 20px;
}
.head>span{
  height: 70px;
  border-bottom: 1px solid #ccc;
}
.content{
  width: 90%;
  margin:0 auto;
  margin-bottom: 30px;
}
.leader-product{
  display: block;
  width: 98%;
   margin:0 auto;
   margin-bottom: 10px;
}
</style>