<template>
  <div class="material-input__component" :class="computedClasses">
    <input
      :id="id"
      v-model="valueCopy"
      :type="type === 'password' && visible ? 'text' : type"
      :class="{
        'material-input': true,
        password: type === 'password',
      }"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :max="type === 'password' ? max : null"
      :min="type === 'password' ? min : null"
      :step="type === 'password' ? step : null"
      :minlength="type === 'text' ? minlength : null"
      :maxlength="type === 'text' ? maxlength : null"
      :required="required"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
      @input="handleModelInput"
    />

    <img
      v-if="type === 'password'"
      class="eyeIcon"
      :src="require(`~/assets/svg/icon/eyeIcon${visible ? '' : 'In'}Visible.svg`)"
      @click="visible = !visible"
    />

    <label class="material-label">
      <slot></slot>
    </label>

    <div v-if="errorMessages" class="material-errors">
      <div v-for="error in computedErrors" :key="error" class="material-error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    step: {
      type: Number,
      default: null,
    },
    minlength: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    required: {
      type: Boolean,
      default: true,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    errorMessages: {
      type: [Array, String],
      default: null,
    },
  },
  data() {
    return {
      valueCopy: null,
      focus: false,
      valid: true,
      visible: false,
    }
  },
  computed: {
    computedErrors() {
      return typeof this.errorMessages === 'string'
        ? [this.errorMessages]
        : this.errorMessages
    },
    computedClasses() {
      return {
        'material--active': this.focus,
        'material--disabled': this.disabled,
        'material--has-errors': Boolean(
          !this.valid || (this.errorMessages && this.errorMessages.length)
        ),
        'material--raised': Boolean(
          this.focus ||
            this.valueCopy || // has value
            (this.placeholder && !this.valueCopy)
        ), // has placeholder
      }
    },
  },
  watch: {
    value(newValue) {
      // This watch works from the code side of the 2-way-binding:
      this.copyValue(newValue)
    },
  },
  beforeMount() {
    // Here we are following the Vue2 convention on custom v-model:
    // https://github.com/vuejs/vue/issues/2873#issuecomment-223759341
    this.copyValue(this.value)
  },
  methods: {
    handleModelInput(event) {
      this.$emit('input', event.target.value, event)
      this.handleValidation()
    },
    handleFocus(focused) {
      this.focus = focused
    },
    handleValidation() {
      this.valid = this.$el
        ? this.$el.querySelector('.material-input').validity.valid
        : this.valid
    },
    copyValue(value) {
      this.valueCopy = value
      this.handleValidation()
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
// Utils
$height: 7.4rem;
$spacer: 2.2rem;
$transition: 0.2s ease all;
// Mixins:
@mixin slided-top() {
  @include font-body-semi();

  bottom: $height + 0.4rem;
}
// Component:
.material-input__component {
  position: relative;
  background: transparent;

  .material-input {
    @include font-h3-regular();

    background: $background-dark-tertiary;
    color: $text-light-primary;
    border: 0.1rem solid $background-dark-tertiary;
    padding: $spacer;
    display: block;
    height: $height;
    width: 100%;
    border-radius: math.div($height, 2);
    transition: $transition;

    &.password {
      padding-right: $spacer + 5rem;
    }
  }

  .eyeIcon {
    position: absolute;
    right: 2.4rem;
    top: calc($height / 2 - $spacer / 2);
    bottom: auto;
  }

  .material-label {
    @include font-h3-regular();

    color: $text-light-primary;
    position: absolute;
    pointer-events: none;
    left: $spacer;
    bottom: $spacer;
    transition: $transition;
  }
  // Active state:
  &.material--active {
    .material-input {
      outline: none;
      border-color: $app-dark-secondary;
    }
  }
  // Disabled state:
  &.material--disabled {
    .material-input {
      border-style: dashed;
    }
  }
  // Raised state:
  &.material--raised {
    .material-label {
      @include slided-top();
    }
  }
  // Errors:
  .material-errors {
    position: relative;
    overflow: hidden;
    .material-error {
      @include font-meta-regular();

      overflow: hidden;
      margin-top: 0;
      padding-top: math.div($spacer, 2);
      padding-right: math.div($spacer, 2);
      padding-left: 0;
    }
    &.material--has-errors {
      // These styles are required
      // for custom validation:
      &.material--active .material-input {
        border-color: $extras-dark-red;
      }
      .material-errors {
        color: $extras-dark-red;
      }
    }
  }
}
</style>
