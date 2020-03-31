<template>
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Create Book</h1>
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
              placeholder="Please enter the book's title..."
            />
          </div>
          <div class="form-group">
            <h4>Subtitle</h4>
            <input
              class="form-control"
              id="new-model"
              type="text"
              placeholder="Please enter the book's subtitle..."
            />
          </div>
          <div class="form-group">
            <h4>Author</h4>
            <input
              class="form-control"
              id="new-author"
              type="text"
              placeholder="Please enter the book's author..."
            />
          </div>
          <div class="form-group">
            <h4>Image</h4>
            <input
              class="form-control"
              id="new-image"
              type="text"
              placeholder="Please enter the book's image URL..."
            />
          </div>
          <div class="form-group">
            <h4>Description</h4>
            <textarea
              cols="20"
              rows="10"
              class="form-control"
              id="new-description"
              type="text"
              placeholder="Please enter the book's description..."
            ></textarea>
          </div>
          <div class="form-group">
            <h4>ISBN</h4>
            <input
              class="form-control"
              id="new-isbn"
              type="text"
              placeholder="Please enter the book's ISBN..."
            />
          </div>
          <div class="form-group">
            <h4>Publisher</h4>
            <input
              class="form-control"
              id="new-publisher"
              required
              type="text"
              placeholder="Please enter the book's publisher..."
            />
          </div>
          <div class="form-group">
            <h4>Published</h4>
            <input
              class="form-control"
              id="new-published"
              type="text"
              placeholder="Please enter the book's publishing date..."
            />
          </div>
          <div class="form-group">
            <h4>Pages</h4>
            <input
              class="form-control"
              id="new-published"
              type="text"
              placeholder="Please enter the book's pages number..."
            />
          </div>
          <div class="form-group">
            <h4>Official Website</h4>
            <input
              class="form-control"
              id="new-website"
              placeholder="Please enter the book's official website..."
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Create" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
