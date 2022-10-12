import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/layout/admin/Details.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/pages/website/Home.vue"),
    meta: { guestOnly: true },
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;