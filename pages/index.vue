<template>
  <div class="page-container">
    <div class="left">
      <div class="header">
        <span>Categories</span>
        <input placeholder="Filter..." />
      </div>
      <hr />
      <div class="boxes">
        <category-banner name="Input/Output" thumbnail="input-output" />
        <category-banner
          name="Advanced Search Techniques"
          thumbnail="advanced-search-techniques"
        />
        <category-banner name="Data Structures" thumbnail="data-structures" />
      </div>
    </div>
    <div class="right">
      <div class="contributor">
        <div class="header">
          <span>Top contributors</span>
          <a href="/leaderboard">View all</a>
        </div>
        <hr />
      </div>
      <div class="submission">
        <div class="header">
          <span>Recent</span>
          <a href="/submissions">View all</a>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryBanner from '~/components/CategoryBanner.vue'
export default Vue.extend({
  components: {
    CategoryBanner,
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

  span {
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
}
</style>
