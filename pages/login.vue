<template>
  <AuthPage page="LOGIN" />
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
}
</script>
