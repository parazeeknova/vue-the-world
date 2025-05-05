<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <div v-if="!authStore.loading && authStore.user" class="dropdown">
    <div tabindex="0" role="button" class="btn btn-sm rounded-full bg-teal-600 hover:bg-teal-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
      <div v-if="authStore.user.image" class="avatar">
        <div class="size-6 rounded-full">
          <img :src="authStore.user.image" alt="User avatar">
        </div>
      </div>
      <span class="truncate max-w-[100px] sm:max-w-[150px]">{{ authStore.user.name }}</span>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow-lg mt-2">
      <li>
        <NuxtLink to="/sign-out" class="flex items-center gap-2">
          <Icon name="mdi:exit-to-app" size="18" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button v-else class="btn btn-sm rounded-full bg-teal-600 hover:bg-teal-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2" :disabled="authStore.loading" @click="authStore.signIn">
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon v-else name="mdi:github" size="18" />
    Sign in with GitHub
  </button>
</template>
