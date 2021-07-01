<template>
  <div class="container">
    <div class="algorithm">
      <span class="algorithmName">{{ name }}</span>
      <div
        :class="{ icon: true, isExpanded }"
        @click="isExpanded = !isExpanded"
        v-html="require(`~/assets/svg/icon/expandIcon.svg?raw`)"
      />
    </div>
    <div v-if="isExpanded" class="submissions">
      <div class="heading">
        <span class="rank">Rank</span>
        <span class="authors">Authors</span>
        <span class="complexity">Complexity</span>
        <span class="resources">Resourses</span>
        <span class="action">Action</span>
      </div>
      <submission-details
        :rank="1"
        :more-author="12"
        time-comlexity="NM"
        memory-comlexity="NM"
        language="C++14"
        :code-size="258"
        :execution-time="438"
        :required-memory="438"
        :upvote="120"
        :bookmark="23"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlgorithmRow',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  // align-items: stretch;

  .algorithm {
    display: flex;
    align-items: center;
    border-radius: 1.6rem;
    height: 8rem;
    margin-bottom: 2rem;
    background-color: $background-dark-secondary;
    .algorithmName {
      @include font-h3-semi();

      color: $text-light-primary;
      margin-left: 3.6rem;
      margin-right: auto;
    }

    .icon {
      height: 4rem;
      margin-left: auto;
      margin-right: 3.1rem;
      color: $background-dark-primary;
      &.isExpanded {
        transform: rotate(180deg);
      }
    }
  }
  .heading {
    @include font-h4-regular();

    color: $text-dark-secondary;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 1.6rem;

    .rank {
      margin-left: 3.6rem;
    }
    .authors {
      margin-left: 8.4rem;
    }
    .complexity {
      margin-left: 21.75rem;
    }
    .resources {
      margin-left: 31.35rem;
    }
    .action {
      margin-left: 29.5rem;
    }
  }
}
</style>
