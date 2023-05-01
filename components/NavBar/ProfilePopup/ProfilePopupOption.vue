<template>
  <a class="popup-option" :href="url" @click.prevent="clicked">
    <div class="icon-container">
      <div
        v-if="icon"
        class="icon"
        v-html="require(`~/assets/svg/nav-bar/${icon}.svg?raw`)"
      />
      <img
        v-else
        class="avatar"
        :src="require(`~/assets/avatar/${$auth.user.id}.png`)"
      />
    </div>

    <div class="info">
      <span class="title">{{ title }}</span>
      <span class="sub-title">{{ subTitle }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    click: {
      type: Function,
      default: null,
    },
    url: {
      type: String,
      default: '',
    },
  },
  methods: {
    clicked() {
      this.click ? this.click() : (window.location.href = this.url)
    },
  },
}
</script>

<style lang="scss" scoped>
.popup-option {
  padding: 1.6rem 2.4rem 1.6rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: $background-dark-tertiary;
  }

  .icon-container {
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
    }

    .icon {
      max-height: 2.5rem;
      max-width: 3rem;
      color: $text-light-secondary;
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .title {
      @include font-body-bold();

      color: $text-light-primary;
    }

    .sub-title {
      @include font-meta-regular();

      color: $text-light-secondary;
    }
  }
}
</style>
