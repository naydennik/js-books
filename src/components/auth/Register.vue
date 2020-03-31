<template>
  <div class="container">
    <div class="col-md-4">
      <br />
      <br />
      <h1>Registration Form</h1>
      <form>
        <br />

        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Please enter an username"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Please enter a password"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Please repeat the password"
          />
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Please enter your first name"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Please enter your last name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Please enter your email address"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
