import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/base.css'
import 'swiper/swiper-bundle.css';
import './assets/animation.css'
const app = createApp(App)
app.mount('#app')
// 隐藏微信底部
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideToolbar');
    });
