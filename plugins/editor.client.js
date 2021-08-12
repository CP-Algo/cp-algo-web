import Vue from 'vue'

Vue.component('Editor', {
  components: { 'ace-editor': require('vue2-ace-editor') },
  props: {
    value: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: false,
      default: 'c_cpp',
    },
    keybinding: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      langs: [
        'plain_text',
        'c_cpp',
        'csharp',
        'd',
        'dart',
        'golang',
        'haskell',
        'java',
        'javascript',
        'kotlin',
        'ocaml',
        'perl',
        'php',
        'python',
        'ruby',
        'rust',
        'scala',
      ],
    }
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools')
      require('brace/ext/searchbox')
      require('brace/ext/static_highlight')
      require('brace/ext/error_marker')

      this.langs.forEach((lang) => require(`brace/mode/${lang}`))

      require('brace/theme/dracula')

      this.langs.forEach((lang) => require(`brace/snippets/${lang}`))

      if (this.keybinding) require(`brace/keybinding/${this.keybinding}`)
    },
  },
  render(createElement) {
    const self = this
    return createElement('ace-editor', {
      domProps: {
        value: self.value,
      },
      on: {
        input(value) {
          self.$emit('input', value)
        },
        init: self.editorInit,
      },
      props: {
        lang: this.langs.find((lang) => lang === this.lang) || 'plain_text',
        theme: 'dracula',
        options: {
          highlightSelectedWord: true,
          copyWithEmptySelection: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          fontSize: '1.6rem',
        },
      },
    })
  },
})
