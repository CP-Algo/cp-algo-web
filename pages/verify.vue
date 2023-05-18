<template>
  <AuthPage page="VERIFY" />
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'auth',
  auth: 'guest',
}
</script>
