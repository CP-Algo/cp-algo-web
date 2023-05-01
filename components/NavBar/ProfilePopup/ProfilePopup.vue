<template>
  <Popup
    :show="show"
    animation="slideRight"
    :custom-styles="{
      width: '31.2rem',
      top: '100%',
      right: 0,
      marginTop: '1.2rem',
      overflow: 'hidden',
    }"
    @hide="$emit('hide')"
  >
    <ProfilePopupOption
      :title="$auth.user.name"
      sub-title="View your profile"
      url="/profile"
    />
    <div class="bar" />
    <ProfilePopupOption
      icon="my-submissions"
      title="My Submissions"
      url="/my-submissions"
    />
    <ProfilePopupOption icon="settings" title="Settings" url="/settings" />
    <ProfilePopupOption icon="logout" title="Log out" :click="logout" />
  </Popup>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss" scoped>
.bar {
  border-bottom: thin solid $background-dark-tertiary;
  margin: 0.2rem 0;
}
</style>
