<template>
  <div class="page-container">
    <div class="sidebar">
      <div
        :class="{ general: true, selected: selectedMode === 'GENERAL' }"
        @click="selectedMode = 'GENERAL'"
      >
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/generalIcon.svg?raw`)"
        />
        <span class="text">General</span>
      </div>
      <div
        :class="{ security: true, selected: selectedMode === 'SECURITY' }"
        @click="selectedMode = 'SECURITY'"
      >
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/securityIcon.svg?raw`)"
        />
        <span class="text">Security</span>
      </div>
      <div
        :class="{ handles: true, selected: selectedMode === 'HANDLES' }"
        @click="selectedMode = 'HANDLES'"
      >
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/handlesIcon.svg?raw`)"
        />
        <span class="text">Handles</span>
      </div>
    </div>

    <SettingsForm class="form" :mode="selectedMode" />

    <div class="profile">
      <ProfileBox />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      selectedMode: 'GENERAL',
    }
  },
  auth: true,
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  align-items: stretch;
  margin-left: 0;

  .sidebar {
    display: flex;
    flex-direction: column;
    border-right: 0.1rem solid $background-dark-secondary;

    .icon {
      width: 2.8rem;
      color: $text-light-secondary;
      margin-right: 2.4rem;
    }

    .text {
      @include font-body-bold();

      color: $text-light-primary;
    }
    .general {
      margin-top: 3.6rem;
    }

    .general,
    .security,
    .handles {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 1.7rem 18.5rem 1.7rem 3.6rem;
      &:hover {
        background-color: $background-dark-secondary;
      }
      &.selected {
        background-color: $background-dark-tertiary;
      }
    }
  }
  .form {
    margin-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
  }
  .profile {
    margin-top: 3.6rem;
    margin-right: 5.8rem;
  }
}
</style>
