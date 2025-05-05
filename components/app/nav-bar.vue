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
          <button class="btn btn-sm rounded-full bg-teal-600 hover:bg-teal-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Sign in with GitHub
          </button>

          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-sm btn-circle btn-ghost text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-white dark:bg-neutral-800 rounded-box w-48 sm:w-52 mt-2">
              <li>
                <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300 rounded-lg text-sm">
                  About us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300 rounded-lg text-sm">
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
