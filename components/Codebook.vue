<template>
  <div class="container">
    <category-row
      name="Input/Output"
      thumbnail="input-output"
      class="category"
    />
    <category-row
      name="Advanced Search Techniques"
      thumbnail="advanced-search-techniques"
      class="category"
    />
    <category-row name="Databases" thumbnail="database" class="category" />
  </div>
</template>

<script>
import CategoryRow from '~/components/CategoryRow.vue'
export default {
  components: { CategoryRow },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .category {
    margin-bottom: 3rem;
  }
}
</style>
