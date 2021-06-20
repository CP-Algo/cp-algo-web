<template>
  <div>
    <nav-bar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '~/components/NavBar/NavBar.vue'
export default Vue.extend({
  components: {
    NavBar,
  },
})
</script>
