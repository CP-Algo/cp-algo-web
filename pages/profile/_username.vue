<template>
  <div class="page-container">
    <div class="header">
      <div class="avatarItem">
        <img
          class="avatar"
          :src="require(`~/assets/avatar/${id}.png`)"
          alt="user avatar"
        />
        <div class="userDetails">
          <span class="fullName">{{ name }}</span>
          <span class="username">@{{ username }}</span>
          <div v-if="institution || country" class="location">
            <div
              class="icon"
              v-html="require(`~/assets/svg/icon/Location Icon.svg?raw`)"
            />
            <span v-if="institution" class="uni">{{ institution }}</span>
            <span v-if="institution && country" class="comma">,&nbsp; </span>
            <span v-if="country" class="country">{{ country }}</span>
          </div>
        </div>
      </div>
      <div class="stats">
        <div class="rank">
          <div class="title">Rank</div>
          <div class="valSuf">
            <span class="suf">#</span>
            <span class="val">{{ rank }}</span>
          </div>
        </div>
        <div class="contributoin">
          <div class="title">Contribution</div>
          <div class="valExt">
            <span class="val">{{ points }}</span>
            <span class="suf">pts</span>
          </div>
        </div>
        <div class="submitted">
          <div class="title">Submitted</div>
          <div class="valExt">
            <span class="val">{{ submissions }}</span>
            <span class="suf">codes</span>
          </div>
        </div>
      </div>
    </div>
    <div class="profTab">
      <div
        class="ojicon"
        v-html="require(`~/assets/svg/icon/handlesIcon.svg?raw`)"
      />
    </div>

    <Codebook class="codebookTable" :codebook-id="id" :new-button="false" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $auth, params }) {
    const username = params.username || $auth.user.username
    const user = await $axios.$get(`/user/${username}/basic`)
    const handles = await $axios.$get(`/user/${username}/handles`)
    const codebook = await $axios.$get(`/codebook/${user.id}`)
    return { ...user, handles, codebook }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;

  .header {
    display: flex;
    align-items: flex-start;
    margin-top: 5rem;
    margin-left: 6rem;

    .avatarItem {
      display: flex;
      align-items: stretch;
      margin-right: auto;

      .avatar {
        margin-right: 1.6rem;
        width: 12rem;
        border-radius: 0.6rem;
      }

      .userDetails {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .fullName {
          @include font-h2-bold();

          color: $text-light-primary;
        }

        .username {
          @include font-body-semi();

          color: $app-dark-secondary;
        }

        .location {
          display: flex;
          align-items: center;
          margin-top: auto;
          margin-bottom: 1.3rem;

          .icon {
            color: $text-light-secondary;
            margin-right: 0.8rem;
          }

          .uni,
          .comma,
          .country {
            @include font-body-semi();
            @include single-line();

            color: $text-light-primary;
          }
        }
      }
    }
    .stats {
      display: flex;
      align-items: flex-start;
      width: 40rem;
      justify-content: space-between;
      margin-left: auto;
      margin-right: 46rem;

      .rank,
      .contribution,
      .submitted {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .title {
        @include font-body-semi();

        color: $text-light-secondary;
        margin-bottom: 0.8rem;
      }

      .suf {
        @include font-body-semi();

        color: $text-dark-secondary;
      }

      .val {
        @include font-h3-semi();

        color: $text-light-primary;
      }
    }
  }
  .profTab {
    display: flex;
    align-items: center;
    height: 5.2rem;
    margin-left: 0;
    margin-right: 0;
    background-color: $background-dark-secondary;
  }

  .codebookTable {
    margin: 0 6rem 6.7rem 6rem;
  }
}
</style>
