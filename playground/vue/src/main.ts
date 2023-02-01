import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import persistence from 'pinia-plugin-persistence'

const pinia = createPinia()
pinia.use(persistence)

createApp(App).use(pinia).mount('#app')
