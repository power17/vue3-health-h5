

<template>
  <div id="touch"></div>
  <div class="bg-swiper">
    <bg-swiper ref="bgSwiperDOM" />
  </div>

  <!-- imageSwiper -->
  <div class="image-swiper">
    <image-swiper ref="imageSwiperDOM" />
  </div>
</template>
<script setup >
import { nextTick, onMounted, ref, reactive, defineAsyncComponent } from 'vue';
import BgSwiper from './components/bgswiper.vue'
import Hammer from 'hammerjs'
// const ImageSwiper = defineAsyncComponent(() => {
//   import('./components/imageswiper.vue')
// })
import ImageSwiper from './components/imageswiper.vue'

const imageSwiperDOM = ref(null)
const bgSwiperDOM = ref(null)

// console.log(imageSwiperDOM)


onMounted(() => {
  var square = document.querySelector('#touch');
  var hammer = new Hammer(square);
  hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  hammer.on('swipeup', function (e) {
    imageSwiperDOM.value.start()
    bgSwiperDOM.value.start()
    console.log("swiperup");

  });
  hammer.on('swipedown', function (e) {
    console.log("swiperdown");

  });
  hammer.on('press', function (e) {
    console.log("long press");

  });
  hammer.on('tap', function (e) {
    console.log("tap");

  });
  //panup
  hammer.on('panup', function (e) {
    console.log("panup");

  });

})


nextTick(() => {

})






</script>
<style scoped lang="scss">
#touch {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;

}

.bg-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.image-swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

