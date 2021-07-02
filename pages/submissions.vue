<template>
  <div class="page-container">
    <div class="option">
      <div class="dropDown">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Advanced Search Technique / BS</span>
      </div>
      <div class="languageOption">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">C++14</span>
      </div>
      <div class="sortOption">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Submission length dsc.</span>
      </div>
      <button class="new">+ &nbsp; New</button>
    </div>
    <submission-details-header class="heading" />
    <div class="submissionTable">
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
      <submission-details
        :rank="1"
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
    <div class="pageDetails">
      <div class="left">
        <span class="noOfPage">20</span>
        <span class="noOfPageSuf">&nbsp; rows per page</span>
      </div>
      <div class="right">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/prevIcon.svg?raw`)"
        />
        <span class="pageNo">6</span>
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/nextIcon.svg?raw`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubmissionDetailsHeader from '~/components/SubmissionDetailsHeader.vue'
import SubmissionDetails from '~/components/SubmissionDetails.vue'
export default {
  components: { SubmissionDetailsHeader, SubmissionDetails },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 3.6rem 4.7rem;

  .option {
    display: flex;
    align-items: center;
    // align-self: stretch;

    .icon {
      color: $background-dark-tertiary;
      width: 2.5rem;
      margin-right: 1.5rem;
    }

    .text {
      @include font-body-semi();
      @include single-line();

      color: $text-light-primary;
    }

    .dropDown {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-left: 0;
      margin-right: 2.4rem;
      width: 46.9rem;
    }

    .languageOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: 2.4rem;
      width: 27.5rem;
    }

    .sortOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: auto;
      width: 27.5rem;
    }

    .new {
      @include font-body-semi();

      // align-self: flex-end;
      width: 12rem;
      color: $text-light-primary;
      background-color: $extras-dark-green;
      border-radius: 1.2rem;
      padding: 1rem 2.4rem;
      border: 0.3rem solid $extras-dark-green;
    }
  }
  .heading {
    margin-top: 2.5rem;
    margin-bottom: 1.6rem;
  }
  .submissionTable {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .pageDetails {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 6.4rem;
    .noOfPage,
    .pageNo {
      @include font-h4-semi();

      color: $text-light-primary;
      background-color: $app-dark-primary;
      border-radius: 0.7rem;
      padding: 0.8rem;
    }
    .left {
      display: flex;
      align-items: center;
      margin-left: 2.4rem;
      margin-right: auto;
      .noOfPageSuf {
        @include font-body-semi();

        color: $text-light-primary;
      }
    }
    .right {
      display: flex;
      align-items: center;
      margin-right: 2.4rem;

      .icon {
        height: 2rem;
      }

      .pageNo {
        margin: 0 2.8rem;
      }
    }
  }
}
</style>
