<template>
  <div class="page-container">
    <div class="option">
      <div class="dropDown">
        <AlgorithmPopup
          :show="showAlgorithmPopup"
          @hide="showAlgorithmPopup = false"
          :options="topics"
          @selected="({category, subCategory, algorithm}) => algorithmSelected(category, subCategory, algorithm)"
          :addAnyOption="false"
        />
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <div class="text" @click="showAlgorithmPopup = !showAlgorithmPopup">
          {{algorithm.name}}
        </div>
      </div>
      <div class="languageOption">
        <LanguagePopup
          :show="showLanguagePopup"
          @hide="showLanguagePopup = false"
          :languages="languages"
          @language="languageSelected"
          :top="false"
        />
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text" @click="showLanguagePopup = !showLanguagePopup">
          {{language.name}}
        </span>
      </div>
      <div class="sortOption">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Submission length dsc.</span>
      </div>
      <a class="new" href="/submit">+ &nbsp; New</a>
    </div>
    <SubmissionDetailsHeader class="heading" />
    <div class="submissionTable">
      <SubmissionDetails
        v-for="submission in submissions"
        :key="submission.id"
        :submission-id="submission.id"
        :rank="submission.rank"
        :authors="submission.authors"
        :more-author="Math.max(0, submission.authors.length - 3)"
        :time-complexity="submission.timeComplexity"
        :memory-complexity="submission.memoryComplexity"
        :language="submission.language.name"
        :code-size="submission.length"
        :execution-time="submission.executionTime"
        :required-memory="submission.executionMemory"
        :upvote="submission.upvotes"
        :bookmark="submission.forks"
        style="margin-bottom: 1.2rem"
      />
    </div>
    <div class="pageDetails">
      <div class="left">
        <span class="noOfPage">{{perPage}}</span>
        <span class="noOfPageSuf">&nbsp; rows per page</span>
      </div>
      <div class="right">
        <div
          v-if="page > 1"
          class="icon"
          @click="fetchPrev"
          v-html="require(`~/assets/svg/icon/prevIcon.svg?raw`)"
        />
        <span class="pageNo">{{ page }}</span>
        <div
          v-if="page * perPage < total"
          class="icon"
          @click="fetchNext"
          v-html="require(`~/assets/svg/icon/nextIcon.svg?raw`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLanguagePopup: false,
      showAlgorithmPopup: false,
      topics: [],
      algorithm: { id: '', name: '' },
      languages: [],
      language: { id: '', name: '', ace_id: '' },
      sortBy: 'LENGTH_DESC',
      submissions: [],
      total: 0,
      // perPage: 20,
      perPage: 1,
      page: 1,
    }
  },
  async fetch() {
    this.languages = await this.$axios.$get(`/language`)
    this.language = this.languages.find(item => item.id === 54)

    this.topics = await this.$axios.$get(`/topics`)
    this.algorithm = this.topics[0].children[0].children[0]
    if (!this.$route?.query?.algorithm) {
      this.algorithm = this.topics[0].children[0].children[0]
    }
    else {
      this.topics.forEach(category => {
        category.children.forEach(subCategory => {
          subCategory.children.forEach(algorithm => {
            if (this.$route.query.algorithm === algorithm.id) {
              this.algorithm = algorithm
            }
          })
        })
      })
    }

    await this.fetchSubmissions()
  },
  methods: {
    fetchPrev() {
      this.page = this.page - 1
      this.$fetch()
    },
    fetchNext() {
      this.page = this.page + 1
      this.$fetch()
    },
    async fetchSubmissions() {
      const { submissions, total } = await this.$axios.$get(
        `/submissions?page=${this.page}&count=${this.perPage}&algorithm=${this.algorithm.id}&language=${this.language.id}&sort_by=${this.sortBy}`
      )
      this.submissions = submissions
      this.total = total
    },
    languageSelected(id, name) {
      this.language = this.languages.find(lang => lang.id === id);
      this.showLanguagePopup = false;
    },
    algorithmSelected(category, subCategory, algorithm) {
      this.algorithm = algorithm;
      this.showAlgorithmPopup = false;
      this.page = 1
      this.fetchSubmissions()
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 3.6rem auto;

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
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-left: 0;
      margin-right: 2.4rem;
      width: 46.9rem;

      .text {
        flex: 1;
      }
    }

    .languageOption {
      position: relative;
      cursor: pointer;
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
        cursor: pointer;
      }

      .pageNo {
        margin: 0 2.8rem;
      }
    }
  }
}
</style>
