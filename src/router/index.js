import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
    name: "LOGIN",
    path: "/login",
    component: () => import("@/views/login/Index")
  }, {
    path: "/admin",
    redirect: { name: "THEME_COLOR" },
    component: () => import("@/views/frame/Index"),
    children: [{
      name: "THEME_COLOR",
      path: "themeColor",
      component: () => import("@/views/themeColor/Index")
    }]
  }, {
    path: "*",
    redirect: { name: "THEME_COLOR" }
  }]
});

export default router;
