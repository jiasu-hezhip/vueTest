<template>
  <tabbar>
    <tabbar-item path="/home">
      <img slot="item-img" src="../../assets/img/tabbar/home.svg" alt="">
      <img slot="item-img-selected" src="../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="item-img" src="../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-img-selected" src="../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img slot="item-img" src="../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-img-selected" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">已购</div>
    </tabbar-item>
    <tabbar-item path="/me">
      <img slot="item-img" src="../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-img-selected" src="../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>

  import Tabbar from "../common/tabbar/Tabbar";
  import TabbarItem from "../common/tabbar/TabbarItem";


  export default {
    name: "MainTabbar",
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
