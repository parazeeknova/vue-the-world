import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/icon"],
  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [
      // @ts-expect-error - Mismatch type error for tailwindcss plugin
      tailwindcss(),
    ],
  },
});
