import { createRouter, createWebHistory } from 'vue-router'
import { useMonitorSize } from './composable/monitor-size.js'
import WebLandingPg from './components/(Web)/WebLandingPg.vue'
import GetStarted from './components/(Web)/GetStarted.vue'
import MobileLandingPg from './components/(Mobile)/MobileLandingPg.vue'

const sizes = useMonitorSize()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => (sizes.isMobile.value ? MobileLandingPg : WebLandingPg) },
    { path: '/GetStarted', component: GetStarted },
  ],
})

export default router
