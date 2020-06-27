<template>
  <router-link :to="`/mine/${mine.id}`"><div class="main">
  <div class="mine-head"> <div><span class="mine-number">{{mine.number}}</span> <span>{{mine.type}}</span></div> <span>{{mine.time}}</span></div>
  <div class="mine-content"> <p>{{mine.title}}</p> <div> <span>{{mine.mode}}</span> <span>{{mine.begintime}}</span><span class="price">￥{{mine.price}}</span></div></div>
  <div class="mine-footer">
    <span>{{mine.type}}</span> <button>{{mine.handel}}</button>
  </div>
  </div></router-link>
</template>

<script>
export default {
  name:"Mineitem",
  props:['mine'],

}
</script>

<style lang='scss' scoped>
a{
 text-decoration: none;
}
.main{
 padding: 0 5%;
  margin-top: 20px;
  background-color: #fff;
}
.mine-head{
  display: flex;
  height: 20px;
  line-height: 20px;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px dashed #ccc;
  div{
    span{
      font-size: 12px;
      color: #666;
    }
    .mine-number{
      padding-right: 5px;
      border-right:1px solid #666;
    }
  }
  span{
     font-size: 12px;
      color: #666;
  }
}
.mine-content{
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  p{
    font-size: 14px;
    color: #333;
  }
  div{
    display: flex;
   
    span{
      font-size: 12px;
      color: #666; 
      margin-right: 20px;
    }
    .price{
      color: #fa946e;
    }
  }
}
.mine-footer{
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  span{
     color: #fa946e;
     font-size: 14px;
  }
  button{
    background-color: #fff;
    outline: 0;
    border:1px solid #ccc;
  }
  button:hover{
    background-color: #50bbdb;
    color: #fff;
  }
}
</style>