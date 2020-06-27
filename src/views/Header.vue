<template>
  <div class="header">
   <li @click="back"> </li>
   <li class="title">{{title}}</li>
   <li @click="add">{{right}}</li>
  </div>
</template>

<script>
export default {
    name:"Header",
    props:['title','right'],
    methods:{
      back(){
        window.history.back()
      },
      add(){
      this.$emit('add')
      }
    }
}
</script>

<style lang='scss' scoped>
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
    .title{
    font-size: 22px;
    font-weight: 200;
    }
}
.header>li:first-child{
  width: 30px;
  background-image: url('../img/pre.png');
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: 0 center;
}

</style>