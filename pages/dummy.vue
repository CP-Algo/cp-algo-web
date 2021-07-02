<template>
  <div class="container">
    <filter-dropdown
      :selected-category="selectedCategory"
      :selected-subcategory="selectedSubcategory"
      :selected-algorithm="selectedAlgorithm"
      @updatedCategory="selectedCategory = $event"
      @updatedSubcategoryAlgorithm="
        selectedSubcategory = $event.subcategory
        selectedAlgorithm = $event.algorithm
      "
    />
  </div>
</template>

<script>
import FilterDropdown from '~/components/FilterDropdown.vue'
export default {
  components: { FilterDropdown },
  data() {
    return {
      selectedCategory: '',
      selectedSubcategory: '',
      selectedAlgorithm: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 6rem;
  margin-left: 10rem;
}
</style>
