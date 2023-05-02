<template>
  <div class="page-container">
    <div class="header">
      <div
        class="codebookIcon"
        v-html="require(`~/assets/svg/nav-bar/codebook.svg?raw`)"
      />
      <span class="pageTitle">{{ name }}</span>
      <button class="export">
        <div
          class="exportIcon"
          v-html="require(`~/assets/svg/icon/exportIcon.svg?raw`)"
        />
        <span class="exportLabel">Export as PDF</span>
      </button>
    </div>

    <Codebook class="codebookTable" :codebook-id="id" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $auth, params }) {
    const id = params.id || $auth.user.id
    const codebook = await $axios.$get(`/codebook/${id}`)
    return { ...codebook }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  margin-left: 6rem;

  .header {
    display: flex;
    align-items: center;

    .codebookIcon {
      width: 3.7rem;
      color: $text-light-primary;
    }
    .pageTitle {
      @include font-h2-semi();

      color: $text-light-primary;
      margin-left: 1.7rem;
      margin-right: auto;
    }
    .export {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 6rem;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      .exportIcon {
        width: 2rem;
        color: $text-dark-secondary;
      }

      .exportLabel {
        @include font-body-semi();

        color: $text-light-primary;
        margin-left: 1.2rem;
      }
    }
  }

  .codebookTable {
    margin: 0 6rem 6.7rem 0;
  }
}
</style>
