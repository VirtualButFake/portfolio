export default defineAppConfig({
	ui: {
		primary: "indigo",
		gray: "cool",
		button: {
			default: {
				base: "transition-colors duration-300",
			},
		},
	},
	links: [
		{
			icon: "simple-icons:github",
			link: "https://github.com/VirtualButFake",
		},
		{
			icon: "i-grommet-icons-linkedin-option",
			link: "https://www.linkedin.com/in/tijn-epema-532a87285/",
		},
	],
	footerLinks: [
		{
			icon: "simple-icons:github",
			link: "https://github.com/VirtualButFake",
		},
		{
			icon: "i-grommet-icons-linkedin-option",
			link: "https://www.linkedin.com/in/tijn-epema-532a87285/",
		},
		{
			icon: "simple-icons:discord",
			link: "https://discord.com/users/196222566195658752",
		},
		{
			icon: "ic:round-email",
			link: "mailto:tijn.epema@gmail.com",
		},
	],
	experience: [
		{
			title: "Programmer at",
			highlight: "Bulk Games",
			link: "https://www.linkedin.com/company/bulkgames/",
			date: "Oct 2023 - July 2024",
			stack: ["Full Stack", "Luau", "Git", "Rojo", "Lune"],
			description:
				"Developed user-facing interactive components, improved UI/UX, implemented responsive NPC controllers, and enhanced the studio's workflow by integrating a package manager, adding tools like Aftman and continuous integration, and optimizing processes.",
		},
		{
			title: "Lead Programmer at",
			highlight: "Pillar's Edge",
			link: "https://www.roblox.com/groups/12093164",
			date: "Jun 2022 - Oct 2023",
			stack: [
				"Full Stack",
				"Luau",
				"Fusion",
				"TypeScript",
				"Project Management",
				"Git",
				"Rojo",
				"Husky",
				"Security",
			],
			description:
				"Led development of large-scale projects, established a developer-friendly workflow with Git and Rojo, created custom tooling to optimize processes, wrote optimized code managing thousands of entities, and designed responsive UI/UX using Fusion.",
		},
		{
			title: "Programmer and Project Lead at",
			highlight: "Octa Studios",
			link: "https://www.linkedin.com/company/octa-studios/",
			date: "Oct 2020 - Aug 2021",
			stack: ["Full Stack", "Luau", "Project Management"],
			description:
				"Managed a large team of cross-functional developers on several projects, wrote robust backend code and game optimizations, redesigned the game's interface, and re-evaluated its UX.",
		},
		{
			title: "Intern at",
			highlight: "CoderDojo",
			link: "https://www.linkedin.com/company/coderdojo/",
			date: "Jan 2020 - Jun 2020",
			stack: ["Scratch", "Python"],
			description:
				"Helped attendees aged 7-17 grasp fundamental coding principles through Scratch and Python during programming workshops, teaching them problem solving skills and guiding them through the process of creating their own projects and exploring the concepts behind them.",
		},
	],
	projects: [
		{
			title: "MDWave",
			description:
				"MDWave is a front-end for Moonwave, a documentation parser for Luau, built with VitePress, Vue, Tailwind and JavaScript.",
			stack: ["Vue", "Tailwind", "JavaScript"],
			image: "mdwave.png",
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/mdwave",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
				},
				{
					text: "View documentation",
					link: "https://docs.tijne.net/mdwave/",
					class: "transition-self hover:ring-primary-500 dark:bg-primary-400/20 hover:dark:bg-primary-400/40",
				},
			],
		},
		{
			title: "CodeSpan",
			description:
				"codespan-lune allows you to create beautiful diagnostics for your Lune applications, based on the original library for Rust.",
			stack: ["Lune"],
			image: "diagnostics.png",
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/codespan-lune",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
				},
				{
					text: "View documentation",
					link: "https://docs.tijne.net/codespan/",
					class: "transition-self hover:ring-primary-500 dark:bg-primary-400/20 hover:dark:bg-primary-400/40",
				},
			],
		},
		{
			title: "Fusion Autocomplete",
			description:
				"Fusion Autocomplete is a Visual Studio Code extension that adds autocomplete support for Fusion, autocompleting class names, properties, functions and function parameters.",
			stack: ["TypeScript"],
			buttons: [
				{
					text: "GitHub",
					link: "https://github.com/VirtualButFake/fusion-autocomplete",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
				},
				{
					text: "Visual Studio Marketplace",
					link: "https://marketplace.visualstudio.com/items?itemName=Virtual.fusionautocomplete",
					icon: "simple-icons:visualstudiocode",
					class: "transition-self hover:ring-primary-500 bg-white dark:bg-[#046aba] dark:hover:bg-[#055ea3] dark:text-white",
				},
			],
		},
		{
			title: "zap-vscode",
			description:
				"A Visual Studio Code extension that provides syntax highlighting and intellisense for the Zap IDL. Designed to mimic the Luau Language Server, it provides a seamless experience for Zap developers.",
			stack: ["TypeScript"],
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
					link: "https://github.com/VirtualButFake/zap-vscode",
				},
			],
		},
		{
			title: "Portfolio",
			description:
				"A portfolio made over the course of a few weeks, built with Nuxt, Tailwind and TypeScript. It features full dark mode support, a responsive design, and a clean, minimalistic look.",
			stack: ["Nuxt", "Tailwind", "TypeScript"],
			image: "portfolio.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
					link: "https://github.com/VirtualButFake/portfolio",
				},
			],
		},
		{
			title: "FusionComponents",
			description:
				"A collection of 31 components for Fusion, using Tailwind colors, the Lucide icon set and a custom theming engine. This project took around half a year to realize, and was a great learning experience.",
			stack: ["Fusion", "Luau"],
			image: "fusioncomponents.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
					link: "https://github.com/virtualbutfake/fusion-components",
				},
				{
					text: "View documentation",
					class: "transition-self hover:ring-primary-500 dark:bg-primary-400/20 hover:dark:bg-primary-400/40",
					link: "https://docs.tijne.net/fusioncomponents",
				},
			],
		},
		{
			title: "VFX Editor",
			description:
				"An all-in-one VFX editor for Roblox, built with Fusion and FusionComponents. Overhauls and reimagines native features of Roblox Studio, optimizing them for efficiency and ease of use.",
			stack: ["Fusion", "Luau"],
			image: "vfxeditor.png",
			buttons: [
				{
					text: "GitHub",
					icon: "simple-icons:github",
					class: "transition-self hover:ring-primary-500",
					link: "https://github.com/virtualbutfake/vfx-editor",
				},
				{
					text: "Roblox DevForum Post",
					icon: "simple-icons:roblox",
					class: "transition-self hover:ring-primary-500",
					link: "https://devforum.roblox.com/t/3103467",
				},
			],
		},
	],
	skills: {
		languages: [
			{
				name: "Luau",
				icon: "luau",
				iconClass: "mb-0 fill-[#00A2FF]",
				link: "https://luau-lang.org/",
			},
			{
				name: "TypeScript",
				icon: "simple-icons:typescript",
				iconClass: "mb-0 text-[#00A2FF]",
				divClass: "bg-[#323330]",
			},
			{
				name: "JavaScript",
				icon: "simple-icons:javascript",
				iconClass: "mb-0 text-[#fae034] dark:text-[#F0DB4F]",
				divClass: "bg-[#323330]",
			},
			{
				name: "C#",
				icon: "simple-icons:csharp",
				iconClass: "mb-0 text-[#9B4F96]",
			},
			{
				name: "C++",
				icon: "simple-icons:cplusplus",
				iconClass: "mb-0 text-[#5E97D0] dark:text-[#0671c2]",
			},
		],
		frameworks: [
			{
				name: "Nuxt",
				icon: "simple-icons:nuxtdotjs",
				iconClass: "mb-0 text-emerald-500 dark:text-[#00C58E]",
			},
			{
				name: "Vue",
				icon: "simple-icons:vuedotjs",
				iconClass: "mb-0 text-green-600 dark:text-[#41B883]",
			},
			{
				name: "Tailwind CSS",
				icon: "simple-icons:tailwindcss",
				iconClass: "mb-0 text-[#38bdf8] dark:text-[#38B2AC]",
			},
			{
				name: "React",
				icon: "simple-icons:react",
				iconClass: "mb-0 text-[#087EA4] dark:text-[#149ECA]",
			},
			{
				name: "MongoDB",
				icon: "simple-icons:mongodb",
				iconClass: "mb-0 text-[#4DB33D] dark:text-[#4DB33D]",
			},
			{
				name: "MySQL",
				icon: "simple-icons:mysql",
				iconClass: "mb-0 text-[#4479A1] dark:text-[#4479A1]",
			},
			{
				name: "Knex",
				icon: "simple-icons:knexdotjs",
				iconClass: "mb-0 text-[#E16426] dark:text-[#E16426]",
			},
			{
				name: "PostgreSQL",
				icon: "simple-icons:postgresql",
				iconClass: "mb-0 text-[#336791] dark:text-[#336791]",
			},
			{
				name: "Sequelize",
				icon: "simple-icons:sequelize",
				iconClass: "mb-0 text-[#52B0E7] dark:text-[#52B0E7]",
			},
			{
				name: "Express",
			},
			{
				name: "Fusion",
				icon: "fusion",
				iconClass: "mb-0 text-gray-600 dark:text-white",
				link: "https://elttob.uk/Fusion/0.2/",
			},
			{
				name: "Roact",
				link: "https://github.com/Roblox/roact/",
			},
			{
				name: "React-Lua",
				link: "https://github.com/roblox/react-lua",
			},
			{
				name: "Rodux",
				link: "https://github.com/Roblox/rodux",
			},
		],
		tooling: [
			{
				name: "Git",
				icon: "simple-icons:git",
				iconClass: "mb-0 text-[#F94E28] dark:text-[#F05032]",
			},
			{
				name: "Figma",
				icon: "devicon:figma",
				iconClass: "mb-0",
			},
			{
				name: "Docker",
				icon: "simple-icons:docker",
				iconClass: "mb-0 text-[#2496ED] dark:text-[#2496ED]",
			},
			{
				name: "NodeJS",
				icon: "simple-icons:nodedotjs",
				iconClass: "mb-0 text-[#339933] dark:text-[#339933]",
			},
			{
				name: "Rojo",
				icon: "rojo",
				iconClass: "mb-0 text-red-500 dark:text-[#DA2420]",
			},
			{
				name: "roblox-ts",
				icon: "roblox-ts",
				iconClass: "mb-0 text-[#E2241A]",
			},
			{
				name: "Lune",
				icon: "lune",
				iconClass: "mb-0 text-[#c848e9]",
			},
		],
	},
});
