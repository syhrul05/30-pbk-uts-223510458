import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostComponent from '../components/PostComponent.vue'
import TodosComponent from '../components/TodosComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/post',
    component: PostComponent,
    props: { title: 'Post Title', content: 'This is a post content.' }
  },
  {
    path: '/todos',
    component: TodosComponent,
    props: { title: 'Todos List', todos: [{ id: 1, text: 'Learn Vue' }, { id: 2, text: 'Build an App' }] }
  },
  { path: '/:pathMatch(.*)*', redirect: '/post' } // Redirect to /post by default for unknown paths
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
