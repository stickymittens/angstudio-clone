<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const logoContainer = document.querySelector(".logo-container");
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  const third = document.querySelector(".third");

  if (!second || !third) return;

  const secondWidth = second.getBoundingClientRect().width;
  third.style.transform = `translateX(${-secondWidth}px)`;

  second.style.transform = `translateY(-1.5rem)`;

  if (logoContainer) {
    logoContainer.addEventListener("mouseover", () => {
      third.style.transform = `translateX(0.1rem)`;
      second.style.transform = `translateY(0)`;
    });

    logoContainer.addEventListener("mouseout", () => {
      second.style.transform = `translateY(-1.5rem)`;
      third.style.transform = `translateX(${-secondWidth}px)`;
    });
  }
});
</script>

<template>
  <div class="logo-container">
    <span class="navbar-text first">Ang</span>
    <span class="navbar-text second">elica Barco</span>
    <span class="navbar-text third">Studio<sup>&reg;</sup></span>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: baseline;

  position: relative;

  word-spacing: 0.1rem;

  overflow-y: hidden;

  width: 30vw;
  height: 1.6rem;

  cursor: pointer;

  /* border: 1px solid red; */
}

.navbar-text {
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  vertical-align: baseline;
}

.second {
  transform: translateY(-1.5rem);
  transition: transform 0.3s ease-out;
}

.third {
  padding-left: 0.3rem;

  transition: transform 0.3s ease-out;
}
</style>
