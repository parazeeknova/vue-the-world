<script lang="ts" setup>
import { useColorMode } from "#imports";
import { ref, watch } from "vue";

const colorMode = useColorMode();

const isDark = ref(colorMode.value === "dark");

watch(() => colorMode.value, (newValue) => {
  isDark.value = newValue === "dark";
});

function toggleTheme() {
  const newValue = !isDark.value;
  isDark.value = newValue;
  colorMode.preference = newValue ? "dark" : "light";
}
</script>

<template>
  <button class="swap swap-rotate mx-2" @click="toggleTheme">
    <Icon v-if="isDark" name="tabler:sun" size="18" />
    <Icon v-else name="tabler:moon-filled" size="18" />
  </button>
</template>
