<template>
  <div class="home">
    <Banner :bannerLists="bannerLists" />
    <!--  导航列表 -->
    <div class="hmnv pd20">
      <router-link  v-for="(v,i) in navLists" :key="i" :to="v.link" class="da"><img :src="v.icon" class="dam"> <p>{{v.title}}</p></router-link>
      <div class="clear"></div>
    </div>
    <!-- 商品列表 -->
    <div class="pd20 g_ov">
      <div class="g_ga" v-for="v in goodsLists" :key="v.id">
        <div class="g_info" >
           <router-link :to="'/detail/'+v.id">
            <p class="g_gp"><img alt="" class="g_pic" :src="v.pic"></p>
          </router-link>
             <router-link :to="'detail'+v.id">
            <p class="gl_t">{{v.name}}</p>
              <p class="g_prc"><em class="red f10">￥</em><b class="ko_prc">{{v.minPrice}}</b></p>
                <p class="g_tag">
                  <i class="tag new">{{v.recommendStatusStr}}</i>
                </p>
          </router-link>
        <div class="car_box">
        <p class="g_car" ></p>
        </div>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script>
import Banner from '@/components/Banner'
export default {
  name: 'Home',
  components: {
    Banner,
  },
  data(){
    return {
      navLists:[
        {title:'红茶',icon:require('../assets/n1.jpeg'),link:''},
        {title:'绿茶',icon:require('../assets/n2.jpeg'),link:''},
        {title:'普洱',icon:require('../assets/n4.jpeg'),link:''},
        {title:'乌龙',icon:require('../assets/n31.jpeg'),link:''},

      ],
       bannerLists:[
        {src:require('../assets/b1.jpg'),link:""},
        {src:require('../assets/b2.jpg'),link:""},
        {src:require('../assets/b3.jpg'),link:""},
      ],
      goodsLists:[],
    }

  },
  methods:{
    _getGoods(){
      this.$http.post("/shop/goods/list").then(res=>{
        console.log(res);
        this.goodsLists = res.data.data;
      })
    }
  },
  mounted:function(){
    this._getGoods();
  }
  
}
</script>
