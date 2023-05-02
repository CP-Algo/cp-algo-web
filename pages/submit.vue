<template>
  <div class="page-container">
    <div class="split left">
      <div class="header">
        <div class="category">
          <span>Search Category</span>
          <div class="dropDown">Advanced Search Technique/BS</div>
        </div>
        <div class="time">
          <span>Time Complexity</span>
          <input class="timeComplex" />
        </div>
        <div class="mem">
          <span>Memory Complexity</span>
          <input class="memComplex" />
        </div>
      </div>
      <div class="submission">
        <label>Submission</label>
        <client-only ><div class="editor"><Editor /></div ></client-only>
      </div>
      <div class="langSubmit">
        <div class="langDropDown">C++</div>
        <button class="submit" @click="submitCode">Submit</button>
      </div>
    </div>

    <div class="split right">
      <div class="input">
        <label for="input"> Input </label>
        <textarea id="input" v-model="input" rows="3"></textarea>
      </div>

      <div class="output">
        <label for="output"> Output </label>
        <textarea id="output" v-model="output" rows="3" readonly></textarea>
      </div>

      <button class="run" @click="runCode">Run</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      algorithm: 'BINARY_SEARCH',
      timeComplexity: '',
      memoryComplexity: '',
      code: '',
      language: 'CPP_11',
      input: '',
      output: '',
    }
  },
  auth: true,
  methods: {
    async runCode() {
      try {
        const { status, message, output } = await this.$axios.$post(
          '/submission/run',
          {
            input: this.input,
            code: this.code,
          }
        )

        if (status === 'ACCEPTED') this.$toast.success(message)
        else this.$toast.error(message)

        this.output = output
      } catch (err) {
        this.$toast.error(err.message)
      }
    },
    async submitCode() {
      try {
        const { message, id } = await this.$axios.$post('/submission/new', {
          algorithm: this.algorithm,
          language: this.language,
          timeComplexity: this.timeComplexity,
          memoryComplexity: this.memoryComplexity,
          code: this.code,
        })
        this.$toast.success(message)
        setTimeout(() => (window.location.href = `/submission/${id}`), 3000)
      } catch (err) {
        this.$toast.error(err.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  align-items: flex-start;
  display: flex;
}
.split {
  margin-top: 3.6rem;
}

.left {
  padding-left: 6rem;
  width: 86.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .header {
    display: flex;
    align-items: center;

    span {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-left: 1.6rem;
    }

    .category {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .time,
    .mem {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex: 1;

      span {
        align-self: flex-start;
      }
    }

    .dropDown,
    .timeComplex,
    .memComplex {
      @include font-body-semi();
      // @include single-line();

      color: $text-light-primary;
      padding: 1rem 2rem;
      margin-top: 1.6rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: 2.4rem;
    }

    .dropDown {
      width: 46.9rem;
    }

    .timeComplex,
    .memComplex {
      background-color: transparent;
      width: 18rem;
    }
  }
}

.submission {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  label {
    @include font-label-semi();

    color: $text-light-primary;
    margin: 0 0 1.2rem 2.4rem;
    align-self: flex-start;
  }

  .editor {
    color: $text-light-primary;
    background-color: $background-dark-secondary;
    border-radius: 1.2rem;
    height: 20rem;
    width: 100%;
  }
}

.langSubmit {
  display: flex;
  align-self: flex-end;

  .langDropDown {
    @include font-body-semi();
    @include single-line();

    color: $text-light-primary;
    padding: 1rem 2rem;
    border: 0.3rem solid $background-dark-secondary;
    border-radius: 1.2rem;
    margin-right: 2.4rem;
    width: 27.5rem;
  }
  .submit {
    @include font-body-semi();

    color: $text-light-primary;
    align-self: flex-end;
    background-color: $extras-dark-green;
    border-radius: 1.2rem;
    padding: 1rem 2.4rem;
    border: 0.3rem solid $extras-dark-green;
  }
}

.right {
  margin-left: auto;
  padding-right: 6rem;
  width: 41.9rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.input,
.output {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.8rem;
  label {
    @include font-h4-semi();

    color: $text-dark-secondary;
    margin: 0 0 0.8rem 1.2rem;
  }
  textarea {
    @include font-body-regular();

    color: $text-light-primary;
    background-color: transparent;
    border-radius: 1.2rem;
    border: 0.3rem solid $background-dark-secondary;
    overflow: hidden;
  }
}

.run {
  @include font-body-semi();

  color: $text-light-primary;
  align-self: flex-end;
  border: 0.3rem solid $extras-dark-green;
  border-radius: 1.2rem;
  padding: 1rem 3.6rem;
  margin-top: 0.6rem;
}
</style>
