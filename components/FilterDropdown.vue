<template>
  <div class="container">
    <div class="categoryPopup">
      <div
        :class="{
          categorySection: true,
          selected: selectedCategory === 'GRAPH_ALGO',
        }"
        @click="$emit('updatedCategory', 'GRAPH_ALGO')"
      >
        <span>Graph Aglorithm</span>
      </div>
      <div
        :class="{
          categorySection: true,
          selected: selectedCategory === 'STRING_ALGO',
        }"
        @click="$emit('updatedCategory', 'STRING_ALGO')"
      >
        <span>Sring Aglorithm</span>
      </div>
      <div
        :class="{
          categorySection: true,
          selected: selectedCategory === 'DATABASE',
        }"
        @click="$emit('updatedCategory', 'DATABASE')"
      >
        <span>Database</span>
      </div>
      <div
        :class="{
          categorySection: true,
          selected: selectedCategory === 'GAME_THEORY',
        }"
        @click="$emit('updatedCategory', 'GAME_THEORY')"
      >
        <span>Game Theory</span>
      </div>
    </div>
    <div class="subcategoryPopup">
      <subcategory-popup
        :selected-category="selectedCategory"
        :selected-subcategory="selectedSubcategory"
        :selected-algorithm="selectedAlgorithm"
        @updatedSubcategoryAlgorithm="
          $emit('updatedSubcategoryAlgorithm', $event)
        "
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SubcategoryPopup from './SubcategoryPopup.vue'
export default Vue.extend({
  name: 'FilterDropdown',
  components: { SubcategoryPopup },
  props: {
    selectedCategory: {
      type: String,
      default: '',
    },
    selectedSubcategory: {
      type: String,
      default: '',
    },
    selectedAlgorithm: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;

  .categoryPopup {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-right: 1.8rem;
    width: 30.2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 1.2rem;
    background-color: $background-dark-secondary;

    span {
      @include font-body-semi();

      color: $text-light-primary;
    }

    .categorySection {
      display: flex;
      align-items: center;
      height: 4rem;
      cursor: pointer;
      padding-left: 2.4rem;
      &:hover {
        background-color: $background-dark-sec-ter;
      }
      &.selected {
        background-color: $background-dark-tertiary;
      }
    }
  }
}
</style>
