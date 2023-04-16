import HomePage from './pages/Home'
import FavouriteShow from './pages/FavouriteShow'
import ChosenTVShow from './pages/ChosenTVShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage,
    alias: '/home'
  },
  {
    path: '/favouriteShow',
    component: FavouriteShow
  },
  {
    path: '/chosenTVShow/:id',
    component: ChosenTVShow,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
