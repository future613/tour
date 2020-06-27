<template>
  <div class="home">
   <div class="header">
   <li>保定</li>
   <li><a>爱自驾</a><a>互动</a></li>
   <li></li>
  </div>
   <div>
      <div class="box">
           <div  v-show="num === 1" class="pic"><img src="../img/swiper1.jpg" alt=""> </div>
           <div  v-show="num === 2" class="pic"><img src="../img/travel1.jpg" alt=""></div>
           <div  v-show="num === 3" class="pic"><img src="../img/travel2.jpg" alt=""></div>  
          <ul class="list">
              <li  :style="{backgroundColor: num === 1? '#50bbdb' : ''}" @click="changeNum(1)"></li>
              <li  :style="{backgroundColor: num === 2? '#50bbdb' : ''}" @click="changeNum(2)"></li>
              <li  :style="{backgroundColor: num === 3? '#50bbdb' : ''}" @click="changeNum(3)"></li>
          </ul>
      </div>
      <div class="search" @click="link">
        <input type="text" 
        placeholder="城市详情" >
        
      </div>
      <div class="domestic">
        <h3>境内</h3>
         <div v-for="item in domestic" :key="item.id"> <router-link :to="`/product/${item.id}`">
          <img class="domestic-pic" :src="item.pic" alt="">
         </router-link>
         <p class="route">{{item.route}}</p>
         </div>
        <div class="more">  <span>MORE</span> </div> 
      </div>
      <div class="abroad">
        <h3>境外</h3>
        <div v-for="item in abroad" :key="item.id"><router-link :to="`/product/${item.id}`">
        <img class="abroad-pic" :src="item.pic" alt="">
        </router-link>
        <p class="route">{{item.route}}</p>
        </div>
         <div class="more"> <span>MORE</span></div> 
      </div>
  </div>
  <div class="footer">
    <div><i class="el-icon-s-home"></i> <li>首页</li></div>
    <div><i class="el-icon-s-promotion"></i> <li>我去</li></div>
    <div><i class="el-icon-reading"></i> <li>地图</li></div>
    <div><router-link to='/mine'><i class="el-icon-user-solid"></i>  <li>个人中心</li></router-link></div> 
  </div>
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  
  data(){
        return {
            num:1
            }
    },
    created(){
    setInterval(() => {  this.rightNum() } ,3000);
    },
    computed:{
     ...mapState({
       domestic:state=>state.ProductModule.product.filter(item=>item.type === 'domestic'),
       abroad:state=>state.ProductModule.product.filter(item=>item.type === 'abroad')
     })
    },
    methods:{
        changeNum(num){
            this.num = num
        },
        rightNum(){
            this.num < 3? this.num ++ : this.num = 1
        },
        link(){
          this.$router.push('/city')
        }  
    }
}
</script>

<style lang='scss' scoped>
.header>li:first-child{
  background-image: url('../img/header2.png');
  background-repeat: no-repeat;
  background-position: 0 12px;
  background-size: 33px 33px;
  padding-left: 35px;
}
.header>li:nth-child(2){
  a{
   padding: 5px 25px;
   border:1px solid #fff;
  }
  a:hover{
    background-color: #fff;
    color: #50bbdb;
  }
}
.header>li:last-child{
   background-image: url('../img/header1.png');
  background-repeat: no-repeat;
  background-position: 0 12px;
  background-size: 33px 33px;
  width: 35px;
}
html{
  margin: 0;
  padding: 0;
}
.box{
    width: 100%;
    height: 180px;
    position: relative;
}
.pic{
    width: 100%;
    height: 180px;
    background-color: red;
    position: absolute;
    top:0;
    left: 0;
}
.pic>img{
  width: 100%;
  height: 180px;
}
.list{
    display: flex;
    position: absolute;
    bottom: 5px;
    left:60px;
    list-style: none;
}
.list li{
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
}
.search{
  width: 100%;
  padding-top:20px;
 input{
   display: block;
   width: 70%;
   border-radius: 25px;
   margin:0 auto;
   border: 1px solid #50bbdb;
   height: 30px;
   padding-left: 20px;
   outline: none;
   background-image: url('../img/mysearch.jpg');
   background-position: 92% center;
   background-repeat: no-repeat;
   background-size: 20px 20px;
 }
}
.domestic>h3,.abroad>h3{
   text-align: center;
   color: #666;
 }
.domestic-pic,.abroad-pic{
  width: 100%;
  height: 180px;
}
.more{
  width: 100%;
  height: 40px;
  background-color: #f1f1f1;
  background-image: url('../img/more.png');
  background-repeat: no-repeat;
  background-position: 36% center;
  text-align: center;
  line-height: 40px;
  color: #e47736;
}
.route{
  padding-left: 15px;
  font-size: 14px;
  color: #333;
}
.footer{
  width: 90%;
  display: flex;
  padding:0 5%;
  position: fixed;
  left:0;
  bottom: 0px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  div:hover{
    color:#50bbdb;
  }
  div{
    width: 75px;
    text-align: center;
    i{
     font-size: 24px;
    }
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:#000;
  }
}
.header{
    height: 60px;
    background-color: #50bbdb;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    li{
     list-style: none;
     color: #fff;
    }
}

</style>
