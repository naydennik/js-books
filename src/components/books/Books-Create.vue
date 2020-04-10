<template>
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Create Book</h1>
        <br />
      </div>
    </div>
    <form @submit.prevent="submitHandler">
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <h4>Book Title</h4>
            <input
              class="form-control"
              id="title"
              type="text"
              name="title"
              v-model="title"
              @blur="$v.title.$touch"
            />
            <template v-if="$v.title.$error">
              <div class="alert alert-danger" v-if="!$v.title.required">This field is required!</div>
              <div class="alert alert-danger" v-else-if="!$v.title.titlePattern">
                The title should start with capital letter and should be at least
                two symbols long!
              </div>
            </template>
          </div>
          <div class="form-group">
            <h4>Book Subtitle</h4>
            <input
              class="form-control"
              id="subtitle"
              type="text"
              name="subtitle"
              v-model="subtitle"
              @blur="$v.subtitle.$touch"
            />
            <template v-if="$v.subtitle.$error">
              <div class="alert alert-danger" v-if="!$v.subtitle.required">This field is required!</div>
              <div class="alert alert-danger" v-else-if="!$v.subtitle.subtitlePattern">
                The subtitle should start with capital letter and should be at least
                two symbols long!
              </div>
            </template>
          </div>
          <div class="form-group">
            <h4>Author</h4>
            <input
              class="form-control"
              id="author"
              type="text"
              name="author"
              v-model="author"
              @blur="$v.author.$touch"
            />
            <template v-if="$v.author.$error">
              <div class="alert alert-danger" v-if="!$v.author.required">This field is required!</div>
              <div class="alert alert-danger" v-else-if="!$v.author.authorPattern">
                The author's name should start with capital letter and should be at
                least 2 symbols long!
              </div>
            </template>
          </div>
          <div class="form-group">
            <h4>Image</h4>
            <input
              class="form-control"
              id="image"
              type="text"
              name="imageUrl"
              v-model="imageUrl"
              @blur="$v.imageUrl.$touch"
            />
            <br />
            <img id="img" :src="imageUrl" :alt="title" />
            <template v-if="$v.imageUrl.$error">
              <div class="alert alert-danger" v-if="!$v.imageUrl.required">
                This field is required! Please enter a correct URL! If the link is
                correct, you will see a preview of the image.
              </div>
            </template>
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
              v-model="description"
              @blur="$v.description.$touch"
            ></textarea>
            <template v-if="$v.description.$error">
              <div
                class="alert alert-danger"
                v-if="!$v.description.required"
              >This field is required!</div>
              <div
                class="alert alert-danger"
                v-else-if="!$v.description.descriptionPattern"
              >The description should be more than 10 symbols!</div>
            </template>
          </div>
          <div class="form-group">
            <h4>ISBN</h4>
            <input
              class="form-control"
              id="isbn"
              type="text"
              name="isbn"
              v-model="isbn"
              @blur="$v.isbn.$touch"
            />
            <template v-if="$v.isbn.$error">
              <div class="alert alert-danger" v-if="!$v.isbn.required">This field is required!</div>
              <div class="alert alert-danger" v-else-if="!$v.isbn.isbnPattern">
                ISBN should contain only digits and should be exactly 13 symbols
                long!
              </div>
            </template>
          </div>
          <div class="form-group">
            <h4>Publisher</h4>
            <input
              class="form-control"
              id="publisher"
              type="text"
              name="publisher"
              v-model="publisher"
              @blur="$v.publisher.$touch"
            />
            <template v-if="$v.publisher.$error">
              <div class="alert alert-danger" v-if="!$v.publisher.required">This field is required!</div>
              <div
                class="alert alert-danger"
                v-else-if="!$v.publisher.publisherPattern"
              >The publisher's name should be at least 2 symbols long!</div>
            </template>
          </div>
          <div class="form-group">
            <h4>Published</h4>
            <input
              class="form-control"
              id="published"
              type="text"
              name="published"
              v-model="published"
              @blur="$v.published.$touch"
            />
            <template v-if="$v.published.$error">
              <div class="alert alert-danger" v-if="!$v.published.required">This field is required!</div>
              <div
                class="alert alert-danger"
                v-else-if="!$v.published.publishedPattern"
              >Please enter correct date in the format 'yyyy-mm-dd'!</div>
            </template>
          </div>
          <div class="form-group">
            <h4>Pages</h4>
            <input
              class="form-control"
              id="pages"
              type="text"
              name="pages"
              v-model="pages"
              @blur="$v.pages.$touch"
            />
            <template v-if="$v.pages.$error">
              <div class="alert alert-danger" v-if="!$v.pages.required">This field is required!</div>
              <div
                class="alert alert-danger"
                v-else-if="!$v.pages.pagesPattern"
              >The number of pages should be a digit!</div>
            </template>
          </div>
          <div class="form-group">
            <h4>Official Website</h4>
            <input
              class="form-control"
              id="website"
              type="url"
              name="website"
              v-model="website"
              @blur="$v.website.$touch"
            />
            <template v-if="$v.website.$error">
              <div class="alert alert-danger" v-if="!$v.website.required">This field is required!</div>
            </template>
          </div>
          <input type="submit" class="btn btn-primary" value="Create" :disabled="$v.$invalid" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { booksServices } from "@/services/booksService";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [booksServices, validationMixin],

  data() {
    return {
      title: "",
      subtitle: "",
      author: "",
      imageUrl: "",
      description: "",
      isbn: "",
      publisher: "",
      published: "",
      pages: "",
      website: ""
    };
  },
  validations: {
    title: {
      required,
      titlePattern(title) {
        return /^[A-Z]{1}.+$/.test(title);
      }
    },
    subtitle: {
      required,
      subtitlePattern(subtitle) {
        return /^[A-Z]{1}.+$/.test(subtitle);
      }
    },
    author: {
      required,
      authorPattern(author) {
        return /^[A-Z][A-Za-z ,]+$/.test(author);
      }
    },
    imageUrl: {
      required
    },
    description: {
      required,
      descriptionPattern(description) {
        return /^.{10,}$/.test(description);
      }
    },
    isbn: {
      required,
      isbnPattern(isbn) {
        return /^[\d]{13}$/.test(isbn);
      }
    },
    publisher: {
      required,
      publisherPattern(publisher) {
        return /^.{2,}$/.test(publisher);
      }
    },
    published: {
      required,
      publishedPattern(published) {
        return /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
          published
        );
      }
    },
    pages: {
      required,
      pagesPattern(pages) {
        return /^[\d]+$/.test(pages);
      }
    },
    website: {
      required
    }
  },
  methods: {
    submitHandler() {
      const model = {
        title: this.$v.title.$model,
        subtitle: this.$v.subtitle.$model,
        author: this.$v.author.$model,
        imageUrl: this.$v.imageUrl.$model,
        description: this.$v.description.$model,
        isbn: this.$v.isbn.$model,
        publisher: this.$v.publisher.$model,
        published: this.$v.published.$model,
        pages: this.$v.pages.$model,
        website: this.$v.website.$model
      };

      this.createBook(model);
    }
  }
};
</script>

<style></style>
