<template>
  <div class="row">
    <template v-if="this.isLoading">
      <div class="loader">
        <h3>Loading...</h3>
        <br />
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </template>
    <div class="col-lg-4" v-for="book in books" :key="book._id" v-else>
      <h2 class="card-header">{{ book.title }}</h2>
      <div class="card-body">
        <h3 class="card-title">{{ book.subtitle }}</h3>
        <h4 class="card-title">Author: {{ book.author }}</h4>
      </div>
      <img style="height: 400px; width: 300px;" :src="book.imageUrl" :alt="book.title" />
      <br />
      <p class="lead">
        <router-link
          :to="{name: 'bookDetails', params: {id: book._id}}"
          class="btn btn-primary"
          tag="button"
        >View Details</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { booksServices } from "@/services/booksService";
export default {
  mixins: [booksServices],
  created() {
    this.getAllBooks();
  }
};
</script>

<style scoped>
#allBooks {
  flex-shrink: 2;
  padding: 50px;
  margin: auto;
  position: absolute;
  bottom: 50px;
  left: 40%;
  width: auto;
}

.lead {
  margin-top: 5px;
}

.btn-primary {
  color: #fff;
  background-color: #325d88;
  border-color: #325d88;
}

.col-lg-4 {
  padding: 50px;
}

.loader {
  margin: auto;
  padding: 200px;
}
</style>
