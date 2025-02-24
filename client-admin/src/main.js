import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(router)

app.mount('#app')
