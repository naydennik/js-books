<template>
  <div class="container">
    <template v-if="this.isLoading" class="row">
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
    <div class="col-md-4" v-else>
      <br />
      <br />
      <h1>Registration Form</h1>
      <form @submit.prevent="submitHandler">
        <br />
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Please enter an username"
            v-model="username"
            @blur="$v.username.$touch"
          />
          <template v-if="$v.username.$error">
            <div class="alert alert-danger" v-if="!$v.username.required">This field is required!</div>
            <div class="alert alert-danger" v-else-if="!$v.username.usernamePattern">
              Username should be at least 3 symbols long and should contain only
              letters and digits!
            </div>
          </template>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Please enter a password"
            v-model="password"
            @blur="$v.password.$touch"
          />
          <template v-if="$v.password.$error">
            <div class="alert alert-danger" v-if="!$v.password.required">This field is required!</div>
            <div class="alert alert-danger" v-else-if="!$v.password.passwordPattern">
              Password should contain only letters and digits and must be
              between 4 and 16 symbols!
            </div>
          </template>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Please repeat the password"
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch"
          />
          <template v-if="$v.confirmPassword.$error">
            <div
              class="alert alert-danger"
              v-if="!$v.confirmPassword.required"
            >This field is required!</div>
            <div
              class="alert alert-danger"
              v-else-if="!$v.confirmPassword.sameAs"
            >Password and Confirm Password must match!</div>
          </template>
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Please enter your first name"
            v-model="firstName"
            @blur="$v.firstName.$touch"
          />
          <template v-if="$v.firstName.$error">
            <div class="alert alert-danger" v-if="!$v.firstName.required">This field is required!</div>
            <div class="alert alert-danger" v-else-if="!$v.firstName.firstNamePattern">
              First name should contain only letters and should start with a
              capital letter!
            </div>
          </template>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Please enter your last name"
            v-model="lastName"
            @blur="$v.lastName.$touch"
          />
          <template v-if="$v.lastName.$error">
            <div class="alert alert-danger" v-if="!$v.lastName.required">This field is required!</div>
            <div class="alert alert-danger" v-else-if="!$v.lastName.namePattern">
              Last name should contain only letters and should start with a
              capital letter!
            </div>
          </template>
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Please enter your email address"
            v-model="email"
            @blur="$v.email.$touch"
          />
          <template v-if="$v.email.$error">
            <div class="alert alert-danger" v-if="!$v.email.required">This field is required!</div>
            <div
              class="alert alert-danger"
              v-else-if="!$v.email.email"
            >Please enter a valid email address!</div>
          </template>
        </div>
        <div class="form-group">
          <label for="imageUrl">User Image</label>
          <input
            class="form-control"
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Please enter your image URL"
            v-model="imageUrl"
          />
          <br />
          <img
            id="img"
            :src="imageUrl ? undefined : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'"
          />
        </div>
        <button type="submit" class="btn btn-success" :disabled="$v.$error">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import { sign } from "@/services/authService";

function sameAs(value1) {
  return function(value2) {
    return this[value1] === value2;
  };
}

export default {
  mixins: [validationMixin, sign],
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: ""
    };
  },
  validations: {
    username: {
      required,
      usernamePattern(username) {
        return /^[A-Za-z\d]{3,}$/.test(username);
      }
    },
    password: {
      required,
      passwordPattern(password) {
        return /^[A-Za-z\d]{4,16}$/.test(password);
      }
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password")
    },
    firstName: {
      required,
      namePattern(firstName) {
        return /^[A-Z]{1}[A-Za-z]*$/.test(firstName);
      }
    },
    lastName: {
      required,
      namePattern(lastName) {
        return /^[A-Z]{1}[A-Za-z]*$/.test(lastName);
      }
    },
    email: {
      required,
      email
    },
    imageUrl: {}
  },
  methods: {
    submitHandler() {
      const model = {
        username: this.$v.username.$model,
        password: this.$v.password.$model,
        confirmpassword: this.$v.confirmPassword.$model,
        firstname: this.$v.firstName.$model,
        lastname: this.$v.lastName.$model,
        email: this.$v.email.$model,
        imageUrl: this.$v.imageUrl.$model
          ? undefined
          : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      };

      this.register(model);
    }
  }
};
</script>

<style scoped>
.col-lg-4 {
  padding: 50px;
}

.loader {
  margin: auto;
  padding: 200px;
}
</style>
