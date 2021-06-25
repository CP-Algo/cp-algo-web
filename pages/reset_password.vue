<template>
  <div class="page-container">
    <auth-page page="login" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthPage from '~/components/AuthPage.vue'

export default Vue.extend({
  auth: 'guest',
  components: { AuthPage },
  layout: 'auth',
})
</script>
