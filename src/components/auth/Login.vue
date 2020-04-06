<template>
  <div class="container">
    <div class="col-md-4">
      <br />
      <br />
      <h1>Login Form</h1>
      <br />
      <form @submit.prevent="submitHandler">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Please enter your username"
            v-model="username"
            @blur="$v.username.$touch"
          />
          <template v-if="$v.username.$error">
            <div class="alert alert-danger" v-if="!$v.username.required">
              This field is required!
            </div>
            <div
              class="alert alert-danger"
              v-else-if="!$v.username.usernamePattern"
            >
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
            placeholder="Please enter your password"
            v-model="password"
            @blur="$v.password.$touch"
          />
          <template v-if="$v.password.$error">
            <div class="alert alert-danger" v-if="!$v.password.required">
              This field is required!
            </div>
            <div
              class="alert alert-danger"
              v-else-if="!$v.password.passwordPattern"
            >
              Password should contain only letters and digits and must be
              between 4 and 16 symbols!
            </div>
          </template>
        </div>
        <button type="submit" class="btn btn-success">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { sign } from "@/services/authService";

export default {
  mixins: [validationMixin, sign],
  data() {
    return {
      username: "",
      password: ""
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
    }
  },
  methods: {
    submitHandler() {
      const model = {
        username: this.$v.username.$model,
        password: this.$v.password.$model
      };

      this.login(model).then(this.$router.push("books"));
    }
  }
};
</script>

<style scoped></style>>
