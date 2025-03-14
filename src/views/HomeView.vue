<script setup>
import { ref, onMounted } from "vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import { useRouter } from "vue-router";

const ProjectAbout = ref(null);
const Overlay = ref(null);

const HomeViewConent = ref(null);

const visibleColumns = ref([]);

const router = useRouter();
const isCurtainActive = ref(false);
const navbar = ref();

//CURTAIN
const triggerCurtain = () => {
  isCurtainActive.value = true;
  setTimeout(() => {
    router.go(0);
  }, 2000);
};

const logoReload = () => {
  if (navbar.value) {
    const logoEl = navbar.value.$refs.logo;

    // Access logo element
    if (logoEl) {
      logoEl.addEventListener("click", triggerCurtain);
    }
  }
};

onMounted(() => {
  logoReload();
});

const columns = ref([
  [
    "https://plus.unsplash.com/premium_photo-1736517212352-759d55e856d2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    "https://images.unsplash.com/photo-1737069224287-44b47a1fcb4e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737106552705-4555077d91b1?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674461536261-99491025b4ed?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "https://images.unsplash.com/photo-1735790994003-26ca41b3ccb2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1734626854966-592fbd141316?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736267735571-b5a2e83afe3e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736322969168-7105551d1798?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "https://images.unsplash.com/photo-1736776256319-50153ce32dfc?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737079282750-5e2580fe5603?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737381439846-b927265e7dfc?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1736798696035-fe1f3fa7ec1f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "https://images.unsplash.com/photo-1737223450924-5e1a0d5ab85f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1737364324706-b8981952e298?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737120501530-73359d5c517c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737328180155-5cbac0020b0a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
  ],
]);

function columnsDelayFunct() {
  setTimeout(() => {
    for (let i = 0; i < columns.value.length; i++) {
      setTimeout(() => {
        visibleColumns.value.push(columns.value[i]);
      }, i * 200);
    }
  }, 1000);
}

columnsDelayFunct();

const handleScroll = (carouselElement, index) => {
  const column = columns.value[index];
  const itemHeight = (40 * window.innerHeight) / 100; // 40% of the viewport height

  // Check if user has scrolled to the bottom
  if (
    carouselElement.scrollTop + carouselElement.offsetHeight >=
    carouselElement.scrollHeight
  ) {
    const firstItem = column.shift();
    column.push(firstItem);
    carouselElement.scrollTop = carouselElement.scrollTop - itemHeight; // Adjust based on item height
  }

  // Check if user has scrolled to the top
  if (carouselElement.scrollTop <= 0) {
    const lastItem = column.pop();
    column.unshift(lastItem);
    carouselElement.scrollTop = carouselElement.scrollTop + itemHeight; // Adjust based on item height
  }
};

let isInitialScroll = true; // Flag to track the first scroll event

const scrollAll = (event) => {
  // Get the scroll delta (up or down)
  const delta = event.deltaY || event.detail || event.wheelDelta;

  visibleColumns.value.forEach((_, index) => {
    const carouselElement = HomeViewConent.value.querySelector(
      `.carousel:nth-of-type(${index + 1})`
    );

    if (carouselElement) {
      if (isInitialScroll) {
        if (delta > 0) {
          console.log("touchpad scroll up");

          if (index % 2 !== 0) {
            carouselElement.scrollTop += delta;
          } else {
            carouselElement.scrollTop -= delta;
          }
        } else if (delta < 0) {
          console.log("touchpad scroll down");
          if (index % 2 !== 0) {
            carouselElement.scrollTop += delta;
          } else {
            carouselElement.scrollTop -= delta;
          }
        }
      } else {
        if (index % 2 === 0) {
          carouselElement.scrollTop += delta;
        } else {
          carouselElement.scrollTop -= delta;
        }
      }
    }
  });

  //  prevent default scroll behaviour
  event.preventDefault();

  if (isInitialScroll) {
    isInitialScroll = false;
  }
};

const openProjectAbout = () => {
  const aboutModal = ProjectAbout.value;
  if (aboutModal) {
    aboutModal.classList.add("show");
    aboutModal.style.transition = "transform 0.4s ease-out 0.1s";

    Overlay.value.classList.remove("hidden");
  } else {
    console.error(
      "The ref value is undefined. Check if component is rendering correctly."
    );
  }
};

const closeProjectAbout = () => {
  const aboutModal = ProjectAbout.value;
  if (aboutModal) {
    aboutModal.classList.remove("show");
    aboutModal.style.transition = "transform 0.1s ease-in";

    Overlay.value.classList.add("hidden");
  } else {
    console.error(
      "The ref value is undefined. Check if component is rendering correctly."
    );
  }
};

const loadHomeViewContent = () => {
  const images = document.querySelectorAll("img");
  const allImages = images.length;

  if (document.readyState === "complete") {
    let loadedImages = 0;

    if (allImages === 0) {
      //no img
      console.log("No images found. Content loaded.");
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === allImages) {
              console.log("All images loaded.");
            }
          });
          img.addEventListener("error", () => {
            loadedImages++;
            if (loadedImages === allImages) {
              console.log(
                "Some images failed to load, but loading is complete."
              );
            }
          });
        }
      });

      if (loadedImages === allImages) {
        // all images loaded succesfully
        console.log("All images were already loaded. Content loaded.");
      }
    }
  } else {
    //window waiting for content to load
    window.addEventListener("load", () => {
      console.log("Window fully loaded.");
    });
  }
};

