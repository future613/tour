<template>
<div class="dialog-zhezhao" @click.self="closeDialog" v-show="show" @mousewheel.prevent @touchmove.prevent>
 <div class="dialog">
     <div class="content">
      <slot></slot>
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

.content{
    width: 100%;
    li{
        width: 90%;
        height: 40px;
        line-height: 40px;
        list-style: none;
        text-align: left;
        padding-left: 10%;
        font-size: 14px;
    }
    li:first-child{
        border-bottom: 1px solid #ccc;
    }
}
.dialog-zhezhao{
    position: absolute;
    top:0;
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.5);
}
.dialog{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    background-color: #fff;
    z-index: 1000;
}


</style>