import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/base.css'
import 'swiper/swiper-bundle.css';
import vue2Touch from 'vue2-touch'
import test from './utils/test'
console.log(vue2Touch)
const app = createApp(App)
app.use(vue2Touch).use(test).mount('#app')

