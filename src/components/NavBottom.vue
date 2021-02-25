<template>
  <ul class="fnav fnav1" id="fnav1">
    <li><router-link to="/home"> <span class="f_home">首页</span></router-link></li>
    <li><router-link to="/cat"> <span  class="f_cat ">分类</span></router-link></li>
    <li><router-link to="/car"> <span  class="f_car">购物车</span></router-link></li>
    <li><router-link to="/user"><span  class="f_user">会员</span></router-link></li>
</ul>
</template>

<script>
export default {
  name: 'Navbottom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
