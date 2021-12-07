import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/components/home/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: home,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
