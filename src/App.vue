<script>
  export default {
    name: 'App',
    data() {
      return {};
    }
  };
</script>

<template>
  <div :class="$style.App">
    <h1>Welcome to Neutrino v8</h1>
  </div>
</template>

<style module lang="scss">
  $color: green;

  .App {
    padding: 20px;
    background-color: $color;
  }
</style>
