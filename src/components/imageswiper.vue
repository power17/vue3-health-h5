

<template>
    <!-- Swiper -->
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide image-slide-1" :style="slide1Style">
                <div class="layer-bg"></div>
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide image-slide-2">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-3">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-4">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-5">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-6">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
            </div>

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
let top = 0
const animationFun = () => {
    requestAnimationFrame(() => {
        top = top - 2
        swiper[1].setTranslate(top)
        animationFun()

    })
}
let start = () => {
    console.log(111, swiper)
    swiper[1].slideTo(1)
    // animationFun()
}
defineExpose({
    start
})
// let start = reactive({})
// let start = await afterDomstart()
// console.log(start)



</script>
<style scoped lang="scss">
.image-slide-1,
.image-slide-2,
.image-slide-3,
.image-slide-4,
.image-slide-5,
.image-slide-6,
.image-slide-7 {
    background-color: transparent !important;

    .slide-img {
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;

    }
}

.image-slide-1 {
    .slide-img {
        background-image: url('./../assets/images/ten-year.png') !important;
        position: absolute;
        left: 20px;
        top: 40px;
        width: 395px;
        height: 132px;
    }
}

.image-slide-2 {

    .slide-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 163px;
        height: 222px;

        background-image: url('./../assets/images/yin.png') !important;
    }
}

.slide-3 {
    .slide-img {
        background-image: url('./../assets/images/33.jpeg') !important;
    }
}

.slide-4 {
    .slide-img {
        background-image: url('./../assets/images/44.jpeg') !important;
    }
}

.slide-5 {
    .slide-img {
        background-image: url('./../assets/images/55.jpeg') !important;
    }
}

.slide-6 {
    .slide-img {
        background-image: url('./../assets/images/66.jpeg') !important;
    }
}

.slide-77 {
    .slide-img {
        background-image: url('./../assets/images/77.jpeg') !important;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    transform-origin: center center;
    position: relative;
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
  
  