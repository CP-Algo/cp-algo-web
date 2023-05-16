<template>
  <div
    :class="{
      container: true,
      oddCase: testCaseNo % 2 === 1,
      evenCase: testCaseNo % 2 === 0,
    }"
  >
    <div class="left">
      <span class="testCaseLabel"> Test&nbsp;{{ testCaseNo }} </span>
      <span :class="verdict <= 2 ? 'pendingLabel' : verdict === 3 ? 'acLabel' : 'waLabel'">{{ verdictDescription }}</span>
      <div class="time">
        <div
          class="timeIcon"
          v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
        />
        <span class="timeLabel">{{ executionTime !== null ? `${executionTime} s` : '-' }}</span>
      </div>
      <div class="memory">
        <div
          class="memIcon"
          v-html="require(`~/assets/svg/icon/memoryIcon.svg?raw`)"
        />
        <span class="memLabel">{{ consumedMemory !== null ? `${consumedMemory / 1000} M` : '-' }}</span>
      </div>
    </div>
    <div class="right">
      <span class="downloadLabel">Download</span>
      <div
        class="exportIcon"
        v-html="require(`~/assets/svg/icon/exportIcon.svg?raw`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testCaseNo: {
      type: Number,
      required: true,
    },
    verdict: {
      type: Number,
      required: true,
    },
    verdictDescription: {
      type: String,
      required: true,
    },
    executionTime: {
      type: Number,
    },
    consumedMemory: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 5.8rem;
  // background-color: $background-dark-secondary;

  &.oddCase {
    background-color: $background-dark-secondary;
  }

  &.evenCase {
    background-color: $background-dark-primary;
  }

  .left {
    display: flex;
    align-items: center;
    margin-left: 2.4rem;

    .testCaseLabel {
      @include font-body-semi();
      color: $text-light-primary;
      margin-right: 2rem;
    }
    .acLabel,
    .pendingLabel,
    .waLabel {
      @include font-body-regular();

      color: $text-light-primary;
      width: 14rem;
      text-align: center;
      margin-right: 2rem;
    }
    .acLabel {
      color: $extras-dark-green;
    }
    .pendingLabel {
      color: $extras-dark-yellow;
    }
    .waLabel {
      color: $extras-dark-red;
    }

    .time,
    .memory {
      display: flex;
      align-items: center;
      justify-content: space-between;
      // max-width: 8.1rem;
      max-width: 15rem;
      margin-right: 2rem;

      .timeIcon,
      .memIcon {
        width: 1.6rem;
        color: $text-light-secondary;
        margin-right: 0.8rem;
      }

      .timeLabel,
      .memLabel {
        @include font-body-regular();

        color: $text-light-primary;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    align-content: space-between;
    margin-right: 2.1rem;
    margin-left: auto;

    .downloadLabel {
      @include font-body-semi();

      color: $text-light-primary;
      margin-right: 1.2rem;
    }

    .exportIcon {
      width: 1.6;
      color: $text-light-secondary;
    }
  }
}
</style>
