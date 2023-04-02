

<template>
    <!-- Swiper -->
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide image-slide-1">
                <div class="layer-bg"></div>
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide image-slide-2">
                <div class="slide-img"></div>
                <div class="slide-img-text"></div>
            </div>
            <div class="swiper-slide slide-3">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-4">
                <div class="slide-img"></div>
                <div class="slide-img-text"></div>
            </div>
            <div class="swiper-slide slide-5">
                <div class="slide-img"></div>
            </div>
            <div class="swiper-slide slide-6">
                <div class="slide-img"></div>
                <div class="slide-img-text"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
                <div class="slide-img2"></div>
            </div>

        </div>
    </div>
</template>
<script setup>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import { nextTick, onMounted, reactive } from 'vue';


let swiper


onMounted(() => {
    const swiperDom = document.querySelector('.swiper')
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        freeMode: false,
        on: {
            slideChangeTransitionEnd: function () {
                console.log('transition')
                if (this.activeIndex === 1) {
                    top = this.getTranslate()
                    animationFun(top)
                }
            },
        }

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
        background-image: url('./../assets/images/1-image.png') !important;
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
        left: 200px;
        top: 30px;
        width: 163px;
        height: 222px;

        background-image: url('./../assets/images/yin.png') !important;
        background-size: contain;
    }

    .slide-img-text {
        position: absolute;
        left: 400px;
        top: 15px;
        width: 314px;
        height: 222px;
        background-image: url('./../assets/images/2-text.png') !important;
        background-size: contain;

    }
}

.slide-3 {
    .slide-img {
        width: 656px;
        height: 332px;
        position: absolute;
        bottom: 0;

        left: 10px;
        background-size: contain;
        background-image: url('./../assets/images/3-image.png') !important;
    }
}

.slide-4 {


    .slide-img {
        width: 182px;
        height: 230px;
        position: absolute;
        top: 20px;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('./../assets/images/4-image.png') !important;
    }

    .slide-img-text {
        width: 314px;
        height: 222px;
        position: absolute;
        left: 200px;
        top: 30px;
        background-image: url('./../assets/images/4-text.png') !important;
        background-size: contain;
    }
}

.slide-5 {
    .slide-img {
        width: 548px;
        height: 383px;
        position: absolute;
        bottom: 0;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('./../assets/images/5-image.png') !important;
    }
}

.slide-6 {
    .slide-img {
        width: 492.5px;
        height: 252.5px;
        position: absolute;
        bottom: 20px;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('./../assets/images/6-image.png') !important;
    }

    .slide-img-text {
        position: absolute;
        left: 400px;
        bottom: 20px;
        width: 626px;
        height: 327px;
        background-image: url('./../assets/images/6-text.png') !important;
        background-size: contain;

    }
}

.slide-7 {
    .slide-img {
        width: 492.5px;
        height: 252.5px;
        position: absolute;
        bottom: 20px;
        left: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('./../assets/images/7-image.png') !important;
    }

    .slide-img2 {
        width: 195px;
        height: 151px;
        position: absolute;
        right: 20px;
        top: 40px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url('./../assets/images/7-image2.png') !important;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    transform-origin: center center;
    position: relative;
    // width: 667px;
    // height: 375px;
    // margin-left: -146px;
    // margin-top: 146px;
    // margin-left: -146px;
    // margin-top: 146px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

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
  
  