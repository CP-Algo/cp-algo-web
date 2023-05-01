<template>
  <div
    class="container"
    @click="
      $emit('categoryClicked', {
        id: categoryId,
        name: categoryName,
      })
    "
  >
    <img
      :src="require(`~/assets/svg/category/${categoryId}.svg`)"
      :alt="`thumbnail of category ${categoryName}`"
    />
    <span>{{ categoryName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    categoryName: {
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
  justify-content: center;
  flex-direction: column;
  width: 40rem;
  height: 40rem;
  border: 0.1rem solid $background-dark-secondary;
  border-radius: 2.2rem;
  margin-bottom: 6rem;
  background-color: $background-dark-secondary;
  cursor: pointer;

  img {
    max-height: 20rem;
    max-width: 20rem;
    margin-bottom: 4.8rem;
  }

  span {
    @include font-h3-bold();

    color: $text-light-primary;
  }

  &:hover {
    background-color: $background-dark-tertiary;
    border: 0.1rem solid $app-dark-secondary;
    box-shadow: 0 0 4rem $background-shadow-50;
  }
}
</style>
