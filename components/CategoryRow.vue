<template>
  <div class="category-container">
    <div class="categoryHeading">
      <img
        :src="require(`~/assets/svg/category/${thumbnail}.svg`)"
        :alt="`thumbnail of category ${name}`"
      />
      <span class="categoryName">{{ name }}</span>
      <div
        :class="{ expandCategoryIcon: true, isExpanded }"
        @click="isExpanded = !isExpanded"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="algorithms">
      <algorithm-row name="Binary Search" />
      <algorithm-row name="Ternary Search" />
    </div>
  </div>
</template>

<script>
import AlgorithmRow from './AlgorithmRow.vue'
export default {
  name: 'CategoryRow',
  components: { AlgorithmRow },
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
  data() {
    return {
      isExpanded: false,
    }
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
