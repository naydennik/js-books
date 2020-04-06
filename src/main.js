import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import axiosPlugin from "@/plugins/axiosPlugin";
import { authServices } from "@/services/authService";

Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin);
Vue.use(axiosPlugin);

Vue.mixin(authServices);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
