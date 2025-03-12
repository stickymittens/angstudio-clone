<script setup>
import { RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarComponent.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBarComponent id="navbar" />
    </div>
  </header>

  <router-view />
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;

  z-index: 9;
}
</style>
