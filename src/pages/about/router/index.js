import Vue from "vue";
import VueRouter from "vue-router";
import about from "@/components/about/about.vue";
import abc from "@/components/about/abc.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: about,
  },
  {
    path: "/abc",
    component: abc,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
