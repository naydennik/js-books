<template>
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Edit Book</h1>
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
              id="new-make"
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
              id="new-model"
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
              id="new-author"
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
              id="new-image"
              type="text"
              name="imageUrl"
              v-model="imageUrl"
              @blur="$v.imageUrl.$touch"
            />
            <br />
            <img id="img" src="imageUrl.value" />
            <template v-if="$v.imageUrl.$error">
              <div class="alert alert-danger" v-if="!$v.imageUrl.required">
                This field is required! Please enter a correct URL! If the link is
                correct, you will see a preview of the image.
              </div>
            </template>
          </div>

          <!-- TODO -->

          <div class="form-group">
            <h4>Description</h4>
            <textarea
              cols="20"
              rows="10"
              class="form-control"
              id="new-description"
              type="text"
              name="description"
              pattern="^.{10,}$"
            ></textarea>
          </div>
          <div class="form-group">
            <h4>ISBN</h4>
            <input class="form-control" id="new-isbn" type="text" name="isbn" pattern="^[\d]{13}$" />
          </div>
          <div class="form-group">
            <h4>Publisher</h4>
            <input
              class="form-control"
              id="new-publisher"
              type="text"
              name="publisher"
              pattern="^.{2,}$"
            />
          </div>
          <div class="form-group">
            <h4>Published</h4>
            <input
              class="form-control"
              id="new-published"
              type="text"
              name="published"
              pattern="^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$"
            />
          </div>
          <div class="form-group">
            <h4>Pages</h4>
            <input
              class="form-control"
              id="new-published"
              type="number"
              name="pages"
              pattern="^[\d]+$"
            />
          </div>
          <div class="form-group">
            <h4>Official Website</h4>
            <input class="form-control" id="new-website" type="url" name="website" />
          </div>
          <input type="submit" class="btn btn-primary" value="Edit" @click="print" />
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
  created() {
    const id = this.$route.params.id;
    this.getBookDetails(id).then(res => (this.book = res));
  },
  data() {
    return {
      book: {},
      title: "",
      subtitle: "",
      author: "",
      imageUrl: ""
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
    }
  },
  methods: {
    submitHandler() {
      const model = {
        title: this.$v.title.$model,
        subtitle: this.$v.subtitle.$model
      };

      this.editBook(this.id, model).then(this.$router.push("books"));
    },
    print() {
      console.log(this.book.title);
    }
  }
};
</script>

<style></style>
