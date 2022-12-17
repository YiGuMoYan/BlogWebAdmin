import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import MainView from '@/views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView,
    children: [{
      path: '/home',
      component: HomeView
    },
    {
      path: '/user',
      component: UserView
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
