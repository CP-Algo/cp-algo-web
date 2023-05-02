<template>
  <div class="container">
    <div class="option">
      <div class="dropDown">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/filterIcon.svg?raw`)"
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
      <a v-if="newButton" class="add" href="/submit">
        <div
          class="addIcon"
          v-html="require(`~/assets/svg/icon/addIcon.svg?raw`)"
        />
        <span class="addLabel">New</span>
      </a>
    </div>
    <div class="codebook-container">
      <p v-if="$fetchState.pending">Fetching codebook...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <CategoryRow
        v-else
        v-for="category in getCategories()"
        :key="category.id"
        :category-id="category.id"
        class="categoryBox"
        :name="category.name"
        :topics="topics"
        :codebook="codebook"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    codebookId: {
      type: String,
      required: true,
    },
    newButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      codebook: {
        submissions: [],
      },
      topics: {
        categories: [],
        subCategories: [],
        algorithms: [],
      },
    }
  },
  async fetch() {
    this.codebook = await this.$axios.$get(`/codebook/${this.codebookId}`)
    this.topics = await this.$axios.$get('/topics')
  },
  methods: {
    getSubmissionTopics(submission) {
      const algorithm = this.topics.algorithms.find(
        (item) => item.id === submission.AlgorithmId
      )
      const subCategory = this.topics.subCategories.find(
        (item) => item.id === algorithm.SubCategoryId
      )
      const category = this.topics.categories.find(
        (item) => item.id === subCategory.CategoryId
      )
      return { algorithm, subCategory, category }
    },
    getCategories() {
      const categoryIds = new Set(
        this.codebook.submissions.map(
          (submission) => this.getSubmissionTopics(submission).category.id
        )
      )
      const categories = Array.from(categoryIds).map((categoryId) =>
        this.topics.categories.find((item) => item.id === categoryId)
      )
      return categories
    },
  },
}
</script>

<style lang="scss" scoped>
.option {
  display: flex;
  align-items: center;
  margin-top: 3.7rem;
  margin-bottom: 2.4rem;

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

  .add {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.3rem solid $extras-dark-green;
    background-color: $extras-dark-green;
    border-radius: 1.2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .addIcon {
      width: 2.4rem;
      margin-left: 0.6rem;
      margin-right: 0.6rem;
      color: $background-dark-secondary;
    }

    .addLabel {
      @include font-body-semi();

      color: $text-light-primary;
      margin-right: 0.6rem;
    }
  }
}

.codebook-container {
  display: flex;
  flex-direction: column;

  .categoryBox {
    margin-bottom: 3rem;
  }
}
</style>
