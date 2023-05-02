<template>
  <div class="container">
    <div class="rank">
      <span class="prefSuf">#</span>
      <span class="value"> {{ rank }}</span>
    </div>
    <a class="userDetails" :href="`/profile/${userName}`">
      <img :src="require(`~/assets/avatar/${userId}.png`)" alt="user avatar" />
      <div class="right">
        <div class="fullName">{{ fullName }}</div>
        <div class="userName">@{{ userName }}</div>
      </div>
    </a>
    <div class="points">
      <span class="value"> {{ point }}</span>
      <span class="prefSuf">pts</span>
    </div>
    <div class="submitted">
      <span class="value"> {{ submitted }}</span>
      <span class="prefSuf">codes</span>
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
    submitted: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$separator-space: 2rem;
.container {
  display: flex;
  padding: 2.4rem 1.6rem;
  margin-bottom: 1.2rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;

  .prefSuf {
    @include font-body-semi();

    color: $text-dark-secondary;
    margin-right: 0.6rem;
  }

  .value {
    @include font-h3-semi();

    color: $text-light-primary;
    margin-right: 0.5rem;
  }

  .rank {
    flex: 32;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $separator-space;
  }

  .userDetails {
    flex: 155;
    display: flex;
    justify-content: center;
    margin-right: $separator-space;

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

  .points {
    flex: 64;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $separator-space;
  }

  .submitted {
    flex: 64;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
