<template>
  <div class="algorithm-container">
    <div class="algorithm" @click="isExpanded = !isExpanded">
      <span class="algorithmName">{{ algorithm.name }}</span>
      <div
        :class="{ icon: true, isExpanded }"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="submissionTable">
      <SubmissionDetailsHeader class="heading" :rank="false" />
      <SubmissionDetails
        v-for="submission in filteredSubmissions"
        :key="submission.id"
        :submission-id="submission.id"
        :authors="submission.Authors"
        :more-author="Math.max(0, submission.Authors.length - 3)"
        :time-complexity="submission.timeComplexity"
        :memory-complexity="submission.memoryComplexity"
        :language="submission.Language.name"
        :code-size="submission.length"
        :execution-time="submission.executionTime"
        :required-memory="submission.executionMemory"
        :upvote="submission.upvotes"
        :bookmark="submission.forks"
        style="margin-bottom: 1.2rem"
      />
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
    codebookSubmissions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    filteredSubmissions() {
      const submissions = this.codebookSubmissions.filter(
        (submission) => submission.AlgorithmId === this.algorithm.id
      )
      return submissions
    },
  },
}
</script>

<style lang="scss" scoped>
.algorithm-container {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  // align-items: stretch;

  .algorithm {
    display: flex;
    align-items: center;
    border-radius: 1.6rem;
    height: 8rem;
    margin-bottom: 2rem;
    background-color: $background-dark-secondary;
    cursor: pointer;
    .algorithmName {
      @include font-h3-semi();

      color: $text-light-primary;
      margin-left: 3.6rem;
      margin-right: auto;
    }

    .icon {
      height: 4rem;
      margin-left: auto;
      margin-right: 3.1rem;
      color: $background-dark-primary;
      &.isExpanded {
        transform: rotate(180deg);
      }
    }
  }
  .submissionTable {
    display: flex;
    flex-direction: column;
    margin-left: 3.9rem;
    margin-right: 1rem;

    .heading {
      @include font-h4-regular();

      color: $text-dark-secondary;
      display: flex;
      align-items: center;
      margin-top: 2.5rem;
      margin-bottom: 1.6rem;
    }
  }
}
</style>
