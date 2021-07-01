<template>
  <div class="page-container">
    <auth-form class="popup" :mode="mode" @modeUpdated="mode = $event" />
  </div>
</template>

<script>
import AuthForm from '~/components/AuthForm.vue'
export default {
  components: { AuthForm },
  layout: 'auth',
  data() {
    return {
      mode: 'SIGNUP',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;

  .popup {
    width: 60rem;
    margin: auto 13.4rem auto auto;
  }
}
</style>
