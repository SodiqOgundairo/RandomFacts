import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RandomFacts from '../components/RandomFacts.vue'


const routes = [
  { 
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { 
    path: '/randomfacts',
    name: 'randomfacts',
    component: RandomFacts,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})


export default router



