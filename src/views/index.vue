<template>
  <div id="app-container">
    <Navbar />
    <router-view />
  </div>
</template>
<style lang="scss">
// custom.scss
@import "node_modules/bootstrap/scss/bootstrap";
@import "@/assets/scss/custom.scss";
</style>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app-container",
  components: {
    Navbar
  }
};
</script>
