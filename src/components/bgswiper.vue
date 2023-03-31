

<template>
    <!-- Swiper -->
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide-1" :style="slide1Style">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-2">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
        </div>
    </div>
</template>
<script setup>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import { nextTick, onMounted, reactive } from 'vue';


let swiper
let slide1Style = reactive({
    width: 0,
})

onMounted(() => {
    const swiperDom = document.querySelector('.swiper')
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        freeMode: false,

    });


})



nextTick(() => {
    let top = 0
    const animationFun = () => {
        requestAnimationFrame(() => {
            top--
            swiper.setTranslate(top)
            animationFun()

        })
    }
    // animationFun()


})



</script>
<style scoped lang="scss">
.slide-1,
.slide-2 {
    .slide-img {
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;

    }
}

.slide-1 {
    .slide-img {
        background-image: url('./../assets/images/11.jpeg') !important;
    }
}

.slide-2 {
    .slide-img {
        background-image: url('./../assets/images/22.jpeg') !important;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    transform-origin: center center;
    position: relative;
    transform: rotate(90deg) scale(1, 1);
    width: 667px;
    height: 375px;
    margin-left: -146px;
    margin-top: 146px;
    // margin-left: -146px;
    // margin-top: 146px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: auto;
}
</style>
  
  