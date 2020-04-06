<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" exact class="navbar-brand">JS Books</router-link>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <template v-if="!isAuthenticated">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link"
                >Register</router-link
              >
            </li>
          </template>
          <template v-else
            ><li class="nav-item">
              <a class="nav-link" @click="onLogout()">Logout</a>
            </li>
          </template>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              aria-expanded="true"
              aria-haspopup="true"
              data-toggle="dropdown"
              @click="toggle()"
              >Books</a
            >
            <div
              class="dropdown"
              style="left: 0px; top: 0px; position: absolute; transform: translate3d(0px, 40px, 0px);"
              x-placement="bottom-start"
              @click="toggle()"
              v-bind:class="{
                'dropdown-menu': !isActive,
                'dropdown-menu show': isActive
              }"
            >
              <router-link to="/books" class="dropdown-item"
                >All Books</router-link
              >
              <template v-if="isAdmin">
                <div class="dropdown-divider" @click="toggle()"></div>
                <router-link to="/books/create" class="dropdown-item"
                  >Create Book</router-link
                >
              </template>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { sign } from "@/services/authService";

export default {
  mixins: [sign],
  data: () => {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    onLogout() {
      this.logout().then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style></style>
