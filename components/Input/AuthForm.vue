<template>
  <div>
    <input-field v-model="username" label="username" class="inputField"
      >Username</input-field
    >
    <input-field v-model="password" label="password" class="inputField"
      >Password</input-field
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputField from '~/components/Input/InputField.vue'

export default Vue.extend({
  name: 'AuthForm',
  components: {
    InputField,
  },
  props: {
    page: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.inputField {
  margin-bottom: 2rem;
}
</style>
