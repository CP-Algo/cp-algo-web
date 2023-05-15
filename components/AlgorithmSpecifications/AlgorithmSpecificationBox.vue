<template>
  <div class="box">
    <span class="title">{{title}}</span>
    <p class="content">{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  margin: 0.5rem;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background-color: $background-dark-primary;

  .title {
    @include font-h3-semi();
    color: $text-light-primary;
  }
  .content {
    @include font-h4-regular();
    color: $text-dark-secondary;
  }
}
</style>
