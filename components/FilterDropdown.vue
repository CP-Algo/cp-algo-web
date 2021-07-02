<template>
  <div class="container">
    <div class="categoryPopup">
      <div
        :class="{
          graphAlgo: true,
          selected: selectedCategory === 'GRAPH_ALGO',
        }"
        @click="selectedCategory = 'GRAPH_ALGO'"
      >
        <span>Graph Aglorithm</span>
      </div>
      <div
        :class="{
          stringAlgo: true,
          selected: selectedCategory === 'STRING_ALGO',
        }"
        @click="selectedCategory = 'STRING_ALGO'"
      >
        <span>Sring Aglorithm</span>
      </div>
      <div
        :class="{
          database: true,
          selected: selectedCategory === 'DATABASE',
        }"
        @click="selectedCategory = 'DATABASE'"
      >
        <span>Database</span>
      </div>
      <div
        :class="{
          gameTheory: true,
          selected: selectedCategory === 'GAME_THEORY',
        }"
        @click="selectedCategory = 'GAME_THEORY'"
      >
        <span>Game Theory</span>
      </div>
    </div>
    <div class="subcategoryPopup">
      <subcategory-popup :category-name="selectedCategory" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SubcategoryPopup from './SubcategoryPopup.vue'
export default Vue.extend({
  name: 'FilterDropdown',
  components: { SubcategoryPopup },
  data() {
    return {
      selectedCategory: 'GRAPH_ALGO',
    }
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

    .graphAlgo,
    .stringAlgo,
    .database,
    .gameTheory {
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

  // .subcategoryPopup {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: stretch;
  //   margin-right: 1.8rem;
  //   width: 30.2rem;
  //   border-radius: 1.2rem;
  //   background-color: $background-dark-secondary;

  //   span {
  //     @include font-body-semi();

  //     color: $text-light-primary;
  //   }
  // }
}
</style>
