<script lang="ts" setup>
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <div class="absolute inset-0 z-0 bg-base-300">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-base-300" />
      <div class="absolute inset-0 bg-pattern opacity-5" />
    </div>

    <div class="relative z-10 flex flex-col h-full">
      <div class="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div class="card w-full max-w-lg bg-base-100 shadow-xl border-t-4 border-primary">
          <div class="card-body">
            <div class="flex flex-col items-center">
              <div class="relative mb-2">
                <Icon name="tabler:map-pin" class="text-primary animate-bounce-slow" size="48" />
              </div>

              <h1 class="font-instrument-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none mb-3 sm:mb-4">
                Bon Voyage!
              </h1>

              <p class="font-instrument-serif italic text-base sm:text-lg max-w-md mb-6 tracking-wide">
                Safely signing you out of your travel journal...
              </p>

              <div class="flex items-center space-x-2 mb-2">
                <span class="loading loading-spinner loading-md text-primary" />
              </div>

              <div class="mt-4 text-sm text-base-content/70">
                You'll be redirected shortly
              </div>
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

.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.animate-bounce-slow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

@media (min-width: 480px) {
  .xs\:inline-flex {
    display: inline-flex;
  }
}
</style>
