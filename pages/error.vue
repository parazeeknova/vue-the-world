<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <div class="absolute inset-0 z-0 bg-base-300">
      <div class="absolute inset-0 bg-gradient-to-b from-error/30 to-base-300" />
    </div>

    <div class="relative z-10 flex flex-col h-full">
      <div class="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div class="card w-full max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-error mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>

              <h1 class="font-instrument-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none mb-3 sm:mb-4">
                Oops!
              </h1>

              <div role="alert" class="alert alert-error shadow-lg mb-6">
                <span class="text-base sm:text-lg font-medium">{{ error }}</span>
              </div>

              <p class="font-instrument-serif italic text-base sm:text-lg max-w-md mb-6 tracking-wide">
                Something went wrong. Let's get you back on track.
              </p>

              <button class="btn btn-md sm:btn-lg rounded-full bg-white hover:bg-gray-100 text-neutral-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 px-5 sm:px-8 font-medium text-sm sm:text-base">
                <NuxtLink to="/">
                  Return to Home
                </NuxtLink>
              </button>
            </div>
          </div>
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

@media (min-width: 480px) {
  .xs\:inline-flex {
    display: inline-flex;
  }
}
</style>
