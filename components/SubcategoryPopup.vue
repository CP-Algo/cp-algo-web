<template>
  <div class="sub-container">
    <div v-if="categoryName === 'GRAPH_ALGO'">
      <subcat-algo-list subcat-name="SHORTEST_PATH" />
      <subcat-algo-list subcat-name="MST" />
    </div>
    <div v-if="categoryName === 'STRING_ALGO'">
      <subcat-algo-list subcat-name="STRING_MATCHING" />
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
    categoryName: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.sub-container {
  // display: flex;
  // flex-direction: column;
  // align-items: stretch;
  width: 30.2rem;
  padding-bottom: 1rem;
  border-radius: 1.2rem;
  background-color: $background-dark-secondary;
}
</style>
