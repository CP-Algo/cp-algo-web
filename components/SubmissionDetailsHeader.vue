<template>
  <div class="container">
    <span v-if="rank" class="rank section">Rank</span>
    <span class="authors section">Authors</span>
    <span class="complexity section">Complexity</span>
    <span class="resources section">Resourses</span>
    <span
      :style="{ visibility: action ? 'visible' : 'hidden' }"
      class="action section last"
      >Action</span
    >
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      type: Boolean,
      default: true,
    },
    action: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$separator-space: 2rem;
.container {
  @include font-h4-regular();

  color: $text-dark-secondary;
  display: flex;
  align-items: center;
  padding: 0 3.6rem;

  .section {
    margin-right: $separator-space;
    text-align: center;

    .last {
      margin-right: 0;
    }
  }

  .rank {
    flex: 32;
  }
  .authors {
    flex: 155;
  }
  .complexity {
    flex: 248;
  }
  .resources {
    flex: 483;
  }
  .action {
    flex: 178;
  }
}
</style>
