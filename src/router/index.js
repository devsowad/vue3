import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
