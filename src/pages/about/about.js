import Vue from "vue";
import App from "./index.vue";
import store from "./store";
import router from "./router";
require(["../../../amd/b"], function (index) {
  console.log(index.fun());
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
