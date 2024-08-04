<template>
	<nav
		class="transition-self sticky top-0 z-40 h-[var(--header-height)] w-full border-b border-gray-200 bg-white bg-opacity-80 px-3 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-950 dark:bg-opacity-80"
	>
		<div
			class="mx-auto flex max-w-7xl flex-row place-items-center justify-between md:px-8"
		>
			<div class="flex items-center lg:flex-1">
				<NuxtLink to="/" class="flex h-max items-center gap-3">
					<nuxt-icon
						name="logo"
						class="transition-self text-primary text-center text-[1.5em]"
					/>
					<p
						class="text-2xl font-bold text-gray-700 dark:text-gray-50"
					>
						Tijn Epema
					</p>
				</NuxtLink>
			</div>
			<NavBar :links="navLinks" />
			<div class="flex items-center justify-end lg:flex-1">
				<UTooltip
					text="View this project on GitHub"
					:popper="{
						offsetDistance: 8,
						arrow: true,
						placement: 'bottom',
						locked: true,
					}"
				>
					<NuxtLink
						to="https://github.com/VirtualButFake/Portfolio"
						target="_blank"
					>
						<UButton
							icon="i-grommet-icons-github"
							color="gray"
							class="transition-self p-1 dark:ring-0"
							variant="ghost"
							square
						/>
					</NuxtLink>
				</UTooltip>
				<UTooltip
					:popper="{
						offsetDistance: 8,
						arrow: true,
						placement: 'bottom',
						locked: true,
					}"
					text="Toggle site theme"
				>
					<UtilThemeToggle class="transition-self p-1 dark:ring-0" />
				</UTooltip>
				<NavMenu :links="navLinks" />
			</div>
		</div>
	</nav>
	<slot />
</template>

<script setup lang="ts">
	const navLinks = ref([
		{
			name: "Home",
			href: { path: "/", hash: "#header" },
			active: false,
		},
		{
			name: "About",
			href: { path: "/", hash: "#about" },
			active: false,
		},
		{
			name: "Experience",
			href: { path: "/", hash: "#experience" },
			active: false,
		},
		{
			name: "Projects",
			href: { path: "/", hash: "#projects" },
			active: false,
		},
	]);

	const { height } = useWindowSize();
	const { y } = useWindowScroll();

	watch(y, () => {
		navLinks.value.forEach((link) => {
			const element = document.getElementById(link.href.hash.slice(1));

			if (!element) return;

			const { top, bottom } = element.getBoundingClientRect();

			if (top <= 200 && bottom >= 200) {
				link.active = true;
			} else {
				link.active = false;
			}
		});
	});

	useSeoMeta({
		title: "Tijn Epema",
		ogTitle: "Tijn Epema",
		description: "My portfolio website.",
		ogDescription: "My portfolio website.",
		themeColor: "#9683EC",
	});

	useHead({
		meta: [
			{
				name: "darkreader-lock",
				content: "true",
			},
		],
	});
</script>
