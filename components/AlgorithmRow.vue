<template>
  <div class="container">
    <span class="algorithmName">{{ name }}</span>
    <div
      class="expandIcon"
      v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
    />
  </div>
</template>

<script>
export default {
  name: 'AlgorithmRow',
  props: {
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
  height: 7rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;

  .algorithmName {
    @include font-h3-semi();

    color: $text-light-primary;
    margin-left: 3.6rem;
    margin-right: auto;
  }

  .expandIcon {
    height: 4rem;
    margin-left: auto;
    margin-right: 3.1rem;
    color: $background-dark-primary;
  }
}
</style>
