import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "/blogs",
        name: "BlogList",
        component: () => import("../views/Blog/BlogList.vue")
      },
      {
        path: "/projects",
        name: "ProjectList",
        component: () => import("../views/Project/ProjectList.vue")
      }
    ]
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
