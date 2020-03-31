import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vuetify from "./plugins/vuetify";
import router from "@/plugins/router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
