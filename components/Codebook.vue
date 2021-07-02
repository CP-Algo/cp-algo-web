<template>
  <div class="codebook-container">
    <category-row
      class="categoryBox"
      name="Input/Output"
      thumbnail="input-output"
    />
    <category-row class="categoryBox" name="Databases" thumbnail="database" />
  </div>
</template>

<script>
import CategoryRow from '~/components/CategoryRow.vue'
export default {
  components: { CategoryRow },
}
</script>

<style lang="scss" scoped>
.codebook-container {
  display: flex;
  flex-direction: column;

  .categoryBox {
    margin-bottom: 3rem;
  }
}
</style>
