<template>
  <div id="nav-bar">
    <img class="brand-icon" src="~assets/svg/site/logo.svg" />
    <div class="menu">
      <div
        :class="{
          'menu-item': true,
          selected: selectedMenuItem === 'TEMPLATES',
        }"
        @click="selectedMenuItem = 'TEMPLATES'"
      >
        Templates
      </div>
      <div
        :class="{
          'menu-item': true,
          selected: selectedMenuItem === 'LEADERBOARD',
        }"
        @click="selectedMenuItem = 'LEADERBOARD'"
      >
        Leaderboard
      </div>
    </div>
    <div class="right">
      <div class="action">
        <div class="icon-container">
          <img class="action-icon" src="~assets/svg/nav-bar/codebook.svg" />
        </div>
      </div>
      <div class="action">
        <div class="icon-container">
          <img
            class="action-icon"
            src="~assets/svg/nav-bar/notifications.svg"
          />
        </div>
      </div>
      <div class="action">
        <div
          class="icon-container"
          @click="showProfilePopup = !showProfilePopup"
        >
          <div class="action-icon avatar" data-testid="nav-bar-avatar" />
        </div>
        <profile-popup
          :show="showProfilePopup"
          @hide="showProfilePopup = false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfilePopup from '~/components/NavBar/ProfilePopup/ProfilePopup.vue'

export default Vue.extend({
  name: 'NavBar',
  components: {
    ProfilePopup,
  },
  data() {
    return {
      selectedMenuItem: 'TEMPLATES',
      showProfilePopup: false,
    }
  },
})
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
            background-color: $text-light-secondary;
          }
        }
      }
    }
  }
}
</style>
