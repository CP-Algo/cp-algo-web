<template>
  <div class="page-container">
    <div class="left">
      <div class="header">
        <span class="rank header-label">Rank</span>
        <span class="user header-label">User</span>
        <span class="contribution header-label">Contribution</span>
        <span class="submitted header-label">Submitted</span>
      </div>
      <LeaderboardRow
        v-for="user in contributors"
        :key="user.id"
        :user-id="user.id"
        :rank="user.rank"
        :full-name="user.name"
        :user-name="user.username"
        :point="user.points"
        :submitted="user.submissions"
      />
      <div class="pagination">
        <div
          v-if="hasPrev"
          class="icon"
          @click="fetchPrev"
          v-html="require(`~/assets/svg/icon/prevIcon.svg?raw`)"
        />
        <span class="pageNo">{{ page }}</span>
        <div
          v-if="hasNext"
          class="icon"
          @click="fetchNext"
          v-html="require(`~/assets/svg/icon/nextIcon.svg?raw`)"
        />
      </div>
    </div>
    <div v-if="$auth.loggedIn" class="right">
      <span class="me">Me</span>
      <profile-box />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'leaderboard',
  data() {
    return {
      contributors: [],
      hasPrev: false,
      hasNext: false,
      page: 1,
    }
  },
  async fetch() {
    const { contributors, hasPrev, hasNext } = await this.$axios.$get(
      `/contributors?page=${this.page}`
    )
    this.contributors = contributors
    this.hasPrev = hasPrev
    this.hasNext = hasNext
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
  },
}
</script>

<style lang="scss" scoped>
$separator-space: 2rem;
.page-container {
  display: flex;
  align-items: flex-start;

  .left {
    display: flex;
    flex-direction: column;
    flex-basis: 87.5rem;
    margin-top: 3.6rem;
    margin-left: 4.7rem;

    .header {
      @include font-h4-regular();

      color: $text-dark-secondary;
      display: flex;
      align-items: center;
      padding: 0 1.6rem;
      margin-bottom: 1.6rem;

      .header-label {
        margin-right: $separator-space;
        text-align: center;
      }

      .rank {
        flex: 32;
      }
      .user {
        flex: 155;
      }
      .contribution {
        flex: 64;
      }
      .submitted.header-label {
        flex: 64;
        margin-right: 0;
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 4rem;

      .icon {
        color: $text-light-primary;
        cursor: pointer;
      }

      .pageNo {
        @include font-h4-semi();

        color: $text-light-primary;
        margin: 0 3rem;
        border-radius: 0.7rem;
        padding: 0.5rem 1rem;
        background-color: $app-light-primary;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.6rem;
    margin-left: 6.9rem;

    .me {
      @include font-h4-regular();

      color: $text-dark-secondary;
      margin-bottom: 1.6rem;
    }
  }
}
</style>
