<template>
    <div class="slide1-email-text" v-if="showText">
        <div class="slide1-email-view">
            <img src="./../../assets/images/mail-long-text.png" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from './../../store/imageSwiper/index.js'
const store = useCounterStore()
console.log(store, 'store')
const count = computed(() => store.count)


let showText = count
console.log(showText)


</script>
<style scoped lang="scss">
@keyframes textSlide {
    0% {
        transform: translateY(220px);
    }

    100% {
        transform: translateY(-617px);
    }
}

.slide1-email-text {
    width: 216px;
    height: 324.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 15px;
    background: url(./../../assets/images/slide1-email-text.png) no-repeat no-repeat;
    background-size: contain;
    z-index: 2;
    animation: slideInDown 1s forwards;


    .slide1-email-view {
        display: inline-block;
        width: 180px;
        height: 220px;
        overflow: hidden;

        img {
            width: 180px;
            height: 617px;
            animation: textSlide 15s infinite linear;
        }
    }
}
</style>