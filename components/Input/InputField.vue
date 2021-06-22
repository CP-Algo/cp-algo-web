<template>
  <div>
    <label>{{ label }}</label>
    <input
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
})
</script>
