<template>
  <div class="product-main">
    <Header title='自驾团'/>
  <div class="product-header">
    <img class="product-head-pic" :src="product.pic" alt="">
       <p class="product-route">{{product.route}}</p>
    <span class="product-price">￥{{product.price}}</span><span  class='price1'>/人起</span>
  </div>


<div class="calendar">
  <div class="calendar-inner"><p>出游日期与价格日历</p>
  <span>春节</span><span>02/21</span></div>  
</div>


  <div class="nav">
    <el-tabs v-model="activeName"  @tab-click="handleClick" >
    <el-tab-pane  label="行程特色" name="first" ></el-tab-pane>
    <el-tab-pane label="行程简介" name="second" ></el-tab-pane>
    <el-tab-pane label="预定须知" name="third" ></el-tab-pane>
  </el-tabs>
  </div>


  <div class="unique">
    <p id='first'>行程特色</p>
    <div><span>美 景： </span>{{product.unique.view}}</div>
     <div><span>团队用餐： </span>{{product.unique.food}}</div>
      <div><span>安心旅行: </span>{{product.unique.safe}}</div>
       <div><span>优秀团队: </span>{{product.unique.team}}</div>
       <img :src="product.unique.img" alt="">
       <img :src="product.unique.img2" alt="">
       <h3 class="unique-footer"></h3>
  </div>


  <div class="trip">
    <h3 id='second'>行程简介</h3>
    <div class="trip-item" v-for="trip in product.trip" :key="trip.content">
      <div class="trip-head">{{trip.day}} | {{trip.title}}</div>
      <div class="food-room"><span>餐室：{{trip.food}}</span><span> 住宿：{{trip.room}}</span></div>
      <div class="trip-content">{{trip.content}}</div>
      <img :src="trip.img" alt="">
        <img :src="trip.img2" alt="">
    </div>
    <p class="unique-footer"></p>
  </div>


  <div class="reserve">
    <h3 id='third' >预定须知</h3>
    <div class="reserve1"> <p>[活动费用] {{product.reserve.const}}</p>
    <p>[VIP会员价] {{product.reserve.vip}}</p>
    <p>[儿童费用] {{product.reserve.child}}</p></div>
    <div><p>[费用包含]</p> <div v-html="product.reserve.include"></div></div>
     <div><p>[费用不包含]</p> <div v-html="product.reserve.notinclude"></div></div>
     <div><p>[活动时间]</p> <div>{{product.reserve.time}}</div></div>
     <div><p>[租车说明]</p> <div v-html="product.reserve.car"></div></div>
     <div><p>[注意事项]</p> <div v-html="product.reserve.item"></div></div>
  </div>


  <div class="loader">
     <h3>领队介绍</h3>
     <div class="loader-head"> <router-link :to="`/product/${product.id}/leader`">{{product.loader.title}}</router-link></div>
     <div class="loader-content"> <img src="../img/leader.jpg" alt=""><p>{{product.loader.content}}</p> </div>
  </div>

<div class="comments">
  <h3>用户评论</h3>
  <div class="title">
    <span>综合评价：<img :src="product.comments.evaluate" alt=""></span><span>{{product.comments.number}}</span><span>{{product.comments.cnum}}</span></div>
    <div class="comment" v-for="item in product.comments.comment" :key="item.id">
      <div class="comment-head">
        <img :src="item.headpic" alt="">
        <span>{{item.name}}</span>
        <span>综合评价： <img class="sart" :src="item.evaluate" alt=""></span>
        <span>{{item.time}}</span>
      </div>
      <div class="commit-content">
        <p>{{item.content}}</p>
        <p><span>行程安排：</span><span>{{item.arrange}}</span></p> 
        <p><span>住宿餐食：</span><span>{{item.room}}</span></p>
        <p><span>交通旅行：</span><span>{{item.car}}</span></p>
         <p><img :src="item.img1" alt=""> <img :src="item.img2" alt=""></p>
        <p  v-if='item.replay' class="replay"><span class="redd">爱自驾客服回复：</span><span>{{item.replay}}</span></p>
      </div>
    </div>
</div>

  <div class="product-footer">
  <li>收藏</li>
  <li>电话咨询</li>
  <li><router-link :to="`/product/${product.id}/signup`">我要报名</router-link></li>
  </div>
  </div>
</template>

<script>
import Header from '../views/Header'
import {mapState} from 'vuex'
export default {
    name:"Product",
    components:{
    Header
    },
    data() {
      return {
        activeName: 'one'
      };
    },
    computed:{
      ...mapState({
        products:state=>state.ProductModule.product
      }),
      product(){
        return this.products.filter(item=>item.id === this.$route.params.id)[0]
      }
    },
       methods: {
       handleClick(tab, event) {
        document.querySelector(`#${tab.name}`).scrollIntoView(true);
      }
    }

}
</script>

