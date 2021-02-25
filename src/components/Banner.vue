<template>
  <div class="hslider" id="slider">
    <ul class="sul" >
      <li v-for="(v,i) in bannerLists " :key="i"  v-show="n==i">
      <router-link :to="v.link"><img :src="v.src" width="100%"></router-link>
    </li>
    </ul>                                          
    <div class="btn alC" id="btn">
      <i class="" v-for="(v,i) in bannerLists" :key="i" :class="n==i?'on':''"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'Baner',
  props:{
    bannerLists:{
      type:Array,
      require:true,
    }
  },
  data(){
    return{
      timer:'',
      n:0,
    }
  },
  methods:{
    play(){
      this.timer = setInterval(this.autoPlay,2000);
    },
    autoPlay(){
      this.n++;
      if(this.n == this.bannerLists.length){
        this.n = 0;
      }
    }
  },
  mounted:function(){
    this.play();
  },
  destroyed:function(){
    clearTimeout(this.timer)
  }

 
}
</script>

<style>

</style>