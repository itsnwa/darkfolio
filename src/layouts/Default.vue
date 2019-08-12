<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
}
</style>
