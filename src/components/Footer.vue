<template>
  <footer class="footer">
    <div class="to-top"></div>
    <div class="social">
      <a href="#0" class="channel">TW</a>
      <a href="#0" class="channel">IG</a>
      <a href="#0" class="channel">GH</a>
    </div>
  </footer>
</template>

<script>
export default {};
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
.social {
  .channel {
    margin-right: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    &:last-of-type {
      margin: 0;
    }
  }
}
</style>