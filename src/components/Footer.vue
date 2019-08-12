<template>
  <footer class="footer">
    <div class="to-top" @click="scrollTopTop">-></div>
    <div class="social">
      <a href="#0" class="channel">TW</a>
      <a href="#0" class="channel">IG</a>
      <a href="#0" class="channel">GH</a>
    </div>
  </footer>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
}
.to-top {
  transform: rotate(-90deg);
  user-select: none;
}
.social {
  .channel {
    margin-right: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    letter-spacing: 0.05em;
    &:last-of-type {
      margin: 0;
    }
  }
}
</style>