<template>
  <div class="category-container">
    <div class="categoryHeading" @click="isExpanded = !isExpanded">
      <img
        :src="require(`~/assets/svg/category/${category.id}.svg`)"
        :alt="`thumbnail of category ${category.name}`"
      />
      <span class="categoryName">{{ category.name }}</span>
      <div
        :class="{ expandCategoryIcon: true, isExpanded }"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="algorithms">
      <AlgorithmRow
        v-for="algorithm in algorithms"
        :key="algorithm.id"
        :algorithm="algorithm"
        :codebook-submissions="codebookSubmissions"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    codebookSubmissions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    algorithms() {
      const accumulated_algorithms = []
      this.category.children.forEach(subCategory => {
        subCategory.children.forEach(algorithm => {
          accumulated_algorithms.push(algorithm)
        })
      })
      return accumulated_algorithms
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
    cursor: pointer;
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
