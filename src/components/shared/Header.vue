<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand">JS Books</a>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">Login <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Logout</a>
          </li>
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
              <a class="dropdown-item">All Books</a>
              <div class="dropdown-divider" @click="toggle()"></div>
              <a class="dropdown-item">Create Book</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style></style>
