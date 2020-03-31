import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/components/Home";
import About from "@/components/About";
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";
import BooksCreate from "@/components/books/Books-Create";

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/create", component: BooksCreate }
];

export default new VueRouter({
  mode: "history",
  routes
});
