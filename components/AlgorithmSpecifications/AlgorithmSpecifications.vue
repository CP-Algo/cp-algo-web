<template>
  <div class="container">
    <div class="header" @click="isExpanded = !isExpanded">
      <span class="header-label">{{isExpanded ? "Hide" : "Show"}} algorithm details</span>
      <div
        :class="{ icon: true, isExpanded }"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="body">
      <div class="section">
        <AlgorithmSpecificationBox title="Description" :content="algorithm.description" />
      </div>
      <div class="section">
        <AlgorithmSpecificationBox title="Input Format" :content="algorithm.inputFormat" />
        <AlgorithmSpecificationBox title="Input Definition" :content="algorithm.inputDefinition" />
        <AlgorithmSpecificationBox title="Input Constraints" :content="algorithm.inputConstraints" />
      </div>
      <div class="section">
        <AlgorithmSpecificationBox title="Output Format" :content="algorithm.outputFormat" />
        <AlgorithmSpecificationBox title="Output Definition" :content="algorithm.outputDefinition" />
        <AlgorithmSpecificationBox title="Output Constraints" :content="algorithm.outputConstraints" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    algorithm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // flex-shrink: 0;
  // flex-basis: auto;
  flex-direction: column;
  align-items: stretch;
  margin-top: 2.4rem;
  border-radius: 1.2rem;
  overflow: hidden;
  background-color: $background-dark-sec-ter;

  .header {
    display: flex;
    align-items: center;
    height: 4rem;
    background-color: $background-dark-secondary;
    cursor: pointer;

    .header-label {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-left: 2.4rem;
      margin-right: auto;
    }

    .icon {
      height: 1.2rem;
      margin-left: auto;
      margin-right: 3.1rem;
      color: $text-dark-secondary;
      svg: {
      }
      &.isExpanded {
        transform: rotate(180deg);
      }
    }
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0.5rem;

    .section {
      display: flex;
      flex: 1;
    }
  }
}
</style>
