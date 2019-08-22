<template>
  <footer class="footer">
    <div class="to-top" @click="scrollTopTop">-></div>
    <div class="social">
      <a
        class="channel"
        v-for="(social, index) in data.social"
        :key="index"
        :href="`https://${social.channel}.com/${social.handle}`"
      >
        {{ social.link_text }}
      </a>
    </div>
  </footer>
</template>

<script>
import data from "@/data/theme.json";

export default {
  data() {
    return {
      data
    };
  },
  methods: {
    scrollTopTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
  mix-blend-mode: difference;
}
.to-top {
  transform: rotate(-90deg);
  user-select: none;
  cursor: pointer;
  border: 2px solid transparent;
  text-align: center;
  font-weight: 700;
  line-height: 0;
  padding: 1rem 0.5rem;
  &:hover {
    border: 2px solid white;
  }
}
.social {
  .channel {
    margin-right: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    &:last-of-type {
      margin: 0;
    }
  }
}
</style>