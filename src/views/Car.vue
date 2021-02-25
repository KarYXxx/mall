<template>
  <div class="car">
      <Banner :bannerLists="bannerLists" />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  data(){
    return {
      bannerLists:[
      {src:require('../assets/b1.jpg'),link:""},
      ]
    }
  },
  components:{
    Banner,
  }
}
</script>

<style>

</style>