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
          @click="selected({type: null}, {})"
        >
          Any
        </span>
        <span
          class="algorithm-option"
          v-for="option in options"
          :key="option.type+option.id"
          @click="option.children.length ? visibleOptionId=option.type+option.id : selected(option, {})"
        >
          {{ option.name }}
        </span>
      </div>
    </Popup>
    <AlgorithmPopup
      v-for="option in options"
      v-if="totalChildren > 0"
      :key="option.type+option.id"
      :show="show && visibleOptionId === option.type+option.id"
      @hide="visibleOptionId = ''"
      :options="option.children"
      @selected="(obj) => selected(option, obj)"
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
    selected(option, obj) {
      this.$emit('selected', {
        ...obj,
        ...(option.type ? {[option.type]: option} : {})
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
