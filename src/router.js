import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/components/Home";
import About from "@/components/About";
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";
import BooksAll from "@/components/books/Books-All";
import BooksCreate from "@/components/books/Books-Create";
import BooksDetails from "@/components/books/Books-Details";
import BooksEdit from "@/components/books/Books-Edit";
import NotFound from "@/components/shared/NotFound";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", component: About },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/books", component: BooksAll },
  { path: "/books/create", component: BooksCreate },
  { path: "/books/details/:id", component: BooksDetails },
  { path: "/books/details/:id/edit", component: BooksEdit },
  { path: "*", component: NotFound },
];

export default new VueRouter({
  mode: "history",
  routes,
});
