

<template>
    <!-- Swiper -->
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide image-slide-1">
                <div class="layer-bg"></div>
                <transition appear enter-active-class="animate__animated animate__bounceInDown">
                    <div class="slide-img"></div>
                </transition>
                <slide1-email-text></slide1-email-text>
                <slide1-email />
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
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
                <div class="slide-text"></div>
            </div>
            <!-- 需要修改 -->
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
                <div class="slide-text"></div>
            </div>
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
                <div class="slide-text"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
                <div class="slide-img2"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
                <div class="slide-img2"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
                <div class="slide-img2"></div>
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
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
                <div class="slide-text"></div>
            </div>
            <div class="swiper-slide slide-7">
                <div class="slide-img"></div>
                <div class="slide-img2"></div>
            </div>
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
                <div class="slide-text"></div>
            </div>


        </div>
    </div>
</template>
<script setup>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import slide1Email from './imageswiperCom/slide1-email.vue'
import slide1EmailText from './imageswiperCom/slide1-email-text.vue'
import { nextTick, onMounted, reactive, ref } from 'vue';
import { getClientConfig } from './../utils/utils'
let emits = defineEmits(["update:offset"])
const clientWh = getClientConfig()
let swiperDomTotal // 总高度 
const props = defineProps({
    offset: Number,
    speed: Number
})
let show = ref(false)


let swiper
let loop = false
let first = true
let start = () => {
    // console.log(111, swiper)
    if (first) {
        swiper[1].slideTo(1)
        first = false
    } else {
        emits("update:offset", props.speed)
        swiperDomTotal = swiper[1].slidesGrid[swiper[1].slidesGrid.length - 1]
        if (!loop) {
            top = swiper[1].getTranslate()
            animationFun(top)
            loop = true
        }
    }

    // animationFun()

}

onMounted(() => {

    const swiperDom = document.querySelector('.swiper')
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        freeMode: true,
        allowTouchMove: false,
        on: {
            slideChangeTransitionEnd: function () {
                // console.log('transition')
                if (this.activeIndex === 1) {
                    // this.allowTouchMove = false
                    start()
                }
            },
        }

    });


})
// nextTick(() => {

// })
let top = 0
const animationFun = () => {
    requestAnimationFrame(() => {
        // console.log(top, props.offset)
        if (props.offset) {
            top = top + props.offset
            if (Math.abs(top) < clientWh.height) {
                emits("update:offset", 0)
                top = Math.abs(top) < clientWh.height ? -clientWh.height : top
            }
            // 停止条件
            top = Math.abs(top) >= swiperDomTotal ? -swiperDomTotal : top


            swiper[1].setTranslate(top)

        }
        animationFun()

    })
}
const dragStart = (y) => {
    y = y > 0 ? 0 : y
    swiper[1].setTranslate(y)

}

defineExpose({
    start,
    dragStart
})




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
        left: 46px;
        top: 82px;
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
    overflow: visible;

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
        left: 468px;
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
        left: 72px;
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

.slide-8 {
    .slide-img {
        width: 399.5px;
        height: 301.5px;
        background-size: contain;
        background-image: url('./../assets/images/8-image.png') !important;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    transform-origin: center center;
    position: relative;

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
  
  