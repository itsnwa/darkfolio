<template>
  <header class="header">
    <h1 class="name">
      <span class="group">
        <span>n</span>
        <span class="hidden">ichlas</span>
      </span>
      <span class="group">
        <span>w</span>
        <span class="hidden">ærnes</span>
      </span>
      <span class="group">
        <span>a</span>
        <span class="hidden">ndersen</span>
      </span>
    </h1>
    <div class="contact">
      <a class="link" href="mailto:nichlas@itsnwa.com">say hi</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
  padding: 0 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;

  &:hover {
    .name > .group > .hidden {
      opacity: 0.2;
    }
  }

  .link {
    color: inherit;
    text-decoration: none;
  }
}
.name {
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  .group {
    margin-right: 0.5em;
    &:first-of-type {
      display: block;
      margin-bottom: 0.5em;
    }
    &:last-of-type {
      margin: 0;
    }
  }
  .hidden {
    opacity: 0;
    transition: opacity 0.35s ease;
  }
}
</style>