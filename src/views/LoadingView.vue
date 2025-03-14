<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

setTimeout(() => {
  router.push("/home");
}, 2000);
</script>

<template>
  <div class="loading-wrapper">
    <div id="loading-content" ref="LoadingContent">
      <div class="loading-content-text">
        <p id="brands">Better brands</p>
        <p id="reasons">for better reasons</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#loading-content {
  width: 100vw;
  height: 100vh;
  background-color: #ecebc9;

  z-index: 100;

  position: fixed;

  font-size: large;
  line-height: 100%;
}

.loading-content-text {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 0.5vh;
}

#brands,
#reasons {
  opacity: 0;
  transform: translateY(20px);
  animation-fill-mode: forwards;
}

#brands {
  font-weight: 600;

  animation: fadeInUp 0.7s forwards;
}

#reasons {
  font-family: Helvetica;
  font-weight: 100;
  font-size: 110%;
  font-style: oblique;

  animation: fadeInUp 1s forwards;
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
