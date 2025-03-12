<script setup>
import LogoAnimation from "./LogoAnimation.vue";
</script>

<template>
  <div class="navbar-container">
    <h1><LogoAnimation /></h1>
    <ul>
      <li class="navbar-text un">Work</li>
      <li class="navbar-text un">About</li>
      <li class="navbar-text un">Contact</li>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8265/8265301.png"
        alt="change website background"
      />
    </ul>
  </div>
</template>

<style scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  width: 98vw;
}

.navbar-text {
  font-size: 1rem;
  font-weight: 500;
}

ul {
  display: flex;
  align-items: center;

  gap: 10vw;

  list-style-type: none;
}

img {
  height: 3rem;
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
</style>
