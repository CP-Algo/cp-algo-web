<template>
  <div>
    <input-field v-model="username" label="Username" />
    <input-field v-model="password" label="Password" />
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
