import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'

// Définition des routes avec l'url, le nom et le composant associé
const routes = [
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/users', name: 'Users', component: UsersView },
  { path: '/', redirect: '/home' },
]

// Création du router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
