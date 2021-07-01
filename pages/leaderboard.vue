<template>
  <div class="page-container">
    <div class="left">
      <div class="header">
        <span class="rank">Rank</span>
        <span class="user">User</span>
        <span class="contribution">Contribution</span>
        <span class="submitted">Submitted</span>
      </div>
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <leaderboard-row
        :rank="1"
        full-name="Abraham Lincoln"
        user-name="abraham"
        :contribution="495"
        :point="124"
        :submitted="100"
      />
      <div class="pagination">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="pageNo">&nbsp; 6 &nbsp;</span>
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
      </div>
    </div>
    <div class="right">
      <span class="me">Me</span>
      <profile-box
        full-name="Abraham Linkoln"
        user-name="abraham"
        :rank="123"
        :contribution="344"
        :submitted="124"
      />
    </div>
  </div>
</template>

<script>
import LeaderboardRow from '~/components/LeaderboardRow.vue'
import ProfileBox from '~/components/ProfileBox.vue'
export default {
  components: { ProfileBox, LeaderboardRow },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  align-items: flex-start;

  .left {
    display: flex;
    flex-direction: column;
    // align-items: center;
    flex-basis: 87.5rem;
    margin-top: 3.6rem;
    margin-left: 4.7rem;
    .header {
      @include font-h4-regular();

      color: $text-dark-secondary;
      display: flex;
      // align-items: center;
      // justify-content: space-around;
      margin-bottom: 1.6rem;
      .rank {
        margin-left: 3rem;
      }
      .user {
        margin-left: 19.2rem;
      }
      .contribution {
        margin-left: 19.3rem;
      }
      .submitted {
        margin-left: 19.1rem;
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
      }
      .pageNo {
        @include font-h4-semi();

        color: $text-light-primary;
        margin: 0 1rem;
        border-radius: 0.7rem;
        padding: 0.5rem;
        background-color: $app-light-primary;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    // flex-basis: 39.1rem;
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
