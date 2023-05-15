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
      required: true,
    },
    keybinding: {
      type: String,
      required: false,
      default: '',
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      languages_imported: []
    }
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools')
      require('brace/ext/searchbox')
      require('brace/ext/static_highlight')
      require('brace/ext/error_marker')
      require('brace/theme/dracula')
      if (this.keybinding) require(`brace/keybinding/${this.keybinding}`)
    },
  },
  render(createElement) {
    const self = this
    if (this.lang && !this.languages_imported.find(lang => lang === this.lang)) {
      require(`brace/mode/${this.lang}`)
      require(`brace/snippets/${this.lang}`)
    }
    return createElement('ace-editor', {
      attrs: {
        value: self.value,
      },
      ...(this.readOnly ? {class: "hidden-editor"} : {}),
      on: {
        input(value) {
          self.$emit('input', value)
        },
        init() {
          self.editorInit()
        },
      },
      props: {
        lang: this.lang || 'plain_text',
        theme: 'dracula',
        options: {
          highlightSelectedWord: true,
          copyWithEmptySelection: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          fontSize: '1.6rem',
          readOnly: this.readOnly,
          highlightActiveLine: !this.readOnly,
          highlightGutterLine: !this.readOnly,
        },
      },
    })
  },
})
