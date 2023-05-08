<template>
  <div class="page-container">
    <div class="split left">
      <div class="header">
        <div class="category">
          <span>Select Algorithm</span>
          <div
            class="dropDown"
            @click="showAlgorithmPopup = !showAlgorithmPopup"
          >{{algorithm.name}}</div>
          <AlgorithmPopup
            :show="showAlgorithmPopup"
            @hide="showAlgorithmPopup = false"
            :options="algorithmOptions"
            @selected="({category, subCategory, algorithm}) => algorithmSelected(category, subCategory, algorithm)"
            :addAnyOption="false"
          />
        </div>
        <div class="time">
          <span>Time Complexity</span>
          <input class="timeComplex" v-model="timeComplexity" />
        </div>
        <div class="mem">
          <span>Memory Complexity</span>
          <input class="memComplex" v-model="memoryComplexity" />
        </div>
      </div>
      <span class="submission-label">Submission</span>
      <div class="submission">
        <div class="editor"><Editor v-model="code" :lang="language.ace_id" /></div>
      </div>
      <div class="langSubmit">
        <LanguagePopup
          :show="showLanguagePopup"
          @hide="showLanguagePopup = false"
          :languages="languages"
          @language="languageSelected"
        />
        <div
          class="langDropDown"
          @click="showLanguagePopup = !showLanguagePopup"
        >
          {{language.name}}
        </div>
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

      <div class="stderr">
        <label for="stderr"> Stderr </label>
        <textarea id="stderr" v-model="stderr" rows="3" readonly></textarea>
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
      topics: {
        categories: [],
        subCategories: [],
        algorithms: []
      },
      algorithm: { id: '', name: '' },
      timeComplexity: 'O(N)',
      memoryComplexity: 'O(N)',
      code: `#include<bits/stdc++.h>
using namespace std;

int main() {
    int a;
    cin >> a;
    cout << a * a << endl;
    cerr << "Value of a: " << a << endl;
    
    return 0;
}`,
      languages: [],
      language: { id: '', name: '', ace_id: '' },
      input: '',
      output: '',
      stderr: '',
      showLanguagePopup: false,
      showAlgorithmPopup: false,
    }
  },
  async fetch() {
    this.languages = await this.$axios.$get(`/language`)
    this.language = this.languages.find(item => item.id === 54)

    this.topics = await this.$axios.$get(`/topics`)
    this.algorithm = this.topics.algorithms[0]
  },
  computed: {
    algorithmOptions() {
      const subCategories = this.topics.subCategories.map(subCategory => ({
        ...subCategory,
        children: []
      }))
      this.topics.algorithms.forEach(algorithm => {
        const algorithmItem = {
          id: algorithm.id,
          name: algorithm.name,
          type: 'algorithm',
          children: []
        }
        subCategories.find(item => item.id === algorithm.SubCategoryId).children.push(algorithmItem)
      })
      const options = this.topics.categories.map(category => ({
        id: category.id,
        name: category.name,
        type: 'category',
        children: []
      }))
      subCategories.forEach(subCategory => {
        const subCategoryItem = {
          id: subCategory.id,
          name: subCategory.name,
          type: 'subCategory',
          children: subCategory.children
        }
        options.find(category => category.id === subCategory.CategoryId).children.push(subCategoryItem)
      })
      return options
    },
  },
  methods: {
    async runCode() {
      try {
        const { status, stdout, stderr, time, memory } = await this.$axios.$post(
          '/submission/run',
          {
            code: this.code,
            input: this.input,
            language: this.language.id
          }
        )

        this.$toast.success(`Time ${time}ms, Memory ${memory}KB`)
        this.output = stdout
        this.stderr = stderr
      } catch (err) {
        this.$toast.error(err.message)
      }
    },
    async submitCode() {
      try {
        const { message, id } = await this.$axios.$post('/submission/new', {
          algorithm: this.algorithm,
          code: this.code,
          language: this.language,
          timeComplexity: this.timeComplexity,
          memoryComplexity: this.memoryComplexity,
        })
        this.$toast.success(message)
        setTimeout(() => (window.location.href = `/submission/${id}`), 3000)
      } catch (err) {
        this.$toast.error(err.message)
      }
    },
    languageSelected(id, name) {
      this.language = this.languages.find(lang => lang.id === id);
      this.showLanguagePopup = false;
    },
    algorithmSelected(category, subCategory, algorithm) {
      this.algorithm = algorithm;
      this.showAlgorithmPopup = false;
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  align-items: stretch;
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
  margin-right: 2rem;

  .header {
    display: flex;
    align-items: center;

    span {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-left: 1.6rem;
    }

    .category {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 1rem;
    }

    .time,
    .mem {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin: 0 1rem;

      span {
        align-self: flex-start;
      }
    }

    .dropDown,
    .timeComplex,
    .memComplex {
      @include font-body-semi();
      @include single-line();

      width: 100%;
      color: $text-light-primary;
      padding: 1rem 2rem;
      margin-top: 1.6rem;
      border: 0.3rem solid $background-dark-secondary;
      border-radius: 1.2rem;
      margin-right: 2.4rem;
    }

    .timeComplex,
    .memComplex {
      background-color: transparent;
    }
  }
}

.submission-label {
  @include font-label-semi();

  color: $text-light-primary;
  margin: 2.4rem 0 1.2rem 2.4rem;
  align-self: flex-start;
}

.submission {
  flex: 1;
  margin-bottom: 2.4rem;

  .editor {
    color: $text-light-primary;
    background-color: $background-dark-secondary;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
}

.langSubmit {
  position: relative;
  display: flex;
  align-self: flex-end;
  margin-bottom: 2.4rem;

  &:focus {
    outline: none;
  }
  .langDropDown {
    @include font-body-semi();
    @include single-line();

    color: $text-light-primary;
    padding: 1rem 2rem;
    border: 0.3rem solid $background-dark-secondary;
    border-radius: 1.2rem;
    margin-right: 2.4rem;
    width: 27.5rem;
    cursor: pointer;
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
.output,
.stderr {
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
