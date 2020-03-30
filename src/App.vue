<template>
  <div>
    <app-header></app-header>
    <app-about></app-about>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppAbout from "./components/About";
import AppHeader from "./components/shared/Header";
import AppFooter from "./components/shared/Footer";

export default {
  name: "App",

  components: {
    AppHeader,
    AppAbout,
    AppFooter
  },

  data: () => ({
    //
  })
};
</script>
