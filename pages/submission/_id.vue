<template>
  <div class="page-container">
    <div class="title">
      <div
        class="codeIcon"
        v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
      />
      <span class="codebookTitle">{{ codebook.name }}</span>
      <span class="forwardSlash">&nbsp;/&nbsp;</span>
      <span class="algoTitle">{{ algorithm.name }}</span>
    </div>
    <SubmissionDetailsHeader class="details" :rank="false" :action="false" />
    <SubmissionDetails
      :submission-id="id"
      :authors="authors"
      :more-author="Math.max(0, authors.length - 3)"
      :time-complexity="timeComplexity"
      :memory-complexity="memoryComplexity"
      :language="language.name"
      :code-size="length"
      :execution-time="executionTime"
      :required-memory="executionMemory"
      :upvote="upvotes"
      :bookmark="forks"
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
        <prism class="codeArea" lang="cpp" :code="code" />
        <div class="testStatus">
          <div class="testStatusHeader" @click="isExpanded = !isExpanded">
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
                <span class="passedCnt">{{ passedTests }}</span>
              </div>
              <div class="failed">
                <span class="failedLabel">Failed</span>
                <span class="failedCnt">{{ failedTests }}</span>
              </div>
              <div class="pending">
                <span class="pendingLabel">Pending</span>
                <span class="pendingCnt">{{ pendingTests }}</span>
              </div>
              <div
                :class="{ expandIcon: true, isExpanded }"
                v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
              />
            </div>
          </div>
          <div
            v-for="(test, index) in tests"
            v-show="isExpanded"
            :key="test.id"
            class="testCaseDetails"
          >
            <TestCase
              :test-case-no="index + 1"
              :verdict="test.TestResult.verdict"
              :execution-time="test.TestResult.executionTime"
              :consumed-memory="test.TestResult.executionMemory"
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
export default {
  async asyncData({ $axios, params }) {
    const submission = await $axios.$get(`/submission/${params.id}/basic`)
    const tests = await $axios.$get(`/submission/${params.id}/tests`)
    return { ...submission, tests }
  },
  data() {
    return {
      isExpanded: false,
      tests: [],
    }
  },
  computed: {
    passedTests() {
      return this.tests.reduce(
        (total, current) =>
          (total += current.TestResult.verdict === 'ACCEPTED' ? 1 : 0),
        0
      )
    },
    failedTests() {
      return this.tests.reduce(
        (total, current) =>
          (total +=
            current.TestResult.verdict !== 'ACCEPTED' &&
            current.TestResult.verdict !== 'PENDING'
              ? 1
              : 0),
        0
      )
    },
    pendingTests() {
      return this.tests.reduce(
        (total, current) =>
          (total += current.TestResult.verdict === 'PENDING' ? 1 : 0),
        0
      )
    },
  },
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
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    color: $text-dark-secondary;
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

      .submissionText {
        @include font-label-semi();

        color: $text-light-primary;
        margin-left: 2.4rem;
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
          cursor: pointer;

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
            width: 30rem;
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

            .pending {
              display: flex;
              align-items: center;

              .pendingLabel {
                @include font-h4-semi();

                color: $extras-dark-yellow;
                margin-right: 0.5rem;
              }

              .pendingCnt {
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
        margin-left: 2.4rem;
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
