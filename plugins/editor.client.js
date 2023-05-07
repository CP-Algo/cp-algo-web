import Vue from 'vue'
import languages from '../config/judge0_mappings/language'

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
    const languageMappings = {}
    languages.forEach(({id, ace_id}) => languageMappings[id] = ace_id)
    return { languageMappings }
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools')
      require('brace/ext/searchbox')
      require('brace/ext/static_highlight')
      require('brace/ext/error_marker')

      const langs = [...new Set(Object.values(this.languageMappings))]
      langs.forEach((lang) => { if (lang) require(`brace/mode/${lang}`) })
      require('brace/theme/dracula')
      langs.forEach((lang) => { if (lang) require(`brace/snippets/${lang}`) })
      if (this.keybinding) require(`brace/keybinding/${this.keybinding}`)
    },
  },
  render(createElement) {
    const self = this
    return createElement('ace-editor', {
      attrs: {
        value: self.value,
      },
      on: {
        input(value) {
          console.log(value)
          self.$emit('input', value)
        },
        init() {
          self.editorInit()
        },
      },
      props: {
        lang: this.languageMappings[this.lang] || 'plain_text',
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
