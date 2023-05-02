<template>
  <div class="container">
    <InputField v-if="mode === 'GENERAL'" v-model="email" class="inputField">
      Email
    </InputField>
    <InputField v-if="mode === 'GENERAL'" v-model="name" class="inputField">
      Name
    </InputField>
    <InputField
      v-if="mode === 'GENERAL'"
      v-model="username"
      class="inputField"
    >
      Username
    </InputField>
    <InputField
      v-if="mode === 'GENERAL'"
      v-model="institution"
      class="inputField"
    >
      Institution
    </InputField>
    <InputField v-if="mode === 'GENERAL'" v-model="country" class="inputField"
      >Country</InputField>

    <InputField v-if="mode === 'SECURITY'" v-model="curPass" class="inputField"
      >Current Password</InputField>
    <InputField v-if="mode === 'SECURITY'" v-model="newPass" class="inputField"
      >New Password</InputField>
    <InputField v-if="mode === 'SECURITY'" v-model="repPass" class="inputField"
      >Repeat Password</InputField>

    <InputField
      v-if="mode === 'HANDLES'"
      v-model="codeforces"
      class="inputField"
      >Codeforces</InputField>
    <InputField v-if="mode === 'HANDLES'" v-model="codechef" class="inputField"
      >Codechef</InputField>
    <InputField
      v-if="mode === 'HANDLES'"
      v-model="hackerrank"
      class="inputField"
      >Hackerrank</InputField>
    <InputField v-if="mode === 'HANDLES'" v-model="lightoj" class="inputField"
      >Light OJ</InputField>
    <button class="saveChanges" @click.prevent="handleSave">
      Save Changes
    </button>
  </div>
</template>

<script>
export default {
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
  async fetch() {
    const user = await this.$axios.$get(
      `/user/${this.$auth.user.username}/basic`
    )
    this.email = user.email
    this.name = user.name
    this.username = user.username
    this.institution = user.institution
    this.country = user.country

    const { handles } = await this.$axios.$get(
      `/user/${this.$auth.user.username}/handles`
    )
    this.codeforces =
      handles.find((handle) => handle.site === 'CODEFORCES')?.username || ''
    this.codechef =
      handles.find((handle) => handle.site === 'CODECHEF')?.username || ''
    this.hackerrank =
      handles.find((handle) => handle.site === 'HACKERRANK')?.username || ''
    this.lightoj =
      handles.find((handle) => handle.site === 'LIGHTOJ')?.username || ''
  },
  methods: {
    async handleSave() {
      try {
        if (this.mode === 'GENERAL') {
          const { message } = await this.$axios.$post(`/user/basic`, {
            email: this.email,
            name: this.name,
            username: this.username,
            institution: this.institution,
            country: this.country,
          })
          this.$toast.success(message)
        } else if (this.mode === 'SECURITY') {
          const { message } = await this.$axios.$post(`/user/security`, {
            currentPassword: this.curPass,
            newPassword: this.newPass,
            confirmPassword: this.repPass,
          })
          this.$toast.success(message)
        } else if (this.mode === 'HANDLES') {
          const handles = [
            { key: 'CODEFORCES', name: 'codeforces' },
            { key: 'CODECHEF', name: 'codechef' },
            { key: 'HACKERRANK', name: 'hackerrank' },
            { key: 'LIGHTOJ', name: 'lightoj' },
          ]

          const { message } = await this.$axios.$post(
            `/user/handles`,
            handles
              .map(({ key, name }) =>
                this[name] ? { site: key, username: this[name] } : null
              )
              .filter((item) => !!item)
          )
          this.$toast.success(message)
        }
      } catch (err) {
        this.$toast.error(err.message || err.error || err)
      }
    },
  },
}
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
