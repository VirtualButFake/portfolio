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
	colorMode: {
		preference: "system",
		fallback: "light",
		storageKey: "theme-preference",
	},
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
	},
	app: {
		head: {
			title: "Tijn Epema",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{
					name: "darkreader-lock",
					content: "true",
				},
			],
		},
	},
	ui: {
		global: true,
		icons: ["grommet-icons", "ic", "simple-icons"],
	},
});
