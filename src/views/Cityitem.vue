<template>
  <div >
    <div class="city-item">
      <div class="pic">
        <img :src="item.img" alt="">
      </div>
      <div class="content">
       <p class="title">{{item.title}}</p>
       <p class="route">线路：{{item.route}}</p>
       <p class="content">{{item.content}}</p>
      <div class="content-bottom"><span class="address">{{item.address}}</span><span class="price">{{item.price}}起</span></div> 
      </div>
      </div> 
  </div>
</template>

<script>
export default {
  name:"Cityitem",
  components:{
  },
  props:['item']
}
</script>

<style lang='scss' scope>

.city-item{
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 10px;
  background-color: #fff;
}
.pic{
    width: 26%;
    height: 100px;
    margin-right: 10px;
    img{
    width: 100%;
    height: 100px;
    }
  }
  .content{
    width: 70%;
  }
.title{
  color: #000;
  font-size:10px;
  font-weight: bold;
  margin: 0;
}
.route{
  font-size:10px;
  color: #000;
}
.content{
  color: #666;
  font-size:10px;
  
}
.address{
  padding-left: 20px;
  background-image: url('../img/guide.png');
  background-repeat: no-repeat;
  background-size: 15px 20px;
  margin-right: 20px;
  
}
.price{
  color: #e47736;
  font-size: 14px;
}
.content-bottom{
  display: flex;
  justify-content: space-between;
}

</style>