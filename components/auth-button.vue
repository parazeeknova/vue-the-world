<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button class="btn btn-sm rounded-full bg-teal-600 hover:bg-teal-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2" :disabled="authStore.loading" @click="authStore.signIn">
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon v-else name="mdi:github" size="18" />
    Sign in with GitHub
  </button>
</template>
