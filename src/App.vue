<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/css/base.css";
</style>


<script>

  import MainTabbar from "components/content/MainTabbar";

export default {
  name:'app',
  components:{
    MainTabbar
  }
}


</script>
