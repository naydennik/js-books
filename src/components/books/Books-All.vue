<template>
  <div class="row">
    <div class="col-lg-4">
      <h2 class="card-header">Book Title</h2>
      <div class="card-body">
        <h3 class="card-title">Book Subtitle</h3>
        <h4 class="card-title">Author: Book Author</h4>
      </div>
      <img style="height: 400px; width: 300px;" src="" alt="Card image" />
      <br />
      <p class="lead">
        <a class="btn btn-primary" role="button">View Details</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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
