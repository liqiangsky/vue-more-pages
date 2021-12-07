import Vue from "vue";
import App from "./index.vue";
import store from "./store";
import router from "./router";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
