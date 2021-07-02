<template>
  <auth-page page="RESET_PASS" />
</template>

<script lang="ts">
import Vue from 'vue'
import AuthPage from '~/components/AuthPage.vue'

export default Vue.extend({
  components: { AuthPage },
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
})
</script>
