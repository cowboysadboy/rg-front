<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <div class="wrapper">
    <div class="sidebar">
      <Navigation />
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  background: rgb(245, 246, 250);

  .sidebar {
    box-shadow: inset -1px 0px 0px 0px rgb(215, 219, 236);

  }
}
</style>
