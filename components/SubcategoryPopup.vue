<template>
  <div class="sub-container">
    <div v-if="selectedCategory === 'GRAPH_ALGO'">
      <subcat-algo-list
        subcategory-name="SHORTEST_PATH"
        :selected-algorithm="selectedAlgorithm"
        @updatedSubcategoryAlgorithm="
          $emit('updatedSubcategoryAlgorithm', $event)
        "
      />
      <subcat-algo-list
        subcategory-name="MST"
        :selected-algorithm="selectedAlgorithm"
        @updatedSubcategoryAlgorithm="
          $emit('updatedSubcategoryAlgorithm', $event)
        "
      />
      <!-- <subcat-algo-list subcat-name="MST" /> -->
    </div>
    <div v-if="selectedCategory === 'STRING_ALGO'">
      <!-- <subcat-algo-list subcat-name="STRING_MATCHING" /> -->
      <subcat-algo-list
        subcategory-name="STRING_MATCHING"
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
import SubcatAlgoList from './SubcatAlgoList.vue'
export default Vue.extend({
  name: 'SubcategoryPopup',
  components: { SubcatAlgoList },
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
.sub-container {
  width: 30.2rem;
  padding-bottom: 1rem;
  border-radius: 1.2rem;
  background-color: $background-dark-secondary;
}
</style>
