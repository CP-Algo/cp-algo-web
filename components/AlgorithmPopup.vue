<template>
  <div
    :style="{
      position: 'absolute',
      top: options.length && options[0].type === 'category' ? 'calc(100% + 1.2rem)' : '0',
      left: options.length && options[0].type === 'category' ? '0' : '32.4rem',
    }"
  >
    <Popup
      :show="show"
      animation="slideRight"
      :custom-styles="{
        width: '31.2rem',
        top: '0',
        left: '0',
        overflow: 'hidden',
      }"
      @hide="$emit('hide')"
    >
      <div class="algorithm-options-container">
        <span
          v-if="options.length && options[0].type !== 'category' && addAnyOption"
          class="algorithm-option"
          @click="selected(null, null, null, {})"
        >
          Any
        </span>
        <span
          class="algorithm-option"
          v-for="({type, id, name, children}) in options"
          :key="type+id"
          @click="children.length ? visibleOptionId=type+id : selected(type, id, name, {})"
        >
          {{ name }}
        </span>
      </div>
    </Popup>
    <AlgorithmPopup
      v-for="({type, id, name, children}) in options"
      v-if="totalChildren > 0"
      :key="type+id"
      :show="show && visibleOptionId === type+id"
      @hide="visibleOptionId = ''"
      :options="children"
      @selected="(obj) => selected(type, id, name, obj)"
      :addAnyOption="addAnyOption"
    />
  </div>
</template>

<script>
export default {
  name: "AlgorithmPopup",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    addAnyOption: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      visibleOptionId: ''
    }
  },
  methods: {
    selected(type, id, name, obj) {
      this.$emit('selected', {
        ...obj,
        ...(type ? {[type]: { id, name }} : {})
      })
    },
  },
  computed: {
    totalChildren() {
      const total = this.options.reduce((total, option) => total + option.children.length, 0)
      return total
    }
  },
}
</script>

<style lang="scss" scoped>
.algorithm-options-container {
  max-height: 50rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.algorithm-option {
  @include font-body-bold();
  color: $text-light-primary;
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  &:hover {
    background-color: $background-dark-tertiary;
  }
}
</style>
