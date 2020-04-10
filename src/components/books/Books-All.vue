<template>
  <div class="row">
    <div class="col-lg-4" v-for="book in books" :key="book._id">
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
</style>
