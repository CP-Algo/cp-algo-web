<template>
  <AuthPage page="FORGOT_PASS" />
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
}
</script>
