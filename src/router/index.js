import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoadingView from "@/views/LoadingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading",
      component: LoadingView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
