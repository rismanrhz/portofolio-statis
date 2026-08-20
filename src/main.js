import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-out-cubic',
})

app.mount('#app')