<template>
  <div class="container">
    <a class="userDetails" href="/profile">
      <img src="~/assets/avatar/user-default.png" alt="user avatar" />
      <span class="fullName">{{ fullName }}</span>
      <span class="userName">@{{ userName }}</span>
    </a>
    <div class="actionDetails">
      <div class="rank">
        <span class="actionName">Rank</span>
        <span class="actionValue">{{ rank }}</span>
      </div>
      <div class="contribution">
        <span class="actionName">Contribution</span>
        <span class="actionValue">{{ contribution }}</span>
      </div>
      <div class="submitted">
        <span class="actionName">Submitted</span>
        <span class="actionValue">{{ submitted }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ProfileBox',
  props: {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    contribution: {
      type: Number,
      required: true,
    },
    submitted: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 39.1rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;
  .userDetails {
    display: flex;
    flex-direction: column;
    align-items: center;

    // &:hover {
    //   .fullName {
    //     text-decoration: underline;
    //   }
    // }

    img {
      width: 7rem;
      height: 7rem;
      margin-top: 1.7rem;
      border-radius: 50%;
    }
    .fullName {
      @include font-body-bold();
      @include single-line();

      color: $text-light-primary;
      margin-top: 0.4rem;
    }

    .userName {
      @include font-meta-regular();

      color: $app-dark-secondary;
      margin-top: 0.4rem;
    }
  }
  .actionDetails {
    display: flex;
    // align-items: center;
    // flex: 1;
    // justify-content: space-around;
    margin-top: 0.9rem;
    .actionName {
      @include font-h4-regular();

      color: $text-dark-secondary;
    }
    .actionValue {
      @include font-h3-semi();

      color: $text-light-primary;
      padding: 0.3rem 0 2rem 0;
    }
    .rank,
    .contribution,
    .submitted {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .rank {
      margin-left: 5.1rem;
    }
    .contribution {
      margin-left: 5.2rem;
    }
    .submitted {
      margin-left: 2.8rem;
    }
  }
}
</style>
