<template>
  <div class="container">
    <filter-dropdown />
  </div>
</template>

<script>
import FilterDropdown from '~/components/FilterDropdown.vue'
export default {
  components: { FilterDropdown },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 6rem;
  margin-left: 10rem;
}
</style>