<style lang='scss' >
.comments{
  width: 100%;
  .title{
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    span{
      font-size: 14px;
      color:#333;
      img{
        width: 70px;
      }
    }
  }
  .comment{
   padding: 8px 0; 
   margin-bottom: 10px;
   border-bottom: 15px solid rgb(173, 172, 172);
   .comment-head{
     display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px; 
    padding: 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #777;
    span{
      font-size: 12px;
      height: 30px;
      line-height: 30px;
    }
    img{
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
    .sart{
        width: 50px;
        height: 10px;
      }
   }
   .commit-content{
     img{
       width: 25%;
       margin-right: 10px;
     }
     p{
         padding: 0 20px;
     }
     .replay{
       background-color: #f5f5f5;
       padding: 20px 20px; 
     .redd{
       margin-right: 50px;
       color: brown;
     }
     }
   }
  }
}
.nav{
    background-color: #fff;
 .el-tabs__nav{
  margin-left: 50px;
 }
}
.product-header{
  padding-bottom: 5px;
}
.product-head-pic{
  width: 100%;
}
.product-route{
  padding-left:15px;
  font-size: 16px;
  margin-top: 5px;
}
.product-price{
  padding-left: 15px;
  color: #e18425;
}
.product-price1{
  font-size: 10px;
  color: #ccc;
}
.product-main .calendar{
  width: 100%;
  background-color: #e5e5e5;
  padding: 25px 0;
}
.calendar-inner{
  width: 90%;
  margin: 0 auto;
  padding: 10px 10px;
  padding-top: 1px;
  background-color: #fff;
  border-radius: 6px;
  background-image: url('../img/next.png');
  background-repeat: no-repeat;
  background-position: 95% center;
  span{
    padding: 2px 5px;
    border:1px solid #ccc;
    margin-right: 10px;
  }
}
.unique>p,.trip>h3,.reserve>h3,.loader>h3,.comments>h3{
height: 30px;
line-height: 30px;
background-color: #f5f5f5;
text-align: center;
font-size: 16px;
}
.unique>div,.trip>div,.reserve>div,.loader>div{
  width: 90%;
  margin:0 auto;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}
.unique>div>span{
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.unique>img{
  display: block;
  width: 90%;
  margin:0 auto;
  margin:0 auto;
  margin-bottom: 15px;
}
.trip-item>img{
  display: block;
  width: 95%;
  margin:0 auto;
  margin:0 auto;
  margin-bottom: 15px;
}
.unique-footer{
  width: 100%;
  background-color: #ccc;
  height: 20px;
}
.trip-head{
  width: 85%;
  color: #53b4d4;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #53b4d4;
}
.food-room{
    width: 85%;
    padding-bottom: 5px;
    margin-bottom: 10px;
   border-bottom: 1px dashed #ccc;
}
.trip-content{
  line-height: 24px;
  margin-bottom: 10px;
}
.food-room>span{
  margin-right: 40px;
  font-size: 14px;
}
.reserve1{
width: 90%;
margin: 0 auto;
margin-block-start: 10px;
font-size: 16px;
font-weight: bold;
p{
  margin: 5px;
  color: #333;
}
}
.reserve>div>p{
  font-weight: bold;
}
.loader-head{
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
 
}
.loader-head>a{
  display: block;
  width: 100%;
  text-decoration: none;
  color: #000;
   background-image: url('../img/next.png');
  background-repeat: no-repeat;
  background-position: 90% center;
  
}
.loader-content{
  display: flex;
  height: 70px;
  margin-bottom: 20px;
}
.loader-content>img{
width: 20%;
margin-right: 5px;
}
.loader-content>p{
  width: 70%;
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
.product-footer{
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0px;
  background-color: #f5f5f5;
}
.product-footer>li{
  width: 100%;
  list-style: none;
  height: 40px;
}
.product-footer>li:first-child,.product-footer>li:nth-child(2){
  width: 25%;
  text-align: center;
  line-height: 60px;
  border-right: 1px solid lightgray;
}
.product-footer>li:first-child{
  background-image: url('../img/shoucang.jpg');
  background-repeat: no-repeat;
  background-size: 26px 22px;
  background-position: center 12px;
  padding-top: 15px;
}
.product-footer>li:nth-child(2){
  background-image: url('../img/phone.jpg');
  background-repeat: no-repeat;
  background-size: 26px 20px;
  background-position: center 12px;
  padding-top: 15px;
}
.product-footer>li:last-child{
  width: 49%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: #53b4d4;
}
.product-footer>li:last-child>a{
   color: #fff;
  text-decoration: none;
}
.product-main{
  padding-bottom: 100px;
}
</style>