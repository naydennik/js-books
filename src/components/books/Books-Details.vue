<template>
  <div class="row">
    <div class="col-lg-4">
      <h3 class="card-header">{{book.title}}</h3>
      <div class="card-body">
        <h4 class="card-title">{{book.subtitle}}</h4>
        <h4 class="card-title">Author: {{book.author}}</h4>
      </div>
      <img style="height: 400px; width: 300px;" :src="book.imageUrl" :alt="book.title" />
      <div class="card-body">
        <p class="card-text">{{book.description}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ISBN: {{book.isbn}}</li>
        <li class="list-group-item">Publisher: {{book.publisher}}</li>
        <li class="list-group-item">Piblished on: {{book.published}}</li>
        <li class="list-group-item">Pages: {{book.pages}}</li>
        <li class="list-group-item">
          <a href>{{book.website}}</a>
        </li>
      </ul>
      <div v-if="isAdmin">
        <router-link
          :to="{name: 'bookEdit', params: {id: book._id}}"
          class="btn btn-primary btn-lg"
          tag="button"
        >Edit</router-link>
        <button class="btn btn-primary btn-lg" @click="delBook">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { booksServices } from "@/services/booksService";
import { authServices } from "@/services/authService";
export default {
  mixins: [booksServices, authServices],
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created() {
    this.getBookDetails(this.id);
  },
  methods: {
    delBook() {
      this.deleteBook(this.id).then(this.$router.push({ name: "allBooks" }));
    }
  }
};
</script>

<style></style>
