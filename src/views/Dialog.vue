<template>
<div class="dialog-zhezhao" @click.self="closeDialog" v-show="show">
 <div class="dialog">
     <div class="title">
     <span @click="closeDialog">取消</span>
     <span>清空已选</span>
     <span>确定</span>
     </div>
     <div class="content">
         <div class="content-left">
              <li> 目的地</li>
             <li> 出发城市</li>
             <li>行程天数</li>
             <li>出行时间</li>
         </div>
         <div class="content-right">
             <li>不限 <el-checkbox></el-checkbox></li>
             <li>北京 <el-checkbox></el-checkbox></li>
             <li>南京 <el-checkbox></el-checkbox></li>
             <li>上海 <el-checkbox></el-checkbox></li>
             <li>杭州 <el-checkbox></el-checkbox></li>
         </div>
     </div>
     
 </div>
</div>
  
</template>

<script>
export default {
    name:"Dialog",
    props:["show"],
    methods:{
        closeDialog(){
            this.$emit("close")
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #50bbdb;
    span{
    color: #fff;
    font-size: 16px;
    font-weight: 200;
    }
}
.content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    .content-left{
     width: 30%;
     background-color: #f5f5f5;
     li{
         font-size: 14px;
         margin-bottom: 10px;
         height: 40px;
         line-height: 40px;
     }
     li:hover{
         background-color: #fff;
         color: #50bbdb;
     }
    }
    .content-right{
        width: 70%;
        background-color: #fff;
        padding: 0 20px;
        li{
        display: flex;
        justify-content: space-between;
         font-size: 14px;
         margin-bottom: 10px;
          height: 40px;
         line-height: 40px;
     }
    }
}
.dialog-zhezhao{
    position: fixed;
    top:0;
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.5);
}
.dialog{
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 1000;
}


</style>