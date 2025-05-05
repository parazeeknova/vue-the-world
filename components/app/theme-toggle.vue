<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-2">
    <input v-model="isDark" type="checkbox">
    <Icon name="tabler:sun" class="swap-on" size="18" />
    <Icon name="tabler:moon-filled" class="swap-off" size="18" />
  </label>
</template>
