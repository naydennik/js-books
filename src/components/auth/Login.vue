<template>
  <div class="container">
    <div class="col-md-4">
      <br />
      <br />
      <h1>Login Form</h1>
      <br />
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Please enter your username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Please enter your password"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>>
