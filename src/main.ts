import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app=createApp(App)
const pinia=createPinia()
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')


