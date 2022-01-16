import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Container",
    component: () => import("../components/Container"),
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () => import("../views/Mypage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
