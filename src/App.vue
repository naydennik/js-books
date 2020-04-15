<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer v-bind:creator="creator"></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/shared/Header";
import AppFooter from "./components/shared/Footer";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter
  },

  data: () => {
    return {
      creator: {
        name: "Nayden Nikolov",
        email: "mailto:naydennik@gmail.com?",
        fbUrl: "https://www.facebook.com/naydennik"
      }
    };
  }
};
</script>
<style>
#header {
  padding-bottom: 100px;
  height: 100px;
}

.btn {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}

#img {
  width: 100px;
  height: 100px;
}

h4 {
  margin-top: 20px;
}
</style>
