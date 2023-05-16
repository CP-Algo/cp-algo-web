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
      :background="false"
    />
    <AlgorithmSpecifications :algorithm="algorithm" />
    <div class="codeDiscussion">
      <div class="codeDetails">
        <div class="submissionHeader">
          <span class="submissionLabel">Submission</span>
          <div class="submissionHeaderButtons">
            <span class="submissionHeaderButton" @click="copyToClipboard">Copy</span>
            <a class="submissionHeaderButton" :href="`/submit/${id}`">Edit</a>
            <a class="submissionHeaderButton" @click="rejudge">Rejudge</a>
          </div>
        </div>
        <Editor class="codeArea" v-model="code" :lang="language.ace_id" :read-only="true" />
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
          <div class="testCaseDetails">
            <TestCase
              v-for="(test, index) in tests"
              v-show="isExpanded"
              :key="test.id"
              :test-case-no="index + 1"
              :verdict="test.TestResult.verdict"
              :verdict-description="test.TestResult.verdictDescription"
              :execution-time="test.TestResult.executionTime"
              :consumed-memory="test.TestResult.executionMemory"
            />
          </div>
        </div>
      </div>
      <div class="discussion">
        <span class="discussionLabel">Discussion</span>
        <div class="discussionChat"></div>
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
import status from '../../config/judge0_mappings/status'

export default {
  async asyncData({ $axios, params }) {
    const submission = await $axios.$get(`/submission/${params.id}/basic`)
    const tests = await $axios.$get(`/submission/${params.id}/tests`)
    return { ...submission, tests }
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    passedTests() {
      return this.tests.reduce(
        (total, current) =>
          (total += current.TestResult.verdict === 3 ? 1 : 0),
        0
      )
    },
    failedTests() {
      return this.tests.reduce(
        (total, current) =>
          (total += current.TestResult.verdict > 3 ? 1 : 0),
        0
      )
    },
    pendingTests() {
      return this.tests.reduce(
        (total, current) =>
          (total += current.TestResult.verdict <= 2 ? 1 : 0),
        0
      )
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.code)
      this.$toast.success("Code copied to clipboard")
    },
    async pollForTests() {
      this.tests = await this.$axios.$get(`/submission/${this.id}/tests`)
      let pending = false
      this.tests.forEach(test => pending = pending || test.TestResult.verdict <= 2)
      if (pending) {
        await new Promise(resolve => setTimeout(resolve, 3000))
        return this.pollForTests()
      }
    },
    async rejudge() {
      this.isExpanded = true
      this.$toast.success("Rejudging the submission...")
      await this.$axios.$post('/submission', {
        id: this.id,
        algorithm: this.algorithm.id,
        code: this.code,
        language: this.language.id,
        timeComplexity: this.timeComplexity,
        memoryComplexity: this.memoryComplexity,
      })
      this.tests.forEach(test => {
        test.TestResult.verdict = 1
        test.TestResult.verdictDescription = status.find(({id}) => id == 1).description
      })
      await new Promise(resolve => setTimeout(resolve, 3000))
      await this.pollForTests()
    }
  },
  mounted() {
    let pending = false
    this.tests.forEach(test => pending = pending || test.TestResult.verdict <= 2)
    if (pending) {
      this.isExpanded = true
      this.pollForTests()
    }
  }
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
  .codeDiscussion {
    flex: 1;
    display: flex;
    margin-top: 3.6rem;

    .codeDetails {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-right: 3.6rem;
      width: 86.5rem;

      .submissionHeader {
        display: flex;
        align-items: center;

        .submissionLabel {
          @include font-label-semi();

          color: $text-light-primary;
          margin-left: 2.4rem;
        }

        .submissionHeaderButtons {
          margin-left: auto;
          margin-right: 1.2rem;

          .submissionHeaderButton {
            @include font-meta-semi();
            color: $text-light-secondary;
            border-radius: 0.5rem;
            border: thin solid $background-light-tertiary;
            padding: 0.5rem 1.5rem;
            margin-left: 1rem;
            cursor: pointer;

            &:hover {
              background-color: $background-light-tertiary;
            }
          }
        }
      }

      .codeArea {
        flex: 1;
        margin-top: 1.2rem;
        border: 0 solid;
        border-radius: 1.2rem;
      }

      .testStatus {
        display: flex;
        flex-direction: column;
        margin-top: 3.2rem;
        border-radius: 1.2rem;
        overflow: hidden;
        background-color: $background-dark-secondary;

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

        .testCaseDetails {
          max-height: 20rem;
          overflow: auto;
          border-radius: 1.2rem;
          border: 1px solid $background-dark-secondary;
        }
      }
    }

    .discussion {
      display: flex;
      flex-direction: column;

      .discussionLabel {
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
