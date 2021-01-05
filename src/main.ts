import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import { library } from  "@fortawesome/fontawesome-svg-core"
// import {

// } from "@fortawesome/free-solid-svg-icons"
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
