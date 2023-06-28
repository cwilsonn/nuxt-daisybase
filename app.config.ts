export default defineAppConfig({
    siteName: 'DaisyBase', // used in SiteLogo.vue and throughout the app
    siteIcon: 'mdi:flower-tulip-outline', // https://icon-sets.iconify.design (via nuxt-icon) used in SiteLogo.vue
    theme: {
        default: 'light', // default DaisyUI theme
        options: ['light', 'dark'], // extend with any additional DaisyUI theme options
    },
    navigation: [
        {
            title: 'Subpage',
            icon: 'mdi:page-next-outline',
            to: '/subpage',
        },
        {
            title: 'Components',
            icon: 'mdi:cube-outline',
            to: '/components',
        },
    ],
})