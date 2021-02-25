<template>
  <div id="app">
    <router-view/>
    <NavBottom v-if="$route.meta.showBotton"/>
  </div>
</template>


<style>

</style>

<script>
import NavBottom from './components/NavBottom';
export default {
  components:{
    NavBottom,
  }
}

</script>
