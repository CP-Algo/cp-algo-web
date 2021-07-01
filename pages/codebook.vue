<template>
  <div class="page-container">
    <div class="header">
      <div
        class="codebookIcon"
        v-html="require(`~/assets/svg/nav-bar/codebook.svg?raw`)"
      />
      <span class="pageTitle">Tony Stark's Codebook</span>
      <div class="export">
        <div
          class="exportIcon"
          v-html="require(`~/assets/svg/nav-bar/codebook.svg?raw`)"
        />
        <span class="exportLabel">Export as PDF</span>
      </div>
    </div>

    <div class="option">
      <div class="dropDown">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Advanced Search Technique / BS</span>
      </div>
      <div class="languageOption">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">C++14</span>
      </div>
      <div class="sortOption">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Submission length dsc.</span>
      </div>
      <button class="new">+ &nbsp; New</button>
    </div>
    <codebook class="codebookTable" />
  </div>
</template>

<script>
import Codebook from '~/components/Codebook.vue'
export default {
  components: { Codebook },
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
      padding: 2rem;
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
  .option {
    display: flex;
    align-items: center;
    margin-top: 3.7rem;
    margin-right: 6rem;
    // align-self: stretch;

    .icon {
      color: $background-dark-tertiary;
      width: 2.5rem;
      margin-right: 1.5rem;
    }

    .text {
      @include font-body-semi();
      @include single-line();

      color: $text-light-primary;
    }

    .dropDown {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-left: 0;
      margin-right: 2.4rem;
      width: 46.9rem;
    }

    .languageOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: 2.4rem;
      width: 27.5rem;
    }

    .sortOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: auto;
      width: 27.5rem;
    }

    .new {
      @include font-body-semi();

      // align-self: flex-end;
      width: 12rem;
      color: $text-light-primary;
      background-color: $extras-dark-green;
      border-radius: 1.2rem;
      padding: 1rem 2.4rem;
      border: 0.3rem solid $extras-dark-green;
    }
  }
  .heading {
    @include font-h4-regular();

    color: $text-dark-secondary;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 1.6rem;

    .rank {
      margin-left: 3.6rem;
    }
    .authors {
      margin-left: 8.4rem;
    }
    .complexity {
      margin-left: 21.75rem;
    }
    .resources {
      margin-left: 31.35rem;
    }
    .action {
      margin-left: 29.5rem;
    }
  }
  .codebookTable {
    margin: 2.4rem 6rem 10rem 0;
  }
}
</style>
