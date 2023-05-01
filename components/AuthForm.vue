<template>
  <div class="container">
    <div class="box">
      <!-- heading -->
      <span class="heading">{{
        mode === 'SIGNUP'
          ? 'Signup'
          : mode === 'LOGIN'
          ? 'Login'
          : mode === 'FORGOT_PASS'
          ? 'Forgot Password'
          : 'Reset Password'
      }}</span>

      <!-- message -->
      <p v-if="mode === 'FORGOT_PASS'" class="message">
        A verification link will be sent to your email, follow that link to
        reset your account password
      </p>
      <p v-if="mode === 'RESET_PASS'" class="message">
        Reset password for the account associated with the email
      </p>

      <!-- signup -->
      <InputField v-if="mode === 'SIGNUP'" v-model="email" class="inputField"
        >Email</InputField>
      <InputField
        v-if="mode === 'SIGNUP'"
        v-model="username"
        class="inputField"
        >Username</InputField>
      <InputField v-if="mode === 'SIGNUP'" v-model="name" class="inputField"
        >Name</InputField>
      <InputField
        v-if="mode === 'SIGNUP'"
        v-model="password"
        type="password"
        class="inputField"
        >Password</InputField>
      <InputField
        v-if="mode === 'SIGNUP'"
        v-model="confPass"
        type="password"
        class="inputField"
        >Confirm Password</InputField>
      <!-- login -->
      <InputField
        v-if="mode === 'LOGIN'"
        v-model="usernameOrEmail"
        class="inputField"
        >Username/Email</InputField>
      <InputField
        v-if="mode === 'LOGIN'"
        v-model="password"
        class="inputField"
        type="password"
        >Password</InputField>

      <!-- forgot password -->
      <InputField
        v-if="mode === 'FORGOT_PASS'"
        v-model="usernameOrEmail"
        class="inputField"
        >Username/Email</InputField>

      <!-- reset password -->
      <InputField
        v-if="mode === 'RESET_PASS'"
        v-model="password"
        type="password"
        class="inputField"
        >Password</InputField>
      <InputField
        v-if="mode === 'RESET_PASS'"
        v-model="confPass"
        type="password"
        class="inputField"
        >Confirm Password</InputField>

      <!-- footer  -->
      <div
        v-if="mode === 'LOGIN'"
        class="footer"
        @click="$emit('modeUpdated', 'FORGOT_PASS')"
      >
        <!-- <span class="remember">Remember me</span> -->
        <span class="forgot">Forgot password?</span>
      </div>

      <!-- confiramation button  -->
      <button class="confirmation" @click.prevent="handleSubmit">
        {{
          mode === 'SIGNUP'
            ? 'Create Account'
            : mode === 'LOGIN'
            ? 'Enter'
            : mode === 'FORGOT_PASS'
            ? 'Send Email'
            : 'Enter'
        }}
      </button>
    </div>
    <span
      v-if="mode === 'SIGNUP'"
      class="option"
      @click="$emit('modeUpdated', 'LOGIN')"
      >Already have an account?
    </span>
    <span
      v-if="mode === 'LOGIN'"
      class="option"
      @click="$emit('modeUpdated', 'SIGNUP')"
      >Don't have an account yet?
    </span>
    <span
      v-if="mode === 'FORGOT_PASS'"
      class="option"
      @click="$emit('modeUpdated', 'SIGNUP')"
      >Don't have an account yet?
    </span>
    <span v-if="mode === 'RESET_PASS'" class="option"></span>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
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
      name: '',
      email: '',
      username: '',
      password: '',
      usernameOrEmail: '',
      confPass: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.mode === 'SIGNUP') {
          const { message } = await this.$axios.$post('/auth/signup', {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            confirmPassword: this.confPass,
          })
          this.$toast.success(message)
        } else if (this.mode === 'LOGIN') {
          await this.$auth.loginWith('local', {
            data: {
              emailOrUsername: this.usernameOrEmail,
              password: this.password,
            },
          })
        } else if (this.mode === 'FORGOT_PASS') {
          const { message } = await this.$axios.$post('/auth/forgot', {
            emailOrUsername: this.usernameOrEmail,
          })
          this.$toast.success(message)
        } else if (this.mode === 'RESET_PASS') {
          const { message } = await this.$axios.$post('/auth/reset', {
            user: this.userId,
            token: this.token,
            password: this.password,
            confirmPassword: this.confPass,
          })
          this.$toast.success(message)
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(err.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .box {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: $background-dark-secondary;
    min-width: 60rem;
    border-radius: 2.75rem;

    .heading {
      @include font-h2-bold();

      color: $text-light-primary;
      margin-top: 2.9rem;
      margin-bottom: 0.7rem;
      text-align: center;

      &::first-letter {
        color: $app-light-secondary;
      }
    }

    .message {
      @include font-label-regular();

      color: $text-light-primary;
      margin-left: 3.6rem;
      margin-right: 3.6rem;
    }

    .inputField {
      margin: 5.2rem 3.6rem 0 3.6rem;
    }

    .footer {
      @include font-h3-regular();

      display: flex;
      align-items: center;
      margin-top: 3.3rem;

      .remember {
        margin-left: 3.6rem;
        margin-right: auto;
        color: $text-light-primary;
        cursor: pointer;
      }

      .forgot {
        margin-left: auto;
        margin-right: 3.6rem;
        color: $app-light-secondary;
        cursor: pointer;
      }
    }

    .confirmation {
      @include font-label-bold();

      color: $text-light-primary;
      background-color: $app-dark-primary;
      align-self: flex-end;
      padding: 2rem 7rem;
      margin-top: 3.7rem;
      margin-right: 3.6rem;
      margin-bottom: 3.7rem;
      border-radius: 1.5rem;
    }
  }
  .option {
    @include font-h3-semi();

    color: $app-light-secondary;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
}
</style>
