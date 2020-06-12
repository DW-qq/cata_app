import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'*/
const Home = ()=> import('../views/Home/Home')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hot',
    name: 'Hot',
    component: () => import('../views/Hot/Hot')
  },
    {
      path: '/my',
      name: 'My',
      component: () => import('../views/My/My')
    }
]

const router = new VueRouter({
  routes,
})

export default router
