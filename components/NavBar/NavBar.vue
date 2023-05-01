<template>
  <div id="nav-bar">
    <a href="/"><img class="brand-icon" src="~assets/svg/site/logo.svg" /></a>
    <div class="menu">
      <a
        :class="{
          'menu-item': true,
          selected: selectedMenuItem === 'TEMPLATES',
        }"
        href="/"
      >
        Templates
      </a>
      <a
        :class="{
          'menu-item': true,
          selected: selectedMenuItem === 'LEADERBOARD',
        }"
        href="/leaderboard"
      >
        Leaderboard
      </a>
    </div>
    <div class="right">
      <a v-if="$auth.loggedIn" class="action" href="/codebook">
        <div class="icon-container">
          <img class="action-icon" src="~assets/svg/nav-bar/codebook.svg" />
        </div>
      </a>
      <div class="action">
        <div
          v-if="$auth.loggedIn"
          class="icon-container"
          @click="showProfilePopup = !showProfilePopup"
        >
          <img
            class="action-icon avatar"
            data-testid="nav-bar-avatar"
            :src="require(`~/assets/avatar/${$auth.user.id}.png`)"
          />
        </div>
        <a v-else class="join-button" href="/signup">Join Us</a>
        <ProfilePopup
          v-if="$auth.loggedIn"
          :show="showProfilePopup"
          @hide="showProfilePopup = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedMenuItem: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showProfilePopup: false,
    }
  },
}
</script>

<style lang="scss" scoped>
#nav-bar {
  height: 8rem;
  padding: 0 3rem 0 6rem;
  background-color: $app-dark-primary;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .brand-icon {
    height: 5.5rem;
    margin-right: 4.5rem;
  }

  .menu {
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;

    .menu-item {
      @include font-h3-semi();

      color: $text-light-primary;
      padding: 0 1.8rem;
      margin: 0 0.25rem;
      display: flex;
      align-items: center;
      cursor: pointer;

      &.selected {
        @include font-h3-bold();

        background-color: $app-dark-primary-highlighted;
      }

      &:hover {
        background-color: $app-dark-primary-highlighted;
      }
    }
  }

  .right {
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .action {
      height: 100%;
      position: relative;
      display: flex;

      .join-button {
        @include font-h3-bold();

        color: $text-light-primary;
        margin: auto 0;
        padding: 1.2rem 2.4rem;
        border-radius: 1.6rem;
        border: 0.3rem solid $app-dark-secondary;

        &:hover {
          background-color: $app-dark-secondary;
        }
      }

      .icon-container {
        height: 100%;
        padding: 0 3rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: $app-dark-primary-highlighted;
        }

        .action-icon {
          max-height: 3.7rem;
          max-width: 3.7rem;

          &.avatar {
            height: 3.7rem;
            width: 3.7rem;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
