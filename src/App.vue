<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
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

  data: () => ({
    //
  })
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
