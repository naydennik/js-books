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

function guardMyroute(to, from, next) {
  let isAuthenticated = sessionStorage.getItem("authtoken") ? true : false;

  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/"); // go to home page;
  }
}

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/register", name: "register", component: Register },
  { path: "/login", name: "login", component: Login },
  {
    path: "/books",
    name: "allBooks",
    beforeEnter: guardMyroute,
    component: BooksAll
  },
  {
    path: "/books/create",
    name: "create",
    beforeEnter: guardMyroute,
    component: BooksCreate
  },
  {
    path: "/books/:id",
    name: "bookDetails",
    beforeEnter: guardMyroute,
    component: BooksDetails
  },
  {
    path: "/books/edit/:id",
    name: "bookEdit",
    beforeEnter: guardMyroute,
    component: BooksEdit
  },

  { path: "*", name: "notFound", component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes
});
