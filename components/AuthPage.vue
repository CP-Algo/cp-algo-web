<template>
  <div class="page-container">
    <div class="left">
      <span class="brand-name">CP Algo</span>
      <img class="brand-icon" src="~/assets/svg/site/logo.svg" />
      <div class="title">
        Collaboration platform<br />
        for code templates
      </div>
      <div class="sub-title">
        Join to share and get the most<br />
        elegant and efficient codes<br />
        for your upcoming contest
      </div>
      <span v-if="verificationMessage">{{verificationMessage}}</span>
    </div>
    <img class="blue-background" src="~/assets/svg/site/auth-background.svg" />
    <AuthForm
      :mode="mode"
      :style="{
        width: '60rem',
        margin: 'auto 13.4rem auto auto',
        'z-index': '10',
      }"
      :user-id="userId"
      :token="token"
      @modeUpdated="mode = $event"
    />
  </div>
</template>

<script>
export default {
  layout: 'auth',
  props: {
    page: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      default: '',
    },
    token: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      mode: this.page == 'VERIFY' ? 'LOGIN' : this.page,
      verificationMessage: ''
    }
  },
  async fetch() {
    if (this.page === 'LOGIN' && this.userId && this.token) {
      try {
        const { message } = await this.$axios.$post('/auth/verify', {
          user: this.userId,
          token: this.token,
        })
        // TODO: toast not showing bug
        this.$toast.success(message)
      } catch (err) {
        this.$toast.error(err.message)
      }
    }
    else if (this.page === 'VERIFY') {
      const { message } = await this.$axios.$get(`/auth/verify?user=${this.$route.query.user}&token=${this.$route.query.token}`)
      this.verificationMessage = message
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  align-items: stretch;

  .blue-background {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 63vw;
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 7rem;
    z-index: 10;

    .brand-name {
      @include font-brand-bold();

      color: $text-light-primary;
      position: absolute;
      top: 3.5rem;
      left: 7rem;
    }

    .brand-icon {
      width: 20rem;
      align-self: center;
    }

    .title {
      @include font-h1-bold();

      color: $text-light-primary;
      margin: 7rem 0;
    }

    .sub-title {
      @include font-h2-semi();

      color: $text-light-primary;
    }
    
    span {
      margin-top: 4rem;
      @include font-body-semi();
      max-width: 50%;

      color: $text-light-secondary;
    }
  }
}
</style>
