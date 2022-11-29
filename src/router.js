import { createRouter, createWebHistory } from 'vue-router'
import ArticleNewPage from './pages/articles/ArticleNewPage.vue'

const routes = [
  {
    path: '/articles/new',
    name: 'ArticleNewPage',
    component: ArticleNewPage
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
