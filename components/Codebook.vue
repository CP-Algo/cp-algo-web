<template>
  <div class="container">
    <category-row class="row" name="Input/Output" thumbnail="input-output" />
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
  // align-items: stretch;

  .row {
    display: flex;
    margin-bottom: 3rem;
  }
}
</style>
