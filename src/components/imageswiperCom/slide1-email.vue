<template>
    <div class="slide1-mail" @click="emailEven">
        <div class="slide1-mail-back" v-if="showBack"></div>
        <!-- <div class="slide1-mail-before rotationX" v-if="showOpenEmailTop"></div> -->
        <div class="slide1-mail-paper" :class="{ 'flyOut': isBottomOut }"></div>
        <div class="slide1-mail-bottom"></div>
        <div class="slide1-mail-before" ref="openDom"
            :class="{ 'slide1-mail-before-anmiation': slide1MailBeforeAnimation }"></div>
        <div class="slide1-mail-tip" v-if="showTip"></div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
let slide1MailBeforeAnimation = ref(false)
let isBottomOut = ref(false)
let showBack = ref(false)
let showTip = ref(true)
// let showOpenEmailTop = ref(false)
let emailEven = () => {
    showTip.value = false
    slide1MailBeforeAnimation.value = true



}
let openDom = ref(null)
onMounted(() => {
    console.log(openDom.value)
    openDom.value.addEventListener("animationend", () => {
        console.log('11')
        showBack.value = true
        // openDom.value.style.opacity = 0
        // showOpenEmailTop.value = true
        isBottomOut.value = true
        // setTimeout(() => {

        // }, 500)
    });

})


</script>
<style scoped lang="scss">
.slide1-mail {
    width: 225px;
    height: 224.5px;
    // background: url(./../../assets/images/email-close-bottom.png) no-repeat 0 77px;
    // background-size: contain;
    position: absolute;
    top: 24px;
    right: 22px;

    .slide1-mail-paper {
        width: 225px;
        height: 224.5px;
        background: url(./../../assets/images/email-close-bottom.png) no-repeat 0 77px;
        background-size: contain;
        position: absolute;
    }

    .slide1-mail-bottom,
    .slide1-mail-back {
        width: 225px;
        height: 224.5px;
        background: url(./../../assets/images/email-bottom.png) no-repeat center;
        position: absolute;
        bottom: 0;
        left: 0;
        background-size: contain;

    }

    .slide1-mail-bottom {
        transform: translateZ(1px);
    }

    .slide1-mail-back {
        height: 165px;
        background: url(./../../assets/images/email-back.png) no-repeat center;

    }

    .flyOut {
        animation: slideOutUp .5s forwards;
    }




    .slide1-mail-before {
        width: 225.5px;
        height: 85px;
        background: url(./../../assets/images/email-top.png) no-repeat center;
        position: absolute;
        bottom: 56px;
        left: 0;
        background-size: contain;
        // transition: all 1s;

    }

    .rotationX {
        transform-origin: center top;
        transform: rotateX(-180deg);
        opacity: 0;
    }

    .slide1-mail-before-anmiation {
        transform-origin: center top;
        // transition-property: all;
        // transition: all 1s;
        animation: openMail 1s forwards;

    }

    @keyframes openMail {
        0% {
            transform: rotateX(0deg);
        }

        100% {
            transform: rotateX(-180deg);
            z-index: -1;
        }
    }

    .slide1-mail-tip {
        width: 23px;
        height: 23px;
        background: url(./../../assets/images/click-tip.png) no-repeat center center;
        background-position: 50% 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -11.5px;
        margin-top: 11.5px;
        background-size: contain;
        border-radius: 100%;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: flash;

    }
}
</style>