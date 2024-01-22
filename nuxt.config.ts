// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxtjs/tailwindcss",
		"nuxt-icon", // for svg icons
		"nuxt-icons",
		"@vueuse/motion/nuxt",
		"@vueuse/nuxt",
		"@nuxt/image",
	],
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
	},
	app: {
		head: {
			title: "Tijn Epema",
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	ui: {
		global: true,
		icons: ["grommet-icons", "ic", "simple-icons"],
	},
});
