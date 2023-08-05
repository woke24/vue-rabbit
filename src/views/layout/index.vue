<script setup>
import LayoutNav from './LayoutNav.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutFooter from './LayoutFooter.vue'



</script>
<template>
  <!-- <div>我首页</div> -->
  <!-- 二级路由出口 -->
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <!-- <div class="test">test scss</div> -->
</template>
<style scoped lang="scss">
// .test {
//   color: $priceColor;
// }
</style>