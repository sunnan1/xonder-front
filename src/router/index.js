import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/details",
    name: "Details",
    component: () => import("@/views/layout/admin/Details.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/pages/website/Home.vue"),
  },
  {
    path: "/business-details",
    name: "BusinessDetails",
    component: () => import("@/views/layout/admin/BusinessDetails.vue"),
  },
  {
    path: "/financial-details",
    name: "FinancialDetails",
    component: () => import("@/views/layout/admin/Financial.vue"),
  },
  {
    path: "/upload-photo",
    name: "UploadPhoto",
    component: () => import("@/views/layout/admin/Photo.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;