<script setup>
import LogoAnimation from "./LogoAnimation.vue";
import { ref } from "vue";
import { useDarkModeStore } from "@/stores/darkModeStore";

const isDarkMode = useDarkModeStore();

const logo = ref(null);
const toggleEl = ref(null);
const navbar = ref(null);

const dot = ref(null);
const square = ref(null);

const toggleDarkMode = () => {
  isDarkMode.darkMode = !isDarkMode.darkMode;
  console.log(isDarkMode.darkMode);

  if (dot.value) {
    if (isDarkMode.darkMode) {
      navbar.value.classList.add("dark");

      dot.value.style.backgroundColor = "white";
      dot.value.classList.add("disappear");

      setTimeout(() => {
        dot.value.style.opacity = 0;
      }, 300);

      square.value.style.backgroundColor = "white";
      square.value.classList.add("appear");
      setTimeout(() => {
        square.value.style.opacity = 0;
      }, 300);

      dot.value.classList.remove("appear");
      square.value.classList.remove("disappear");
    } else {
      navbar.value.classList.remove("dark");

      square.value.style.backgroundColor = "black";
      square.value.classList.add("disappear");
      setTimeout(() => {
        square.value.style.opacity = 0;
      }, 300);

      dot.value.style.backgroundColor = "black";
      dot.value.classList.add("appear");
      setTimeout(() => {
        dot.value.style.opacity = 0;
      }, 300);

      dot.value.classList.remove("disappear");
      square.value.classList.remove("appear");
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
        <div
          src="https://cdn-icons-png.flaticon.com/128/8265/8265301.png"
          alt="switch to dark mode"
          ref="dot"
          id="dot"
        ></div>

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

  background-color: rgba(255, 255, 255, 0.719);

  margin: 0;
}

.navbar-text {
  font-size: 1rem;
  font-weight: 600;
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

.dark li.un::after {
  background: white;
}

/* TOGGLE BOX */
.toggle-li {
  width: 3rem;
  height: 3rem;

  position: relative;
}

.dark {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

#dot {
  height: 0.6rem;
  width: 0.6rem;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  opacity: 1;
  /* transform: scale(1); */
}

#dark-mode-square {
  height: 0.6rem;
  width: 0.6rem;
  background-color: white;
  border: none;
  opacity: 0;
  /* transform: scale(0); */
}

#dot,
#dark-mode-square {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
}

.disappear {
  animation: disappear 0.3s ease;
}

.appear {
  animation: appear 0.3s ease 0.3s forwards;
}

@keyframes disappear {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
