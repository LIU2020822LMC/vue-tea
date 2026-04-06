import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/MyView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
