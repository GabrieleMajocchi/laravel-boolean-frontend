<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  }
}


</script>

<template>
  <Header />
  <router-view>
  </router-view>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@import "bootstrap/scss/bootstrap";
</style>
