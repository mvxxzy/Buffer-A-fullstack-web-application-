import { createApp } from 'vue'
import './assets/base.css'
import App from './App.vue'
import navBar from './components/NavBar.vue'
import { Icon } from '@iconify/vue'
import router from './router'

const app = createApp(App)
app.component('NavBar', navBar)
app.component('Icon', Icon)
app.use(router)
app.mount('#app')
