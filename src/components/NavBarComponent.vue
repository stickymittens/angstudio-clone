<script setup>
import LogoAnimation from "./LogoAnimation.vue";
// import { useRouter } from "vue-router";
import { ref } from "vue";

// const router = useRouter();

// const reloadPage = () => {
//   router.go(0);
//   console.log("logo clicked");
// };

const logo = ref(null);
</script>

<template>
  <div class="navbar-container">
    <h1 ref="logo"><LogoAnimation /></h1>
    <ul>
      <li class="navbar-text un">Work</li>
      <li class="navbar-text un">About</li>
      <li class="navbar-text un">Contact</li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/128/8265/8265301.png"
          alt="change website background"
        />
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

img {
  height: 3rem;
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
</style>
