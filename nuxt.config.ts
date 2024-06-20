// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  // runtimeConfig: {
  //   supabaseUrl: process.env.SUPABASE_URL,
  //   supabaseKey: process.env.SUPABASE_KEY,
  // },
  build: {
    transpile: ["@heroicons/vue"],
  },
});
