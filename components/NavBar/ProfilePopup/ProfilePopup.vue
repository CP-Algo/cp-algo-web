<template>
  <popup
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
    <profile-popup-option
      :title="$auth.user.name"
      sub-title="View your profile"
      url="/user"
    />
    <div class="bar" />
    <profile-popup-option
      icon="my-submissions"
      title="My Submissions"
      url="/my-submissions"
    />
    <profile-popup-option icon="settings" title="Settings" url="/settings" />
    <profile-popup-option icon="logout" title="Log out" :click="logout" />
  </popup>
</template>

<script lang="ts">
import Vue from 'vue'
import Popup from '~/components/Popup.vue'
import ProfilePopupOption from '~/components/NavBar/ProfilePopup/ProfilePopupOption.vue'

export default Vue.extend({
  name: 'ProfilePopup',
  components: {
    Popup,
    ProfilePopupOption,
  },
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
})
</script>

<style lang="scss" scoped>
.bar {
  border-bottom: thin solid $background-dark-tertiary;
  margin: 0.2rem 0;
}
</style>
