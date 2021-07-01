<template>
  <div class="container">
    <img
      :src="require(`~/assets/svg/category/${thumbnail}.svg`)"
      :alt="`thumbnail of category ${name}`"
    />
    <span class="categoryName">{{ name }}</span>
    <div
      class="expandIcon"
      v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
    />
  </div>
</template>

<script>
export default {
  name: 'CategoryRow',
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  border-radius: 1.6rem;
  background-color: $background-dark-tertiary;

  img {
    max-width: 5rem;
    max-height: 5rem;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
    margin-left: 9.6rem;
  }

  .categoryName {
    @include font-h3-semi();

    color: $text-light-primary;
    margin-left: 3.6rem;
    margin-right: auto;
  }

  .expandIcon {
    height: 4rem;
    margin-left: auto;
    margin-right: 3.1rem;
    color: $background-dark-secondary;
  }
}
</style>
