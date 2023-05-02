<template>
  <div class="category-container">
    <div class="categoryHeading" @click="isExpanded = !isExpanded">
      <img
        :src="require(`~/assets/svg/category/${categoryId}.svg`)"
        :alt="`thumbnail of category ${name}`"
      />
      <span class="categoryName">{{ name }}</span>
      <div
        :class="{ expandCategoryIcon: true, isExpanded }"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="algorithms">
      <AlgorithmRow
        v-for="algorithm in getAlgorithms()"
        :key="algorithm.id"
        :algorithm-id="algorithm.id"
        :name="algorithm.name"
        :codebook="codebook"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    topics: {
      type: Object,
      required: true,
    },
    codebook: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
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
    getAlgorithms() {
      const algorithmIds = new Set(
        this.codebook.submissions.map(
          (submission) => this.getSubmissionTopics(submission).algorithm.id
        )
      )
      const algorithms = Array.from(algorithmIds).map((algorithmId) =>
        this.topics.algorithms.find((item) => item.id === algorithmId)
      )
      return algorithms
    },
  },
}
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .categoryHeading {
    display: flex;
    align-items: center;
    height: 8.6rem;
    // margin-right: auto;
    border-radius: 1.6rem;
    background-color: $background-dark-tertiary;
    img {
      max-width: 5rem;
      max-height: 5rem;
      // margin-top: 1.8rem;
      // margin-bottom: 1.8rem;
      margin-left: 3.6rem;
    }

    .categoryName {
      @include font-h3-semi();

      color: $text-light-primary;
      margin-left: 3.6rem;
      // margin-right: auto;
    }

    .expandCategoryIcon {
      width: 4rem;
      // height: 4rem;
      margin-left: auto;
      margin-right: 3.1rem;
      color: $background-dark-secondary;
      &.isExpanded {
        transform: rotate(180deg);
      }
    }
  }
  .algorithms {
    margin-top: 5rem;
  }
}
</style>
