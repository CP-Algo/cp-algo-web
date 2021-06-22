<template>
  <div>
    <auth-form :page="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthForm from '~/components/Input/AuthForm.vue'

export default Vue.extend({
  name: 'AuthPage',
  components: {
    AuthForm,
  },
  props: {
    page: {
      type: String,
      required: true,
    },
  },
})
</script>
