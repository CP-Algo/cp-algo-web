<template>
  <div class="container">
    <div class="rank">
      <span class="hash">#</span>
      <span class="value">{{ rank }}</span>
    </div>
    <a class="authors" href="/profile">
      <img src="~/assets/avatar/user-default.png" alt="user avatar" />
      <span class="more"> +{{ moreAuthor }}</span>
    </a>
    <div class="complexity">
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
      />
      <span class="text">O({{ timeComlexity }})</span>
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/memoryIcon.svg?raw`)"
      />
      <span class="text">O({{ memoryComlexity }})</span>
    </div>
    <div class="resources">
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
      />
      <span class="text">{{ language }}</span>
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/codeSize.svg?raw`)"
      />
      <span class="text">{{ codeSize }} char</span>
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
      />
      <span class="text">{{ executionTime }}ms</span>
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/memoryIcon.svg?raw`)"
      />
      <span class="text">{{ requiredMemory }}M</span>
    </div>
    <div class="upvote">
      <div class="icon" v-html="require(`~/assets/svg/icon/upvote.svg?raw`)" />
      <span class="text">{{ upvote }}</span>
    </div>
    <div class="bookmark">
      <div
        class="icon"
        v-html="require(`~/assets/svg/icon/bookmark.svg?raw`)"
      />
      <span class="text">{{ bookmark }}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SubmissionDetails',
  props: {
    rank: {
      type: Number,
      required: true,
    },
    moreAuthor: {
      type: Number,
      required: true,
    },
    timeComlexity: {
      type: String,
      required: true,
    },
    memoryComlexity: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    codeSize: {
      type: Number,
      required: true,
    },
    executionTime: {
      type: Number,
      required: true,
    },
    requiredMemory: {
      type: Number,
      required: true,
    },
    upvote: {
      type: Number,
      required: true,
    },
    bookmark: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.6rem;
  margin-bottom: 1.2rem;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;
  .rank {
    display: flex;
    align-items: center;
    margin-right: 6.3rem;

    .hash {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-right: 0.6rem;
    }

    .value {
      @include font-h3-semi();

      color: $text-light-primary;
      margin-right: 0.5rem;
    }
  }

  .authors {
    display: flex;
    align-items: center;
    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      margin-right: 1.2rem;
    }
    .more {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-right: 0.6rem;
    }
  }
  .icon {
    width: 1.8rem;
    height: 1.8rem;
    // margin-right: 1.8rem;
    color: $text-light-secondary;
  }

  .text {
    @include font-body-regular();

    color: $text-light-primary;
    margin-right: 1.8rem;
  }

  .complexity {
    display: flex;
    align-items: center;
    padding: 2rem;
    border-radius: 2.8rem;
    background-color: $background-dark-primary;
  }

  .resources {
    display: flex;
    align-items: center;
    padding: 2rem;
    border-radius: 2.8rem;
    background-color: $background-dark-primary;
  }

  .upvote {
    display: flex;
    align-items: center;
  }

  .bookmark {
    display: flex;
    align-items: center;
  }
}
</style>
