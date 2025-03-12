<script setup>
document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".logo-container");

  //all of the ifs are to assure that the elements are rendered and can be operated on
  if (logoContainer) {
    logoContainer.addEventListener("mouseover", function () {
      const first = document.querySelector(".first");
      const second = document.querySelector(".second");
      const third = document.querySelector(".third");

      if (first && second && third) {
        const firstWidth = first.getBoundingClientRect().width;
        const secondWidth = second.getBoundingClientRect().width;

        // when hovered - second is visible
        second.style.opacity = "1";

        // and second and third move to teh right
        second.style.transform = `translateX(${firstWidth}px)`; // not adding spaced as I already have gap 0.4rem in css
        third.style.transform = `translateX(${secondWidth}px)`;
      }
    });

    logoContainer.addEventListener("mouseout", function () {
      const second = document.querySelector(".second");
      const third = document.querySelector(".third");

      //when logo not hovered - second invisible and third goes back it its original place
      if (second) {
        second.style.opacity = "0";
      }

      if (third) {
        third.style.transform = "translateX(0)";
      }
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
  gap: 0.3rem;

  overflow-y: hidden;
  padding: 0.5rem 0;

  width: 30vw;
}

.navbar-text {
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  vertical-align: baseline;
  line-height: 1;
}

.navbar-text.second {
  opacity: 0;
  position: absolute;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;

  bottom: 0.5rem;
}

.navbar-text.third {
  transition: transform 0.3s ease-in-out;
}
</style>
