

<template>
    <!-- Swiper -->
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide  slide-1">
                <div class="slide-img slide1-set">
                    <div class="slide1-img-cover"></div>
                </div>
            </div>
            <div class="swiper-slide  slide-2" id="bg-slide">
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
            <div class="swiper-slide slide-8">
                <div class="slide-img"></div>
            </div>

        </div>
    </div>
</template>
<script setup>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import { nextTick, onMounted, reactive, withDefaults, ref, toRefs } from 'vue';
import { getClientConfig } from '../utils/utils';
let emits = defineEmits(["update:offset"])
const clientWh = getClientConfig()

const props = defineProps({
    offset: Number,
    speed: Number
})
// let { offset } = toRefs(props)
let swiper
let top = 0
let totalHeight = 0
let swiperDomTotal

let first = true
let loop = false
let start = () => {

    if (first) {
        swiper[0].slideTo(1)
        first = false
    } else {
        emits("update:offset", props.speed)
        top = swiper[0].getTranslate()
        if (!loop) {
            let swiperDom = document.querySelectorAll('.bg-swiper .swiper-slide')
            console.log([...swiperDom].map(val => val.offsetWidth))
            swiperDomTotal = [...swiperDom].map(val => val.offsetWidth).reduce((acc, cur) => acc + cur)
            console.log(swiperDomTotal)
            animationFun(top)
            loop = true
        }

    }
}

onMounted(() => {

    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        freeMode: true,
        height: 422,
        on: {
            slideChangeTransitionEnd: function () {
                if (this.activeIndex === 1) {
                    console.log('transition')
                    // emits("update:offset", props.speed)
                    start()
                }
            },
        }

    });
    // dom 刷新时slide1的高度等于父组件swiper-wrapper，wrapper的高度等于剩余的高度

})

// nextTick(() => {
//     console.log(window.getComputedStyle(document.querySelector('#bg-slide')).width)
//     console.log(document.querySelector('#bg-slide').offsetWidth,)

//     setTimeout(() => {
//         const swiperDom = document.querySelectorAll('.bg-swiper .swiper-slide')
//         console.log([...swiperDom])
//         let sumDomW = [...swiperDom].reduce((acc, cur) => {
//             console.log(acc, cur.offsetWidth)
//             return acc + cur.offsetWidth
//         }, 0)
//         console.log(sumDomW)
//     }, 0)

// })


let lastSlideTop

const animationFun = (top) => {
    // console.log(top, props.offset)
    requestAnimationFrame(() => {
        // console.log(props.offset)
        if (props.offset) {
            if (Math.abs(top) < clientWh.height) {
                emits("update:offset", 0)
            }
            top = top + props.offset
            // 开始条件
            top = Math.abs(top) < clientWh.height ? -clientWh.height : top
            // 停止条件
            top = Math.abs(top) >= swiperDomTotal ? -swiperDomTotal : top
            // console.log(top)
            swiper[0].setTranslate(top)
        }
        animationFun(top)

    })
}


defineExpose({
    start
})



</script>
<style scoped lang="scss">
@function grid-width($w, $h, $H) {
    @return calc($w /$h) * $H;
}

// 图片高度
$slide1: (
    w:1815px,
    h: 844px
);
$slide2: (
    w:2048px,
    h: 669px
);
$slide3: (
    w:1970px,
    h: 844px
);
$slide4: (
    w:2048px,
    h: 618px
);
$slide5: (
    w:2048px,
    h: 691px
);
$slide6: (
    w:1907px,
    h: 844px
);
$slide7: (
    w:1970px,
    h: 844px
);
$slide8: (
    w:1692px,
    h: 844px
);
$h: 422px;

.slide-1,
.slide-2,
.slide-3,
.slide-4,
.slide-5,
.slide-6,
.slide-7,
.slide-8 {
    height: 422px;


    .slide-img {
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;

    }
}

.slide-1 {
    .slide1-set {
        overflow: hidden;
        position: relative;

        .slide1-img-cover {
            width: grid-width(map-get($slide1, w), map-get($slide1, h), $h);
            height: 100%;
            background-image: url('./../assets/images/11.jpeg') !important;
            background-size: contain;
            left: -100px;
            top: -10px;
            position: absolute;
        }
    }
}

.slide-2 {
    width: grid-width(map-get($slide2, w), map-get($slide2, h), $h) !important;
    // width: map-get($slide2, w)/map-get($slide2, h) * $h !important;

    height: 422px;

    .slide-img {
        background-image: url('./../assets/images/22.jpeg') !important;
    }
}

.slide-3 {
    width: grid-width(map-get($slide3, w), map-get($slide3, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/33.jpeg') !important;
    }
}

.slide-4 {
    width: grid-width(map-get($slide4, w), map-get($slide4, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/44.jpeg') !important;
    }
}

.slide-5 {
    width: grid-width(map-get($slide5, w), map-get($slide5, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/55.png') !important;
    }
}

.slide-6 {
    width: grid-width(map-get($slide6, w), map-get($slide6, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/66.jpeg') !important;
    }
}

.slide-7 {
    width: grid-width(map-get($slide7, w), map-get($slide7, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/77.jpeg') !important;
    }
}

.slide-8 {
    width: grid-width(map-get($slide8, w), map-get($slide8, h), $h) !important;

    .slide-img {
        background-image: url('./../assets/images/88.jpeg') !important;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    // transform-origin: center center;
    position: relative;

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
  
  