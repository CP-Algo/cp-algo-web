<template>
  <div class="page-container">
    <div class="split left">
      <div class="selectCategory">
        <span>Select Category</span>
        <div class="dropDown">Advanced Search Technique/BS</div>
      </div>
      <div class="submission">
        <label>Submission</label>
        <div class="editor"></div>
      </div>
      <div class="langSubmit">
        <div class="langDropDown">C++</div>
        <button class="submit">Submit</button>
      </div>
    </div>

    <div class="split right">
      <div class="input">
        <label for="input"> Input </label>
        <textarea id="input" rows="3"></textarea>
      </div>

      <div class="output">
        <label for="output"> Output </label>
        <textarea id="output" rows="3"></textarea>
      </div>

      <button class="run">Run</button>
    </div>
  </div>
</template>

<script>
export default {}
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
}

.selectCategory {
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  span {
    @include font-body-semi();

    color: $text-dark-secondary;
    margin-right: 1.6rem;
  }

  .dropDown {
    @include font-body-semi();
    // @include single-line();

    color: $text-light-primary;
    padding: 1rem 2rem;
    border: 0.3rem solid $background-dark-secondary;
    border-radius: 1.2rem;
    margin-right: 2.4rem;
    width: 46.9rem;
  }
}

.submission {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
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
    flex: 1;
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
