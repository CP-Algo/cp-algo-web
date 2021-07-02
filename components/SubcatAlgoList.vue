<template>
  <div class="subcatAlgo-container">
    <span class="header">{{ subcategoryName }}</span>
    <div v-if="subcategoryName === 'SHORTEST_PATH'" class="subcatClass">
      <span
        :class="{ algoName: true, selected: selectedAlgorithm === 'BFS' }"
        @click="
          $emit('updatedSubcategoryAlgorithm', {
            subcategory: subcategoryName,
            algorithm: 'BFS',
          })
        "
        >BFS</span
      >
      <span
        :class="{ algoName: true, selected: selectedAlgorithm === 'SPFA' }"
        @click="
          $emit('updatedSubcategoryAlgorithm', {
            subcategory: subcategoryName,
            algorithm: 'SPFA',
          })
        "
        >SPFA</span
      >
      <!-- <span class="algoName">Dijkstra Algoritym</span> -->
      <!-- <span class="algoName">SPFA</span> -->
      <span class="algoName">Bellman Ford</span>
      <span class="algoName">Floyd Warshall</span>
    </div>
    <div v-if="subcategoryName === 'MST'" class="subcatClass">
      <span class="algoName">Kruskal's Algorithm</span>
      <span class="algoName">Prim's Algorithm</span>
    </div>
    <div v-if="subcategoryName === 'STRING_MATCHING'" class="subcatClass">
      <span class="algoName">KMP</span>
      <span class="algoName">Z-Algorithm</span>
      <span class="algoName">Suffix Array</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SubcatAlgoList',
  props: {
    subcategoryName: {
      type: String,
      required: true,
    },
    selectedAlgorithm: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.subcatAlgo-container {
  display: flex;
  flex-direction: column;

  .header {
    @include font-h4-semi();

    color: $text-dark-secondary;
    padding-top: 2rem;
    padding-left: 2.4rem;
  }

  .subcatClass {
    display: flex;
    flex-direction: column;
    // padding-left: 4rem;

    .algoName {
      @include font-body-semi();

      color: $text-light-primary;
      display: flex;
      align-items: center;
      height: 3.8rem;
      padding-left: 4rem;
      cursor: pointer;

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
