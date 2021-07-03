<template>
  <div class="page-container">
    <div class="Title">
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
    <div class="description">
      <span class="descriptionLabel">Description</span>
      <textarea
        id=""
        class="descriptionArea"
        name="code"
        cols="200"
        rows="20"
      ></textarea>
    </div>
    <div class="inputFormat">
      <span class="inputFormatLabel">Input Format</span>
      <textarea
        id=""
        class="inputFormatArea"
        name="code"
        cols="200"
        rows="10"
      ></textarea>
    </div>
    <div class="outputFormat">
      <span class="outputFormatLabel">Output Format</span>
      <textarea
        id=""
        class="outputFormatArea"
        name="code"
        cols="200"
        rows="10"
      ></textarea>
    </div>
    <div class="codeDiscussion">
      <div class="codeDetails">
        <span class="submissionText">Submission</span>
        <textarea
          id=""
          class="codeArea"
          name="code"
          cols="200"
          rows="100"
        ></textarea>
        <div class="testStatus">
          <div class="testStatusHeader">
            <div class="left">
              <div
                class="testStatusIcon"
                v-html="require(`~/assets/svg/icon/testStatus.svg?raw`)"
              />
              <span class="testStatusLabel">Test status</span>
            </div>

            <div class="right">
              <div class="passed">
                <span class="passedLabel">Passed</span>
                <span class="passedCnt">5</span>
              </div>
              <div class="failed">
                <span class="failedLabel">Failed</span>
                <span class="failedCnt">3</span>
              </div>
              <div
                :class="{ expandIcon: true, isExpanded }"
                @click="isExpanded = !isExpanded"
                v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
              />
            </div>
          </div>
          <div v-if="isExpanded" class="testCaseDetails">
            <test-case
              :test-case-no="1"
              verdict="Accepted"
              :execution-time="345"
              :consumed-memory="187"
            />
          </div>
          <div v-if="isExpanded" class="testCaseDetails">
            <test-case
              :test-case-no="2"
              verdict="Accepted"
              :execution-time="345"
              :consumed-memory="187"
            />
          </div>
          <div v-if="isExpanded" class="testCaseDetails">
            <test-case
              :test-case-no="3"
              verdict="Accepted"
              :execution-time="345"
              :consumed-memory="187"
            />
          </div>
          <div v-if="isExpanded" class="testCaseDetails">
            <test-case
              :test-case-no="4"
              verdict="Wrong answer"
              :execution-time="345"
              :consumed-memory="187"
            />
          </div>
          <div v-if="isExpanded" class="testCaseDetails">
            <test-case
              :test-case-no="5"
              verdict="Wrong answer"
              :execution-time="345"
              :consumed-memory="187"
            />
          </div>
        </div>
      </div>
      <div class="discussion">
        <span class="discussionText">Discussion</span>
        <textarea
          id=""
          class="discussArea"
          name="code"
          cols="100"
          rows="100"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import SubmissionDetails from '~/components/SubmissionDetails.vue'
import TestCase from '~/components/TestCase.vue'
export default {
  components: { SubmissionDetails, TestCase },
  data() {
    return {
      isExpanded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  padding: 4.2rem 5.7rem;

  .Title {
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
  .description {
    display: flex;
    flex-direction: column;

    .descriptionLabel {
      @include font-label-semi();

      color: $text-light-primary;
    }

    .descriptionArea {
      background-color: $background-dark-secondary;
      margin-top: 1.2rem;
      border: 0 solid;
      border-radius: 1.2rem;
    }
  }

  .inputFormat {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .inputFormatLabel {
      @include font-label-semi();

      color: $text-light-primary;
    }

    .inputFormatArea {
      background-color: $background-dark-secondary;
      margin-top: 1.2rem;
      border: 0 solid;
      border-radius: 1.2rem;
    }
  }

  .outputFormat {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .outputFormatLabel {
      @include font-label-semi();

      color: $text-light-primary;
    }

    .outputFormatArea {
      background-color: $background-dark-secondary;
      margin-top: 1.2rem;
      border: 0 solid;
      border-radius: 1.2rem;
    }
  }
  .codeDiscussion {
    display: flex;
    margin-top: 3.6rem;

    .codeDetails {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-right: 3.6rem;
      width: 86.5rem;
      // flex: 1;

      .submissionText {
        @include font-label-semi();

        color: $text-light-primary;
      }

      .codeArea {
        background-color: $background-dark-secondary;
        margin-top: 1.2rem;
        border: 0 solid;
        border-radius: 1.2rem;
      }

      .testStatus {
        display: flex;
        flex-direction: column;
        margin-top: 3.2rem;

        .testStatusHeader {
          display: flex;
          align-items: center;
          background-color: $background-dark-tertiary;
          height: 3.8rem;

          .left {
            display: flex;
            align-items: center;
            margin-left: 1.6rem;
            margin-right: auto;

            .testStatusIcon {
              display: flex;
              justify-content: stretch;
              width: 1.8rem;
            }

            .testStatusLabel {
              @include font-h4-semi();

              color: $text-light-primary;
              margin-left: 1rem;
              // margin-right: auto;
            }
          }
          .right {
            display: flex;
            align-items: center;
            margin-right: 1.3rem;
            width: 19.3rem;
            justify-content: space-between;

            .passed {
              display: flex;
              align-items: center;
              .passedLabel {
                @include font-h4-semi();

                color: $extras-dark-green;
                margin-right: 0.5rem;
              }

              .passedCnt {
                @include font-h4-semi();

                color: $text-light-primary;
              }
            }

            .failed {
              display: flex;
              align-items: center;

              .failedLabel {
                @include font-h4-semi();

                color: $extras-dark-red;
                margin-right: 0.5rem;
              }

              .failedCnt {
                @include font-h4-semi();

                color: $text-light-primary;
              }
            }

            .expandIcon {
              display: flex;
              justify-content: stretch;
              width: 2rem;
              color: $text-light-primary;
              &.isExpanded {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }

    .discussion {
      display: flex;
      flex-direction: column;

      .discussionText {
        @include font-label-semi();

        color: $text-light-primary;
      }

      .discussArea {
        background-color: $background-dark-secondary;
        border-radius: 1.2rem;
        border: 0 solid;
        margin-top: 1.2rem;
      }
    }
  }
}
</style>
