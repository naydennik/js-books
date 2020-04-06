<template>
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Edit Book</h1>
        <br />
      </div>
    </div>
    <form>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <h4>Title</h4>
            <input
              class="form-control"
              id="new-make"
              type="text"
              name="title"
              pattern="^[A-Z]{1}.+$"
            />
          </div>
          <div class="form-group">
            <h4>Subtitle</h4>
            <input
              class="form-control"
              id="new-model"
              type="text"
              name="subtitle"
              pattern="^[A-Z]{1}.+$"
            />
          </div>
          <div class="form-group">
            <h4>Author</h4>
            <input
              class="form-control "
              id="new-author"
              type="text"
              name="author"
              pattern="^[A-Z][A-Za-z ,]+$"
            />
          </div>
          <div class="form-group">
            <h4>Image</h4>
            <input
              class="form-control"
              id="new-image"
              type="text"
              name="imageUrl"
            />
            <br />
            <img id="img" src="" alt="" />
          </div>
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
            <input
              class="form-control"
              id="new-isbn"
              type="text"
              name="isbn"
              pattern="^[\d]{13}$"
            />
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
            <input
              class="form-control"
              id="new-website"
              type="url"
              name="website"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Edit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
