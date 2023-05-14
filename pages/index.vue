<template>
  <div class="page-container">
    <div class="left">
      <div class="header">
        <span v-if="!selectedCategory.id" class="headerTitle">Categories</span>
        <div v-else class="categoryNameHeader">
          <div
            class="leftArrow"
            @click="selectedCategory = { id: '' }"
            v-html="require(`~/assets/svg/icon/leftArrow.svg?raw`)"
          />
          <span class="headerTitle">{{ selectedCategory.name }} </span>
        </div>
        <input v-model="filter" placeholder="Filter..." />
      </div>
      <hr />
      <div v-if="!selectedCategory.id" class="boxes">
        <CategoryBanner
          v-for="category in filteredCategories"
          :key="category.id"
          :category="category"
          @categoryClicked="selectedCategory = category"
        />
      </div>
      <div v-else class="subcategoryHolder">
        <div
          v-for="subCategory in selectedCategory.children"
          :key="subCategory.id"
          class="subcategory"
        >
          <span class="subcategoryText">{{ subCategory.name }}</span>
          <TemplatesAlgorithm
            v-for="algorithm in filteredAlgorithms(subCategory)"
            :key="algorithm.id"
            :algorithm="algorithm"
          />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="contributor">
        <div class="header">
          <span class="headerTitle">Top contributors</span>
          <a href="/leaderboard">View all</a>
        </div>
        <hr />
        <div class="topContributorList">
          <top-contributor-row
            v-for="contributor in contributors.slice(0, 5)"
            :key="contributor.id"
            :rank="contributor.rank"
            :user-id="contributor.id"
            :full-name="contributor.name"
            :user-name="contributor.username"
            :point="contributor.points"
          />
        </div>
      </div>
      <div class="submission">
        <div class="header">
          <span class="headerTitle">Recent</span>
          <a href="/submissions">View all</a>
        </div>
        <hr />
        <div class="recentSubmissionList">
          <recent-submission-row
            v-for="submission in submissions.slice(0, 5)"
            :key="submission.id"
            :submission-id="submission.id"
            :algorithm="submission.algorithm.name"
            :code-size="submission.length"
            :taken-time="submission.executionTime"
            :user-id="submission.author.id"
            :user-name="submission.author.username"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'templates',
  async asyncData({ $axios }) {
    const topics = await $axios.$get('/topics')
    const { contributors } = await $axios.$get('/contributors')
    const { submissions } = await $axios.$get('/submissions')
    return { topics, contributors, submissions }
  },
  data() {
    return {
      selectedCategory: {
        id: '',
        name: '',
        children: []
      },
      filter: '',
    }
  },
  computed: {
    filteredCategories() {
      return this.topics.filter(
        (category) =>
          !this.filter ||
          category.name.toLowerCase().includes(this.filter.toLowerCase())
      )
    },
  },
  methods: {
    filteredAlgorithms(subCategory) {
      return subCategory.children.filter(
        (algorithm) =>
          (!this.filter ||
            algorithm.name.toLowerCase().includes(this.filter.toLowerCase()))
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  align-items: flex-start;
  padding: 3.6rem 6rem;
}

hr {
  width: 100%;
  border: none;
  background-color: $background-dark-tertiary;
  height: 0.1rem;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 86.2rem;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  height: 4.4rem;

  .categoryNameHeader {
    display: flex;
    align-items: center;

    .leftArrow {
      height: 3rem;
      margin-right: 2rem;
      color: $text-light-secondary;
      cursor: pointer;
    }
  }

  .headerTitle {
    @include font-h2-bold();

    color: $text-light-primary;
    margin-left: 1.2rem;
  }

  input {
    @include font-label-regular();

    color: $text-light-primary;
    &::placeholder {
      @include font-label-semi();

      color: $text-dark-secondary;
    }

    margin-left: auto;
    background-color: $background-dark-secondary;
    border: none;
    border-radius: 2.2rem;
    width: 27.5rem;
    height: 4.4rem;
    padding: 0 3rem;
  }

  a {
    @include font-body-semi();

    color: $text-light-secondary;
    margin-left: auto;
  }
}

.boxes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 5.2rem;
}

.subcategoryHolder {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 3rem;

  .subcategory {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 3rem;

    .subcategoryText {
      @include font-label-bold();

      color: $text-dark-secondary;
      margin: 0 0 1.2rem 1.6rem;
      align-self: flex-start;
    }
  }
}

.right {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin-left: auto;
  width: 39.2rem;

  .contributor,
  .submission {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .topContributorList,
  .recentSubmissionList {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 3.2rem;
  }

  .topContributorList {
    margin-bottom: 3.6rem;
  }
}
</style>
