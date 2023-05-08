<template>
  <Popup
    :show="show"
    animation="slideUp"
    :custom-styles="{
      width: '31.2rem',
      bottom: '100%',
      left: 0,
      marginBottom: '1.2rem',
      overflow: 'hidden',
    }"
    @hide="$emit('hide')"
  >
    <div class="language-options-container">
      <span
        class="language-option"
        v-for="({id, name}) in languages"
        :key="id"
        @click="clicked(id, name)">
        {{ name }}
      </span>
    </div>
  </Popup>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    languages: {
      type: Array,
      required: true,
    }
  },
  methods: {
    clicked(id, name) {
      this.$emit('language', id, name)
    },
  },
}
</script>

<style lang="scss" scoped>
.language-options-container {
  max-height: 50rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.language-option {
  @include font-body-bold();
  color: $text-light-primary;
  padding: 1.6rem 2.4rem;
  cursor: pointer;

  &:hover {
    background-color: $background-dark-tertiary;
  }
}
</style>
