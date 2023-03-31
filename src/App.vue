

<template>
  <!-- Swiper -->
  <div id="touch" v-touch="swiper">
    <!-- <bg-swiper /> -->
    11
  </div>
</template>
<script setup >
import BgSwiper from './components/bgswiper.vue'
const swperLeft = () => {
  console.log('left swiper')
}
const swperRight = () => {
  console.log('right swiper')
}
const swiper = () => {
  console.log('swiper')
}




</script>
<style scoped lang="scss">
#touch {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
}
</style>

