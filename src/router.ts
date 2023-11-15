import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import ArtSupply from "./ArtSupply.vue";
import Book from "./Book.vue";
import Kitchenware from "./Kitchenware.vue";
import Music from "./Music.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/artsupplies",
    component: ArtSupply
  },
  {
    path: "/books",
    component: Book,
  },
  {
    path: "/kitchenware",
    component: Kitchenware,
  },
  {
    path: "/music",
    component: Music,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
