<template>
  <div class="container">
    <input-field v-if="mode === 'GENERAL'" v-model="email" class="inputField">
      Email
    </input-field>
    <input-field v-if="mode === 'GENERAL'" v-model="name" class="inputField">
      Name
    </input-field>
    <input-field
      v-if="mode === 'GENERAL'"
      v-model="username"
      class="inputField"
    >
      Username
    </input-field>
    <input-field
      v-if="mode === 'GENERAL'"
      v-model="institution"
      class="inputField"
    >
      Institution
    </input-field>
    <input-field v-if="mode === 'GENERAL'" v-model="country" class="inputField"
      >Counrtry</input-field
    >

    <input-field v-if="mode === 'SECURITY'" v-model="curPass" class="inputField"
      >Current Password</input-field
    >
    <input-field v-if="mode === 'SECURITY'" v-model="newPass" class="inputField"
      >New Password</input-field
    >
    <input-field v-if="mode === 'SECURITY'" v-model="repPass" class="inputField"
      >Repeat Password</input-field
    >

    <input-field
      v-if="mode === 'HANDLES'"
      v-model="codeforces"
      class="inputField"
      >Codeforces</input-field
    >
    <input-field v-if="mode === 'HANDLES'" v-model="codechef" class="inputField"
      >Codechef</input-field
    >
    <input-field
      v-if="mode === 'HANDLES'"
      v-model="hackerrank"
      class="inputField"
      >Hackerrank</input-field
    >
    <input-field v-if="mode === 'HANDLES'" v-model="lightoj" class="inputField"
      >Light OJ</input-field
    >
    <button class="saveChanges">Save Changes</button>
  </div>
</template>

<script>
import Vue from 'vue'
import InputField from './Input/InputField.vue'
export default Vue.extend({
  name: 'SettingsForm',
  components: {
    InputField,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: '',
      name: '',
      username: '',
      institution: '',
      country: '',
      curPass: '',
      newPass: '',
      repPass: '',
      codeforces: '',
      codechef: '',
      hackerrank: '',
      lightoj: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 53.5rem;
  .inputField {
    margin-top: 5.6rem;
  }

  .saveChanges {
    @include font-label-bold();

    color: $text-light-primary;
    background-color: $app-dark-primary;
    align-self: flex-end;
    padding: 2rem 4.2rem;
    margin-top: 5.6rem;
    border-radius: 1.5rem;
  }
}
</style>
