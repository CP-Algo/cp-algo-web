<template>
  <div class="page-container">
    <div class="left">
      <div class="header">
        <span v-if="!selectedCategory.id" class="headerTitle">Categories</span>
        <div v-else class="categoryNameHeader">
          <div
            class="leftArrow"
            @click="selectedCategory.id = ''"
            v-html="require(`~/assets/svg/icon/leftArrow.svg?raw`)"
          />
          <span class="headerTitle">{{ selectedCategory.name }} </span>
        </div>
        <input placeholder="Filter..." />
      </div>
      <hr />
      <div v-if="!selectedCategory.id" class="boxes">
        <category-banner
          name="Input/Output"
          thumbnail="input-output"
          @categoryClicked="selectedCategory = $event"
        />
        <category-banner
          name="Advanced Search Techniques"
          thumbnail="advanced-search-techniques"
          @categoryClicked="selectedCategory = $event"
        />
        <category-banner
          name="Data Structures"
          thumbnail="data-structures"
          @categoryClicked="selectedCategory = $event"
        />
      </div>
      <div v-else class="subcategoryHolder">
        <div class="subcategory">
          <span class="subcategoryText">subcategory 1</span>
          <templates-algorithm algorithm-name="Binary Search" />
          <templates-algorithm algorithm-name="Ternary Search" />
        </div>
        <div class="subcategory">
          <span class="subcategoryText">subcategory 2</span>
          <templates-algorithm algorithm-name="New Algorithm in the world" />
          <templates-algorithm algorithm-name="Ternary Search" />
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
            :rank="1"
            full-name="Abraham Lincoln"
            user-name="abrahm"
            :point="495"
          />
          <top-contributor-row
            :rank="2"
            full-name="Doctor Strange"
            user-name="doctor"
            :point="234"
          />
          <top-contributor-row
            :rank="3"
            full-name="JK Rowling"
            user-name="jkr"
            :point="123"
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
            algorithm="Aho Corasick String Matching"
            :code-size="258"
            :taken-time="438"
            user-name="fahimcp495"
          />
          <recent-submission-row
            algorithm="KMP String Matching"
            :code-size="582"
            :taken-time="838"
            user-name="DrSwad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryBanner from '~/components/CategoryBanner.vue'
import RecentSubmissionRow from '~/components/RecentSubmissionRow.vue'
import TemplatesAlgorithm from '~/components/TemplatesAlgorithm.vue'
import TopContributorRow from '~/components/TopContributorRow.vue'
export default Vue.extend({
  components: {
    CategoryBanner,
    TopContributorRow,
    RecentSubmissionRow,
    TemplatesAlgorithm,
  },
  data() {
    return {
      selectedCategory: {
        id: '',
        name: '',
      },
    }
  },
})
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
  // flex-direction: column;
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
