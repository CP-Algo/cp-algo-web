<template>
  <div class="page-container">
    <div class="header">
      <div class="avatarItem">
        <img
          class="avatar"
          src="~/assets/avatar/user-default.png"
          alt="user avatar"
        />
        <div class="userDetails">
          <span class="fullName">Abraham Linkcoln</span>
          <span class="username">@abarahm</span>
          <div class="location">
            <div
              class="icon"
              v-html="require(`~/assets/svg/icon/handlesIcon.svg?raw`)"
            />
            <span class="uni">University of Dhaka</span>
            <span class="comma">,&nbsp; </span>
            <span class="country">Bangladesh</span>
          </div>
        </div>
      </div>
      <div class="stats">
        <div class="rank">
          <div class="title">Rank</div>
          <div class="valSuf">
            <span class="suf">#</span>
            <span class="val">1</span>
          </div>
        </div>
        <div class="contributoin">
          <div class="title">Contributoin</div>
          <div class="valExt">
            <span class="val">124</span>
            <span class="suf">pts</span>
          </div>
        </div>
        <div class="submitted">
          <div class="title">Submitted</div>
          <div class="valExt">
            <span class="val">495</span>
            <span class="suf">codes</span>
          </div>
        </div>
      </div>
    </div>
    <div class="profTab">
      <!-- <div
        class="ojicon"
        v-html="require(`~/assets/svg/icon/handlesIcon.svg?raw`)"
      /> -->
    </div>
    <div class="option">
      <div class="dropDown">
        <div
          class="optionIcon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Advanced Search Technique / BS</span>
      </div>
      <div class="languageOption">
        <div
          class="optionIcon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">C++14</span>
      </div>
      <div class="sortOption">
        <div
          class="optionIcon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">Submission length dsc.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

  .option {
    display: flex;
    align-items: center;
    margin-left: 6rem;
    margin-top: 3.6rem;

    .optionIcon {
      color: $background-dark-tertiary;
      width: 2.5rem;
      margin-right: 1.5rem;
    }

    .text {
      @include font-body-semi();
      @include single-line();

      color: $text-light-primary;
    }

    .dropDown {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-left: 0;
      margin-right: 2.4rem;
      width: 46.9rem;
    }

    .languageOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: 2.4rem;
      width: 27.5rem;
    }

    .sortOption {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: auto;
      width: 27.5rem;
    }
  }
}
</style>
