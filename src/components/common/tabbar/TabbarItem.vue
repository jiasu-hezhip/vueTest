<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isSelected"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-selected"></slot></div>
    <div :style="style"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      path : String,
      color:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isSelected(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      style(){
         return this.isSelected ? {color: this.color }: {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .selected{
    color: red;
  }
</style>