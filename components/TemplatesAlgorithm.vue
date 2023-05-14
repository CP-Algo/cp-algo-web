<template>
  <a class="container" :href="`/submissions?algorithm=${algorithm.id}`">
    <span class="algorithmName"> {{ algorithm.name }} </span>
    <div
      class="rightArrow"
      v-html="require(`~/assets/svg/icon/rightArrow.svg?raw`)"
    />
  </a>
</template>

<script>
export default {
  props: {
    algorithm: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  background-color: $background-dark-secondary;
  border-radius: 1.6rem;
  padding: 1.6rem 2.4rem;
  border: 0.1rem solid $background-dark-secondary;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .algorithmName {
    @include font-h3-semi();

    color: $text-light-primary;
    flex: 1;
  }

  .rightArrow {
    height: 2.4rem;
    color: $text-light-secondary;
  }

  &:hover {
    background-color: $background-dark-tertiary;
    border: 0.1rem solid $app-dark-secondary;
  }
}
</style>
