

<template>
  <div id="touch"></div>
  <div class="bg-swiper">
    <bg-swiper ref="bgSwiperDOM" v-model:offset="bgOffset" :speed="bgSpeed" />
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
import { getClientConfig } from './utils/utils'


// const ImageSwiper = defineAsyncComponent(() => {
//   import('./components/imageswiper.vue')
// })
import ImageSwiper from './components/imageswiper.vue'

const imageSwiperDOM = ref(null)
const bgSwiperDOM = ref(null)
let bgOffset = ref(0)
const bgSpeed = -2
// console.log(imageSwiperDOM)


onMounted(() => {
  // 设置屏幕大小
  const wh = getClientConfig()
  let appWh = document.querySelector('#app')
  appWh.style.width = `${wh.height}px`
  appWh.style.height = `${wh.width}px`
  appWh.style.top = `${(wh.height - wh.width) / 2}px`
  appWh.style.left = `${(wh.width - wh.height) / 2}px`
  // 绑定事件
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
    bgOffset.value = -bgSpeed

  });
  hammer.on('press', function (e) {
    console.log(e)
    e.preventDefault()
    console.log('press')
    bgOffset.value = bgOffset.value * 4

  });
  hammer.on('pressup', function (e) {
    console.log("long press");
    bgOffset.value = bgOffset.value / 4
  });
  let pre = bgSpeed
  hammer.on('tap', function (e) {
    if (bgOffset.value) {
      pre = bgOffset.value
    }


    console.log('tap')
    // 暂停
    bgOffset.value = bgOffset.value === 0 ? pre : 0

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
  touch-action: none;


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

