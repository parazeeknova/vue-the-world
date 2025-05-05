<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-8">
    <div class="bg-white dark:bg-neutral-800 rounded-b-[2rem] mx-auto max-w-[98%] sm:max-w-[95%] shadow-md transition-colors duration-300">
      <div class="navbar px-2 sm:px-4 md:px-8 py-3 md:py-4">
        <div class="navbar-start">
          <NuxtLink to="/" class="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300 font-instrument-serif tracking-widest">
            vuetheworld*
          </NuxtLink>
          <span class="hidden md:inline-block ml-2 text-xs text-neutral-500 dark:text-neutral-400 italic">
            Your digital travel journal
          </span>
        </div>

        <div class="navbar-end flex items-center gap-2 sm:gap-3">
          <AppThemeToggle />

          <button class="btn btn-sm rounded-full bg-teal-600 hover:bg-teal-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <Icon name="mdi:github" style="height: 18px; width: 18px;" />
            Sign in with GitHub
          </button>

          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-sm btn-circle btn-ghost text-neutral-700 dark:text-neutral-200 transition-all duration-300">
              <Icon name="tabler:align-left" style="height: 22px; width: 22px;" />
            </button>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-white dark:bg-neutral-800 rounded-box w-48 sm:w-52 mt-2">
              <li>
                <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300 rounded-lg text-sm">
                  <Icon name="tabler:info-circle-filled" size="18" />
                  About us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300 rounded-lg text-sm">
                  <Icon name="tabler:map-question" size="18" />
                  FAQ
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
