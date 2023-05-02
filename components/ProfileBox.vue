<template>
  <div v-if="$auth.loggedIn" class="container">
    <a class="userDetails" href="/profile">
      <img
        :src="require(`~/assets/avatar/${$auth.user.id}.png`)"
        alt="user avatar"
      />
      <span class="fullName">{{ $auth.user.name }}</span>
      <span class="userName">@{{ $auth.user.username }}</span>
    </a>
    <div class="actionDetails">
      <div class="rank">
        <span class="actionName">Rank</span>
        <span class="actionValue">{{ $auth.user.rank }}</span>
      </div>
      <div class="contribution">
        <span class="actionName">Contribution</span>
        <span class="actionValue">{{ $auth.user.points }}</span>
      </div>
      <div class="submitted">
        <span class="actionName">Submitted</span>
        <span class="actionValue">{{ $auth.user.submissions }}</span>
      </div>
    </div>
  </div>
</template>

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
