import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/base.css'
import 'swiper/swiper-bundle.css';
import './assets/animation.css'
import pinia  from './store';
const app = createApp(App)
app.use(pinia).mount('#app')
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

   ; (function () {

    try {
        isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if (fn.isIOS) {
            // window.history.pushState({}, "title", "#");
            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                WeixinJSBridge.call('hideToolbar');        // 隐藏底部状态栏
                WeixinJSBridge.call('hideOptionMenu');     // 隐藏右上角的三个点的选项
                console.log('ios');
                // WeixinJSBridge.call('showToolbar');        // 显示底部状态栏
                // WeixinJSBridge.call('showOptionMenu');     // 显示右上角的三个点的选项
            });

        }
    } catch (e) {
        //TODO handle the exception
    }



})();
