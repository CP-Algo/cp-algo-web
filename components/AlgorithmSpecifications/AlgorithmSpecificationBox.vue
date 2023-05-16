<template>
  <div class="box">
    <span class="title">{{title}}</span>
    <p class="content" v-html="latexedContent" />
  </div>
</template>

<script>
import katex from 'katex';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    latexedContent() {
      const len = this.content.length
      let newContent = ''
      let latexedStr = ''
      for (let i = 0; i < len; i++) {
        let char = this.content[i]
        if (char == '\n') {
          newContent += '<br/>'
        }
        else if (char != '$') {
          if (latexedStr.length) latexedStr += char
          else newContent += char
        }
        else {
          latexedStr += char
          if (latexedStr.length > 1) {
            newContent += katex.renderToString(latexedStr.slice(1, -1))
            latexedStr = ''
          }
        }
      }
      return newContent
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  margin: 0.5rem;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background-color: $background-dark-primary;

  .title {
    @include font-h3-semi();
    color: $text-dark-secondary;
  }
  .content {
    @include font-h4-regular();
    color: $text-light-primary;
  }
}
</style>
