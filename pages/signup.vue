<template>
  <AuthPage page="SIGNUP" />
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
}
</script>
