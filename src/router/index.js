import { createRouter, createWebHistory } from "vue-router"
import store from "../store"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/tensorflow",
    name: "Tensorflow",
    component: () => import("../views/Tensorflow.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../views/Calendar.vue"),
  },
  {
    path: "/dc-heros",
    name: "DcHeros",
    component: () => import("../views/DcHeros.vue"),
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: () => import("../views/Markdown.vue"),
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: () => import("../views/Carousel.vue"),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () => import("../views/Calculator.vue"),
  },
  {
    path: "/reusable-modal",
    name: "ReusableModal",
    component: () => import("../views/ReusableModal.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/Chat.vue"),
    meta: { middleware: "auth" },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = require(`../middleware/${to.meta.middleware}`)
    middleware ? middleware.default(next, store) : next()
  } else next()
})

export default router
