import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import MainView from '@/views/MainView.vue'
import MallView from '@/views/MallView.vue'
import PageOneView from '@/views/PageOneView.vue'
import PageTwoView from '@/views/PageTwoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: HomeView
      },
      {
        path: 'user',
        component: UserView
      },
      {
        path: 'mall',
        component: MallView
      },
      {
        path: 'page1',
        component: PageOneView
      },
      {
        path: 'page2',
        component: PageTwoView
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
