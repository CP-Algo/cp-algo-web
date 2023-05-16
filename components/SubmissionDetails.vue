<template>
  <a :href="`/submission/${submissionId}`" :class="{ container: true, removeBackground: !background}" :style="{padding: rank ? '1.6rem 3.6rem' : '1.6rem 0' }">
    <div v-if="rank" class="rank">
      <span class="hash">#</span>
      <span class="value">{{ rank }}</span>
    </div>
    <div class="authors">
      <a
        v-for="author in authors.slice(0, 3)"
        :key="author.id"
        :href="`/profile/${author.username}`"
      >
        <img
          :src="require(`~/assets/avatar/${author.id}.png`)"
          alt="user avatar"
          height="35"
          width="35"
        />
      </a>
      <span v-if="moreAuthor" class="more"> +{{ moreAuthor }}</span>
    </div>
    <div class="detailSection complexity">
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
        />
        <span class="text">O({{ timeComplexity }})</span>
      </div>
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/memoryIcon.svg?raw`)"
        />
        <span class="text">O({{ memoryComplexity }})</span>
      </div>
    </div>
    <div class="detailSection resources">
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeIcon.svg?raw`)"
        />
        <span class="text">{{ language }}</span>
      </div>
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/codeSize.svg?raw`)"
        />
        <span class="text">{{ codeSize }} char</span>
      </div>
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/takenTime.svg?raw`)"
        />
        <span class="text">{{
          executionTime ? `${executionTime}ms` : '-'
        }}</span>
      </div>
      <div class="detailItem">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/memoryIcon.svg?raw`)"
        />
        <span class="text">{{
          requiredMemory ? `${requiredMemory}M` : '-'
        }}</span>
      </div>
    </div>
    <div class="actions">
      <div class="upvote" @click="upvoteSubmission">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/upvote.svg?raw`)"
        />
        <span class="text">{{ upvote }}</span>
      </div>
      <!-- <div class="bookmark" @click="forkSubmission">
        <div
          class="icon"
          v-html="require(`~/assets/svg/icon/bookmark.svg?raw`)"
        />
        <span class="text">{{ bookmark }}</span>
      </div> -->
    </div>
  </a>
</template>

<script>
export default {
  props: {
    submissionId: {
      type: Number,
      required: true,
    },
    rank: {
      type: Number,
      default: 0,
    },
    authors: {
      type: Array,
      required: true,
    },
    moreAuthor: {
      type: Number,
      default: 0,
    },
    timeComplexity: {
      type: String,
      required: true,
    },
    memoryComplexity: {
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
      default: 0,
    },
    requiredMemory: {
      type: Number,
      default: 0,
    },
    upvote: {
      type: Number,
      required: true,
    },
    bookmark: {
      type: Number,
      required: true,
    },
    background: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    async upvoteSubmission() {
      if (!this.$auth.loggedIn)
        this.$toast.error('You to be logged in to upvote the submission!')
      try {
        const { message } = await this.$axios.$post(
          `/submission/${this.submissionId}/upvote`
        )
        this.$toast.success(message)
        this.$emit('upvote')
      } catch (err) {
        this.$toast.error(err)
      }
    },
    // async forkSubmission() {
    //   if (!this.$auth.loggedIn)
    //     this.$toast.error('You to be logged in to fork the submission!')
    //   try {
    //     const { message } = await this.$axios.$post(
    //       `/submission/${this.submissionId}/fork`
    //     )
    //     this.$toast.success(message)
    //     this.$emit('fork')
    //   } catch (err) {
    //     this.$toast.error(err)
    //   }
    // },
  },
}
</script>

<style lang="scss" scoped>
$separator-space: 2rem;

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.6rem;
  background-color: $background-dark-secondary;

  .rank {
    flex: 32;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $separator-space;

    .hash {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-right: 0.6rem;
    }

    .value {
      @include font-h3-semi();

      color: $text-light-primary;
    }
  }

  .authors {
    // flex: 155;
    flex: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: $separator-space;

    img {
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    .more {
      @include font-body-semi();

      color: $text-dark-secondary;
      margin-left: 0.6rem;
    }
  }

  .detailSection {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 2.8rem;
    background-color: $background-dark-primary;
    margin-right: $separator-space;

    .detailItem {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.complexity {
      flex: 248;
    }

    &.resources {
      flex: 483;
    }
  }

  &.removeBackground {
    background-color: transparent;
    .detailSection {
      background-color: $background-dark-secondary;
    }
  }

  .icon {
    margin-right: 0.8rem;
    color: $text-light-secondary;

    svg {
      height: 1.8rem;
    }
  }

  .text {
    @include font-body-regular();

    color: $text-light-primary;
  }

  .actions {
    // flex: 178;
    flex: 50;
    display: flex;
    align-items: center;
    justify-content: center;

    .upvote {
      display: flex;
      align-items: center;
      margin-right: 1.6rem;
    }

    .bookmark {
      display: flex;
      align-items: center;
    }
  }
}
</style>
