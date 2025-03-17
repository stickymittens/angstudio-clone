<script setup>
import LogoAnimation from "./LogoAnimation.vue";
import { ref, onMounted, nextTick } from "vue";
import { useDarkModeStore } from "@/stores/darkModeStore";

const isDarkMode = useDarkModeStore();

const logo = ref(null);
const toggleEl = ref(null);
const navbar = ref(null);

const dot = ref(null);
const square = ref(null);

const toggleDarkMode = () => {
  console.log("Toggling dark mode");

  if (dot.value) {
    if (isDarkMode.darkMode) {
      dot.value.style.opacity = "1"; // Ensure it is fully visible
      dot.value.style.transform = "scale(1)"; // Full size
    } else if (!isDarkMode.darkMode) {
      dot.value.style.opacity = "0"; // Fade out
      dot.value.style.transform = "scale(0)"; // Shrink to 0
    }
  }
};
</script>

<template>
  <div
    class="navbar-container"
    ref="navbar"
    :class="{ dark: isDarkMode.darkMode }"
  >
    <h1 ref="logo"><LogoAnimation /></h1>
    <ul>
      <li class="navbar-text un">Work</li>
      <li class="navbar-text un">About</li>
      <li class="navbar-text un">Contact</li>
      <li ref="toggleEl" @click="toggleDarkMode" class="toggle-li">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8265/8265301.png"
          alt="switch to dark mode"
          ref="dot"
          id="dot"
        />
        <div
          alt="switch to light mode"
          id="dark-mode-square"
          ref="square"
        ></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1vh 2vw 1vh 3vw;
  width: 100vw;

  background-color: rgba(255, 255, 255, 0.5);

  margin: 0;
}

.navbar-text {
  font-size: 1rem;
  font-weight: 500;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 8vw;

  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
}

/* UNDERLINE MOVEMENT */
li.un {
  position: relative;
}

li.un::after {
  position: absolute;
  content: "";
  background: black;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0%;
  transition: 300ms ease-in-out;
}

li.un:hover::after {
  width: 100%;
  left: 0;
}

.toggle-li {
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.dark {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

#dot {
  height: 3rem;
  transform: scale(1);
}

#dark-mode-square {
  height: 0.5rem;
  width: 0.5rem;
  background-color: white;
}

@keyframes disappearLi {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* @keyframes appearLi {
  0% {
    opacity: 0;

    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
} */
</style>
