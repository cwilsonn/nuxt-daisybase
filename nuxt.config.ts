// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        'nuxt-lodash',
    ],
    googleFonts: {
        families: {
            Inter: true,
            'Space+Mono': true,
        },
    },
    lodash: {
        prefix: '_',
    },
});
