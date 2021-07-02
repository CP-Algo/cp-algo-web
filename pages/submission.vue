<template>
  <div class="page-container">
    <div class="title">
      <div
        class="codeIcon"
        v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
      />
      <span class="codebookTitle">Tony Stark's Codebook</span>
      <span class="forwardSlash">&nbsp;/&nbsp;</span>
      <span class="algoTitle">Aho Corasick String Matching</span>
    </div>
    <div class="details">
      <div class="detailsHeader">
        <span class="detailsHeaderText">Authors</span>
        <span class="detailsHeaderText">Complexity</span>
        <span class="detailsHeaderText">Resourses</span>
      </div>
    </div>
    <submission-details
      :authors="['75e851c1-acc6-46ea-969a-f28829a1de44']"
      :more-author="12"
      time-comlexity="NM"
      memory-comlexity="NM"
      language="C++14"
      :code-size="258"
      :execution-time="438"
      :required-memory="438"
      :upvote="120"
      :bookmark="23"
    />
  </div>
</template>

<script>
import SubmissionDetails from '~/components/SubmissionDetails.vue'
export default {
  components: { SubmissionDetails },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  padding: 4.2rem 5.7rem;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    .codeIcon {
      @include font-h3-bold();

      color: $text-dark-secondary;
      width: 3.1rem;
      height: 2.2rem;
      margin-right: 1.4rem;
    }

    .codebookTitle,
    .algoTitle {
      @include font-h3-semi();
      @include single-line();

      color: $text-light-primary;
    }

    .forwardSlash {
      @include font-h3-bold();

      color: $text-dark-secondary;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 2.4rem;
    justify-content: space-between;

    .detailsHeader {
      @include font-h4-regular();

      color: $text-dark-secondary;
    }
  }
}
</style>
