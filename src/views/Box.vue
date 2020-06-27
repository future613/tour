<template>
      <div class="box">
       <h3><span>{{title}}</span> <router-link to='/historytourist'>{{add}}</router-link> </h3> 
       <div class="box-content">
           <slot></slot>
           
       </div>
      </div>
</template>

<script>
export default {
 name:"Box",
 props:['title','add']
}
</script>

<style lang='scss' scoped>
.box{
     width: 90%;
     padding: 10px 0;
     margin: 0 auto;   
     border-radius: 8px;
     background-color: #fff;
     margin-bottom: 10px;
     h3{
     color: #222;
     margin: 0;
     background-image: url('../img/order-detail-bgc.png');
     background-repeat: no-repeat;
     background-position: 10px 2px;
     padding-left: 20px;
     background-size: 2px 18px;
     font-size: 16px;
     padding-bottom: 10px;
     border-bottom: 1px solid #ccc;
     display: flex;
     justify-content: space-between;
     a{
         text-decoration: none;
         color: #50bbdb;
         font-weight: 400;
         margin-right: 20px;
     }
     }
     .box-content{
      padding:0 20px; 
      font-size: 14px;
      .order-room{
          display: flex;
          justify-content: space-between;
      .room-select{
        width: 120px;
        margin-right: 10px;
      }
      .el-radio{
        margin-bottom: 10px;
      }
      }
     .modify{
         width: 50px;
         height: 24px;
         margin-left: 80px;
         background-color: #fff;
         border: 1px solid #ccc;
         color: #50bbdb;
         outline: none;
     }
      input{
          outline: none;
          border: none;
      } 
      .under{
          padding-bottom: 5px;
          border-bottom: 1px solid #ccc;
      } 
      .people{
          height: 40px;
          background-image: url('../img/people.jpg');
          background-repeat: no-repeat;
         background-size: 27px 32px;
         padding-left: 36px;
         line-height: 40px;
      }
      .radio{
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .el-input-number--small{
          margin-left: 10px;
      }
     }
     .checked{
         display: flex;
         justify-content: space-between;
         margin-top: 10px;
          padding-bottom: 5px;
          border-bottom: 1px solid #ccc;
    .el-checkbox{
        margin-right: 6px;
        height: 14px;
    }
         span{
         width: 100px;
         margin-left: 20px;
        color: #f08211;
         }
     }
  }
</style>