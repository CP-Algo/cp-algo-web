<template>
  <div class="container">
    <span class="rank section">Rank</span>
    <span class="authors section">Authors</span>
    <span class="complexity section">Complexity</span>
    <span class="resources section">Resourses</span>
    <span class="action section">Action</span>
  </div>
</template>

<script>
export default {
  name: 'SubmissionDetailsHeader',
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
  .action.section {
    flex: 178;
    margin-right: 0;
  }
}
</style>
