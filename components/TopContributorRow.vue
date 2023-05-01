<template>
  <div class="container">
    <div class="rank">
      <span class="signOrUnit">#</span>
      <span class="value"> {{ rank }}</span>
    </div>
    <a class="userDetails" :href="`/user/${userName}`">
      <img :src="require(`~/assets/avatar/${userId}.png`)" alt="user avatar" />
      <div class="right">
        <div class="fullName">{{ fullName }}</div>
        <div class="userName">@{{ userName }}</div>
      </div>
    </a>
    <div class="points">
      <span class="value"> {{ point }}</span>
      <span class="signOrUnit">pts</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 2.4rem 1.6rem;
  margin-bottom: 2.4rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;
}
.rank {
  display: flex;
  align-items: center;
  margin-right: 2.4rem;
}

.signOrUnit {
  @include font-body-semi();

  color: $text-dark-secondary;
  margin-right: 0.6rem;
}

.value {
  @include font-h3-semi();

  color: $text-light-primary;
  margin-right: 0.5rem;
}

.userDetails {
  display: flex;
  align-items: center;
  flex: 1;

  &:hover {
    .fullName {
      text-decoration: underline;
    }
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    .fullName {
      @include font-body-bold();
      @include single-line();

      color: $text-light-primary;
    }

    .userName {
      @include font-meta-regular();

      color: $app-dark-secondary;
    }
  }
}
</style>
