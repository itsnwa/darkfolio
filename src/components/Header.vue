<template>
  <header class="header">
    <h1 class="name" :class="{ first: data.first_letter_only }">
      <span
        class="word"
        :class="{ 'first-line': index === 0 && multiLine }"
        v-for="(word, index) in siteName"
        :key="index"
      >
        <span class="first-letter" v-if="data.first_letter_only && word[0]">{{
          word[0]
        }}</span>
        <span class="letter" v-if="data.first_letter_only">{{
          word.slice(1)
        }}</span>
        <span v-if="!data.first_letter_only">{{ word }}</span>
      </span>
    </h1>
    <div class="contact">
      <a class="link" :href="`mailto:${data.email}`">say hi !</a>
    </div>
  </header>
</template>

<script>
import data from "@/data/theme.json";

export default {
  name: "Header",
  data() {
    return {
      data
    };
  },
  computed: {
    siteName() {
      return data.header_title.split(" ");
    },
    multiLine() {
      return this.siteName.length >= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;
  mix-blend-mode: difference;
}
.name {
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  margin: 0;
  .word {
    margin-right: 0.5rem;
    &.first-line {
      display: block;
      margin-bottom: 0.5rem;
    }
    &:last-of-type {
      margin: 0;
    }
  }
  &.first {
    .letter {
      opacity: 0;
    }
    .first-letter {
      opacity: 1;
    }
    &:hover {
      .letter {
        opacity: 1;
      }
    }
  }
}
</style>