import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/base.css'
import 'swiper/swiper-bundle.css';
import './assets/animation.css'
const app = createApp(App)
app.mount('#app')
// 隐藏微信底部
function onBridgeReady(){
    WeixinJSBridge.call('hideOptionMenu');
   }
   
   if (typeof WeixinJSBridge == "undefined"){
       if( document.addEventListener ){
           document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
       }else if (document.attachEvent){
           document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
           document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
       }
   }else{
       onBridgeReady();
   }