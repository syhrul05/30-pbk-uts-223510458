import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostComponent from '../components/PostComponent.vue'
import TodosComponent from '../components/TodosComponent.vue'
import AlbumsComponent from '../components/AlbumsComponent.vue'
import AlbumPhotosComponent from '../components/AlbumPhotosComponent.vue'
import PhotoDetailComponent from '../components/PhotoDetailComponent.vue' // Import PhotoDetailComponent

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
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
  {
    path: '/albums',
    name: 'albums',
    component: AlbumsComponent
  },
  {
    path: '/albums/:id',
    name: 'album-photos',
    component: AlbumPhotosComponent,
    props: true
  },
  {
    path: '/photos/:id',
    name: 'photo-detail',
    component: PhotoDetailComponent,
    props: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/post' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
