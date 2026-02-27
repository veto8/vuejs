import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Securities from "../views/Securities.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/securities",
      name: "Securities",
      component: Securities,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
