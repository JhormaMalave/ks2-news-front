import { createRouter, createWebHistory } from 'vue-router';
import ArticleNewPage from './pages/articles/ArticleNewPage.vue';
import HomeIndexPage from './pages/home/HomeIndexPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomeIndexPage',
    component: HomeIndexPage
  },{
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
