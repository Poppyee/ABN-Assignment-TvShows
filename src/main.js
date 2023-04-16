import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/styles/main.css";
import App from './App.vue'
import router from './router.js'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
