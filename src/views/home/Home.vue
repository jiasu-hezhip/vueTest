<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <swiper>
      <swiper-item v-for="item in this.banner" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <h2>主页</h2>
  </div>
</template>

<script>
  import Navbar from "../../components/common/navbar/Navbar";
  import {getHomeData } from "../../network/home";
  import {Swiper,SwiperItem} from "../../components/common/swiper"
  export default {
    name: "Home",
    components:{
      Navbar,
      Swiper,
      SwiperItem
    },
    data(){
      return{
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[]
      }
    },
    created() {
      getHomeData().then(res=>{
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
        console.log()
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
