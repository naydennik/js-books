<template>
  <footer class="n-footer">
    <div class="row text-center">
      <div class="col-lg-12">
        <p>
          Made by
          <a :href="creator.fbUrl" rel="nofollow">{{creator.name}}</a>. Contact him at
          <a :href="creator.email">naydennik@gmail.com</a>.
        </p>
        <p>
          Based on
          <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>. Icons
          from
          <a
            href="https://fortawesome.github.io/Font-Awesome/"
            rel="nofollow"
          >Font Awesome</a>. Web fonts from
          <a href="https://www.google.com/webfonts" rel="nofollow">Google</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.n-footer {
  position: relative;
  flex-shrink: 0;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 0;
}
</style
>>
