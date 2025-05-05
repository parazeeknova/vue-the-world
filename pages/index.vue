<script setup>
import { ref } from "vue";

const videoUrl = ref("https://cms.cockpit.zephyyrr.in/storage/uploads/2025/05/05/hero_uid_6818857eab911.mp4");
const videoError = ref(false);
const isVideoLoaded = ref(false);

function handleVideoError() {
  videoError.value = true;
  console.error("Video failed to load");
}

function handleVideoLoaded() {
  isVideoLoaded.value = true;
}
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video
        v-if="!videoError"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        class="w-full h-full object-cover"
        loading="eager"
        @error="handleVideoError"
        @loadeddata="handleVideoLoaded"
      >
        <source :src="videoUrl" type="video/mp4">
      </video>

      <img
        src="https://cms.cockpit.zephyyrr.in/storage/uploads/2025/05/05/hero_uid_6818851e9013c.jpg"
        alt="Beautiful landscape"
        class="w-full h-full object-cover video-fallback"
        :class="{ hidden: isVideoLoaded && !videoError }"
      >

      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
    </div>

    <div class="relative z-10 flex flex-col h-full pt-16 sm:pt-20">
      <div class="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 class="font-instrument-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-none mb-3 sm:mb-4 drop-shadow-lg">
          TRAVEL<br>THE WORLD
        </h1>
        <p class="font-instrument-serif italic text-white text-base sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-8 drop-shadow-md tracking-wide">
          Keep track of your travels and adventures with our digital journal
        </p>

        <div class="relative max-w-xs sm:max-w-sm md:max-w-md w-full">
          <input
            type="text"
            placeholder="Search your next destination"
            class="w-full px-4 sm:px-6 py-3 sm:py-4 pr-10 sm:pr-12 rounded-full text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 focus:outline-none shadow-lg transition-colors duration-300 text-sm sm:text-base"
          >
          <button class="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div class="mt-6 sm:mt-10">
          <button class="btn btn-md sm:btn-lg rounded-full bg-white hover:bg-gray-100 text-neutral-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 px-5 sm:px-8 font-medium text-sm sm:text-base">
            <NuxtLink to="/dashboard">
              Start Your Journey
            </NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  overflow: hidden;
  height: 100%;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.video-fallback {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.hidden {
  display: none;
}

@media (min-width: 480px) {
  .xs\:inline-flex {
    display: inline-flex;
  }
}
</style>
