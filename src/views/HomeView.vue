<script setup>
import { ref, onMounted, computed } from "vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import { useRouter } from "vue-router";
import { useDarkModeStore } from "@/stores/darkModeStore";

const ProjectAbout = ref(null);
const FullProjectButton = ref(null);
const Overlay = ref(null);

const HomeViewContent = ref(null);

const visibleColumns = ref([]);

const router = useRouter();
const isCurtainActive = ref(false);
const navbar = ref();

const curtain = ref(null);
const isDarkMode = useDarkModeStore();

const currentImgSrc = ref(null);

//CURTAIN
const triggerCurtain = () => {
  isCurtainActive.value = true;
  setTimeout(() => {
    router.go(0);
  }, 1500);
};

const clickLogoToRefresh = () => {
  if (navbar.value) {
    const logoEl = navbar.value.$refs.logo;
    if (logoEl) {
      logoEl.addEventListener("click", triggerCurtain);
    }
  }
};

const toggleDarkMode = () => {
  if (HomeViewContent.value) {
    if (isDarkMode.darkMode) {
      HomeViewContent.value.style.backgroundColor = "black";
      HomeViewContent.value.style.color = "white";

      //project about
      ProjectAbout.value.classList.add("dark");
      ProjectAbout.value.style.backgroundColor = "black";

      //full project btn
      FullProjectButton.value.classList.remove("full-project-btn-light");
      FullProjectButton.value.classList.add("full-project-btn-dark");
    } else {
      HomeViewContent.value.style.backgroundColor = "white";
      HomeViewContent.value.style.color = "black";
      curtain.value.style.backgroundColor = "white";

      //project about
      ProjectAbout.value.classList.remove("dark");
      ProjectAbout.value.style.backgroundColor = "white";

      //full project btn
      FullProjectButton.value.classList.remove("full-project-btn-dark");
      FullProjectButton.value.classList.add("full-project-btn-light");
    }

    isDarkMode.value = !isDarkMode.value;
  }
};

//getting the toggle el form navbar
const clickDotToToggleDarkMode = () => {
  if (navbar.value) {
    const toggleEl = navbar.value.$refs.toggleEl;
    if (toggleEl) {
      toggleEl.addEventListener("click", toggleDarkMode);
    }
  }
};

onMounted(() => {
  clickLogoToRefresh();
  clickDotToToggleDarkMode();
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

//CAROUSLES AND SCROLLING
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

let isInitialScroll = true; //first scroll

const scrollAll = (event) => {
  // Get the scroll delta (up or down)
  const delta = event.deltaY || event.detail || event.wheelDelta;

  visibleColumns.value.forEach((_, index) => {
    const carouselElement = HomeViewContent.value.querySelector(
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

  //prevent default scroll behaviour
  event.preventDefault();

  if (isInitialScroll) {
    isInitialScroll = false;
  }
};

const openProjectAbout = (imgSrc) => {
  currentImgSrc.value = imgSrc;
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
        console.log("All images were already loaded. Content loaded.");
      }
    }
  } else {
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
    ref="curtain"
    class="curtain"
    :class="{ curtain: true, 'curtain-active': isCurtainActive }"
  ></div>

  <div ref="HomeViewContent" class="home-view" @wheel="scrollAll">
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
            @click="openProjectAbout(src)"
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
        <div class="about-picture-frame">
          <img :src="currentImgSrc" alt="Selected project image" />
        </div>
        <div class="about-text-content">
          <h1>Brand's name</h1>
          <h2>Short explanation of the project</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            asperiores hic tempore, rem possimus ab quas, necessitatibus facilis
            fugit non eos labore incidunt, quidem vero delectus. Aliquam esse
            quibusdam enim.
          </p>

          <button ref="FullProjectButton" class="full-project-btn">
            View full project
          </button>
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
  transform: translateY(-100%);
  transition: transform 0s;
}

.curtain-active {
  animation: curtainDrop 2s ease-in-out forwards;
}

@keyframes curtainDrop {
  0% {
    transform: translateY(-100%);
    z-index: 0;
  }
  50% {
    transform: translateY(0);
    z-index: 100;
  }
  100% {
    transform: translateY(0);
    z-index: 0;
  }
}

.home-view {
  width: 100vw;

  height: 100vh;

  position: relative;
  overflow: hidden;

  opacity: 0;

  animation: fadeIn 0.5s ease-in forwards;

  background-color: white;
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
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  box-sizing: border-box;

  transition: all 0.6s ease;
  border: none;
}

.project-img {
  width: 100%;
  height: 80%;

  object-fit: cover;

  transition: all 0.6s ease;

  border-radius: 25px;

  cursor: pointer;
}

.project-img:hover {
  transform: scale(1, 1.2);
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
  gap: 2vh;

  height: 90vh;
  width: 100vw;

  left: 0;
  bottom: 0;

  background-color: inherit;
  padding: 2vh 5vw 5vh 5vw;

  z-index: 10;

  /* transiton from bottom */
  transform: translateY(100%);
  transition: transform 0.4s ease-out 0.1s;
  overflow: hidden;
}

.about-text-container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  /* background-color: aqua; */
}

.about-picture-frame {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60vh;
}

.about-picture-frame img {
  object-fit: cover;
  height: 100%;
  width: 80%;

  border-radius: 50px;
}

.about-text-content {
  display: flex;
  flex-direction: column;
  gap: 1vh;

  height: 70%;
  width: 100%;

  text-align: left;

  padding: 5vh 5vw 5vh 1vw;

  /* background-color: yellow; */
}
.about-text-content h1 {
  font-size: 2.4rem;
  font-weight: 600;
}
.about-text-content h2 {
  font-size: 1.8rem;
  font-weight: 400;
}

.about-text-content p {
  margin-top: 2vh;
}

.full-project-btn {
  font-size: 1rem;
  font-weight: 500;

  margin: 2vh 0;
  padding: 0.5rem 1rem;

  width: max-content;

  border: none;
  border-radius: 25px;

  cursor: pointer;
}

.full-project-btn:hover {
  background-color: black;
  color: white;
}

.full-project-btn-light {
  background-color: #f5f5f5;
  color: black;
}

.full-project-btn-light:hover {
  background-color: black;
  color: white;
}

/* Dark mode styles */
.full-project-btn-dark {
  background-color: #696969;
  color: white;
}

.full-project-btn-dark:hover {
  background-color: white;
  color: black;
}

#about-close-btn {
  font-size: 2vh;
  align-self: flex-end;
  cursor: pointer;
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

.dark .un::after {
  background: white;
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
