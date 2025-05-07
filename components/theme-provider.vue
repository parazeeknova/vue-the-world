<script setup>
import { useColorMode } from "#imports";
import { onMounted, ref, watch } from "vue";

const colorMode = useColorMode();
const initialized = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem("color-mode");

  if (savedTheme) {
    colorMode.preference = savedTheme;
  }
  else {
    colorMode.preference = colorMode.preference || "dark";
  }

  initialized.value = true;
});

watch(() => colorMode.value, (newValue) => {
  if (initialized.value) {
    localStorage.setItem("color-mode", newValue);
  }
}, { immediate: true });
</script>

<template>
  <div :data-theme="colorMode.value === 'dark' ? 'dim' : 'nord'" class="min-h-screen">
    <slot />
  </div>
</template>
