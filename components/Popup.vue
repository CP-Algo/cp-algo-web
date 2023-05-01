<template>
  <Vodal
    :show="show"
    :animation="animation"
    class-name="popup-container"
    :close-on-esc="true"
    :close-button="false"
    measure="rem"
    :custom-styles="dialogStyles"
    @hide="$emit('hide')"
  >
    <slot></slot>
  </Vodal>
</template>

<script>
import Vodal from 'vodal';
export default {
  components: {
    Vodal,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    animation: {
      type: String,
      required: true,
    },
    customStyles: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  computed: {
    dialogStyles() {
      return {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
        height: 'auto',
        width: 'auto',
        padding: 0,
        'border-radius': '1.2rem',
        'box-shadow': '0 0 4rem rgba(0, 0, 0, .2)',
        ...this.customStyles,
      }
    },
  },
  watch: {
    show(val) {
      if (val) document.body.classList.add('modal-open')
      else document.body.classList.remove('modal-open')
    },
  },
}
</script>

<style lang="scss">
@use 'node_modules/vodal/common.css';
@use 'node_modules/vodal/slide-right.css';

body.modal-open {
  overflow: hidden;
}

.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .vodal-mask {
    position: fixed;
  }

  .vodal-dialog {
    background-color: $background-dark-secondary;
  }
}
</style>
