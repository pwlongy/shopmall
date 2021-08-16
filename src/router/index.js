import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("views/home/home.vue")
  },
  {
    path: "/category",
    component: () => import("views/category/category.vue")
  },
  {
    path: "/shopcart",
    component: () => import("views/shopcart/shopcart.vue")
  },
  {
    path: "/profile",
    component: () => import("views/profile/profile.vue")
  },
  {
    path: "/detail/:id",
    component: () => import("views/detail/Detail.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
