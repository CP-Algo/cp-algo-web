<template>
  <AuthPage page="RESET_PASS" />
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
}
</script>