onMounted(() => {
  loadHomeViewContent();
});
</script>

<template>
  <NavBarComponent ref="navbar" id="navbar" />

  <div
    class="curtain"
    :class="{ curtain: true, 'curtain-active': isCurtainActive }"
  ></div>

  <div ref="HomeViewConent" class="page-container" @wheel="scrollAll">
    <p id="background-text">Ang Studio<sup>&reg;</sup></p>

    <div class="carousel-container">
      <div
        v-for="(column, index) in visibleColumns"
        :key="index"
        class="carousel"
        :ref="'carousel' + index"
        @scroll="(event) => handleScroll(event.target, index)"
      >
        <div
          class="carousel-item"
          v-for="(src, itemIndex) in column"
          :key="itemIndex"
        >
          <img
            :src="src"
            @click="openProjectAbout"
            class="project-img"
            alt="Project Image"
          />
        </div>
      </div>
    </div>

    <!-- PROJECT ABOUT COMPONENT -->
    <div ref="ProjectAbout" class="project-about-container">
      <span class="un" id="about-close-btn" @click="closeProjectAbout"
        >Close</span
      >
      <div class="about-text-container">
        <p>Picture Placeholder</p>
        <!-- <img src="" /> -->
        <div class="about-text-content">
          <h1>Project About</h1>
          <p>Short About</p>
        </div>
      </div>
    </div>

    <div
      ref="Overlay"
      class="hidden"
      id="overlay"
      @click="closeProjectAbout"
    ></div>
  </div>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;

  z-index: 9;
}

.curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transform: translateY(-100%); /* Start above the screen */
  transition: transform 0s; /* Initially, no transform */
}

.curtain-active {
  animation: curtainDrop 3s ease-in-out forwards;
}

@keyframes curtainDrop {
  0% {
    transform: translateY(-100%); /* Start above the screen */
    z-index: 0; /* Initially behind everything */
  }
  50% {
    transform: translateY(0); /* Curtain drops and covers everything */
    z-index: 100; /* Above everything */
  }
  100% {
    transform: translateY(0); /* Curtain moves down completely */
    z-index: 0; /* Behind everything again */
  }
}

.page-container {
  width: 100vw;

  height: 100vh;

  position: relative;
  overflow: hidden;

  opacity: 0;

  animation: fadeIn 0.5s ease-in forwards;
}

#background-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 15vw;
  font-weight: 500;

  position: absolute;
}

sup {
  font-size: 10vw;
  font-weight: 300;
}

.carousel-container {
  height: 100vh; /* Full screen height */

  display: flex;
  gap: 5vw;

  justify-content: center;
  align-items: center;
}

.carousel {
  z-index: 5;

  display: flex;
  flex-direction: column;

  height: 100%; /*each carousel*/
  width: 20vw;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.carousel-container .carousel {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in, transform 0.5s ease-in; /*appearing one by one*/
}

.carousel-container .carousel:nth-child(1) {
  animation: fadeInDown 0.5s ease-in forwards;
  animation-delay: 0.6s;
}

.carousel-container .carousel:nth-child(2) {
  animation: fadeInDown 0.5s ease-in forwards;
  animation-delay: 0.6s;
}

.carousel-container .carousel:nth-child(3) {
  animation: fadeInDown 0.5s ease-in forwards;
  animation-delay: 0.6s;
}

.carousel-container .carousel:nth-child(4) {
  animation: fadeInDown 0.5s ease-in forwards;
  animation-delay: 0.6s;
}

/* Keyframes for fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-item {
  flex-shrink: 0;

  height: 40vh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  box-sizing: border-box;

  transition: all 0.6s ease;
}

img {
  width: 100%;
  height: 80%;

  object-fit: cover;

  transition: all 0.6s ease;
}

img:hover {
  transform: scale(1.2);
  transform-origin: center;
}

/* hide scrollbars */
.carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.carousel {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* PROJECT ABOUT COMPONENT */
.project-about-container {
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 4vh;

  height: 90vh;
  width: 100vw;

  left: 0;
  bottom: 0;

  background-color: white;
  padding: 3vh 10vw 10vh 10vw;

  z-index: 10;

  /* transiton from bottom */
  transform: translateY(100%);
  transition: transform 0.4s ease-out 0.1s;
  overflow: hidden;
}

.about-text-container {
  display: flex;
  gap: 10vw;

  height: 100%;

  background-color: aqua;
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

#about-close-btn {
  font-size: 2vh;
  align-self: flex-end;
}

#overlay {
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: black;
  opacity: 50%;

  z-index: 8;
  transition: transform 0.2s ease-in 0.5;
}

/* UNDERLINE MOVEMENT */
span.un {
  position: relative;
}

span.un::after {
  position: absolute;
  content: "";
  background: black;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0%;
  transition: 300ms ease-in-out;
}

span.un:hover::after {
  width: 100%;
  left: 0;
}

/* FUNCTION CLASSES */

.show {
  transform: translateY(0);
}

.hidden {
  display: none;
}
</style>
