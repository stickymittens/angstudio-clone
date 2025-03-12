<script setup>
import { ref } from "vue";

const BodyContainer = ref(null);

const closeAbout = () => {
  if (BodyContainer.value) {
    BodyContainer.value.classList.add("hidden");
  } else {
    console.error(
      "The ref value is undefined. Check if component is rendering correctly."
    );
  }
};

//I UNDERSTAND MY MISTAKE
</script>

<template>
  <div ref="BodyContainer" class="close-body-container">
    <p id="close" @click="closeAbout">Close</p>

    <div class="project-about-container">
      <div class="about">
        <p>Picture Placeholder</p>
        <img src="" />
        <div class="text-content">
          <h1>Project About</h1>
          <p>Short About</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-about-container {
  height: 90vh;
  width: 100vw;

  bottom: 0;

  position: fixed;

  background-color: white;

  padding: 10vh 10vw;

  z-index: 1;
}

.about {
  display: flex;
  gap: 10vw;

  background-color: aqua;

  height: 100%;
}

.about-text-content {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  text-align: center;

  padding: 5vh 5vw;

  background-color: yellow;
}

#about-close {
  position: absolute;
  top: 12vh;
  right: 5vw;

  z-index: 2;
}

#about-close:hover {
  text-decoration: underline;
}

.hidden {
  display: none;
}
</style>
