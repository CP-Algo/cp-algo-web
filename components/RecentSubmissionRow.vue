<template>
  <div class="container">
    <a class="algorithmName" :href="`/submission/${submissionId}`">{{
      algorithm
    }}</a>
    <div class="details">
      <div class="detailsItem">
        <div
          class="detailsIcon"
          v-html="require(`~/assets/svg/icon/codeSize.svg?raw`)"
        />
        <span class="detailsText"> {{ codeSize }} char </span>
      </div>
      <div class="detailsItem">
        <div
          class="detailsIcon"
          v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
        />
        <span class="detailsText">{{
          takenTime ? `${takenTime} ms` : '-'
        }}</span>
      </div>
      <div class="detailsItem user">
        <img
          class="avatar"
          :src="require(`~/assets/avatar/${userId}.png`)"
          alt="users avatar"
        />
        <span class="detailsText">{{ userName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submissionId: {
      type: Number,
      required: true,
    },
    algorithm: {
      type: String,
      required: true,
    },
    codeSize: {
      type: Number,
      required: true,
    },
    takenTime: {
      type: Number,
      default: null,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1.6rem 2rem;
  margin-bottom: 2.4rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;

  .algorithmName {
    @include font-body-bold();
    @include single-line();

    color: $text-light-primary;
    text-align: left;
    margin-bottom: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .detailsItem {
      display: flex;
      align-items: center;
    }

    .detailsIcon {
      height: 1.6rem;
      margin-right: 0.8rem;
      color: $text-light-secondary;
    }

    .detailsText {
      @include font-h4-regular();

      color: $text-light-primary;
    }

    .avatar {
      width: 2rem;
      height: 2rem;
      margin-right: 0.8rem;
      border-radius: 50%;
    }
  }
}
</style>
