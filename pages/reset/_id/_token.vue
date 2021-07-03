<template>
  <auth-page
    :user-id="$route.params.id"
    page="RESET_PASS"
    :token="$route.params.token"
  />
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
