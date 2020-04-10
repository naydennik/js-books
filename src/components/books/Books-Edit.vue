<template>
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Edit Book</h1>
        <br />
      </div>
      <router-link :to="{ name: 'allBooks' }" class="btn btn-primary">Return to books</router-link>
      <br />
    </div>
    <form @submit.prevent="editHandler">
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <h4>Book Title</h4>
            <input class="form-control" id="title" type="text" name="title" v-model="book.title" />
          </div>
          <div class="form-group">
            <h4>Book Subtitle</h4>
            <input
              class="form-control"
              id="subtitle"
              type="text"
              name="subtitle"
              v-model="book.subtitle"
            />
          </div>
          <div class="form-group">
            <h4>Author</h4>
            <input class="form-control" id="author" type="text" name="author" v-model="book.author" />
          </div>
          <div class="form-group">
            <h4>Image</h4>
            <input
              class="form-control"
              id="image"
              type="text"
              name="imageUrl"
              v-model="book.imageUrl"
            />
            <br />
            <img id="img" :src="book.imageUrl" :alt="book.title" />
          </div>
          <div class="form-group">
            <h4>Description</h4>
            <textarea
              cols="20"
              rows="10"
              class="form-control"
              id="description"
              type="text"
              name="description"
              v-model="book.description"
            ></textarea>
          </div>
          <div class="form-group">
            <h4>ISBN</h4>
            <input class="form-control" id="isbn" type="text" name="isbn" v-model="book.isbn" />
          </div>
          <div class="form-group">
            <h4>Publisher</h4>
            <input
              class="form-control"
              id="publisher"
              type="text"
              name="publisher"
              v-model="book.publisher"
            />
          </div>
          <div class="form-group">
            <h4>Published</h4>
            <input
              class="form-control"
              id="published"
              type="text"
              name="published"
              v-model="book.published"
            />
          </div>
          <div class="form-group">
            <h4>Pages</h4>
            <input
              class="form-control"
              id="new-pages"
              type="text"
              name="pages"
              v-model="book.pages"
            />
          </div>
          <div class="form-group">
            <h4>Official Website</h4>
            <input
              class="form-control"
              id="new-website"
              type="url"
              name="website"
              v-model="book.website"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Edit Book" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { booksServices } from "@/services/booksService";

export default {
  mixins: [booksServices],

  data() {
    return {
      book: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.getBookDetails(this.id).then(res => (this.book = res));
  },
  methods: {
    editHandler() {
      this.editBook(this.id, this.book);
    }
  }
};
</script>

<style></style>
