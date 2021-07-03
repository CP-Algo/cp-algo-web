<template>
  <NuxtChild />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
})
</script>
