<template>
	<UButton
		icon="i-ic-round-menu"
		color="gray"
		class="transition-self flex p-1 md:hidden dark:ring-0"
		variant="ghost"
		square
		@click="buttonClicked = !buttonClicked"
	/>
	<USlideover
		v-model="isOpen"
		prevent-close
		:overlay="false"
		:ui="{ wrapper: 'top-[var(--header-height)] -m-px' }"
	>
		<UCard
			class="flex flex-1 flex-col rounded-t-none border-t border-gray-800"
			:ui="{
				body: { base: 'flex-1' },
				ring: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
				header: { padding: 'py-1 pr-2' },
			}"
		>
			<template #header>
				<div class="flex items-center justify-between">
					<h3
						class="text-base font-semibold text-gray-900 dark:text-white"
					>
						Navigation
					</h3>
					<UButton
						class="transition-self"
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						@click="buttonClicked = false"
					/>
				</div>
			</template>
			<div class="pl-2 pr-2">
				<ul class="inline gap-2 font-sans text-sm font-semibold">
					<li
						class="transition-children block"
						v-for="(link, idx) in links"
						:key="link.href"
					>
						<div @click="buttonClicked = false">
							<NavLink
								:to="link.href"
								text-class="font-normal text-sm"
							>
								{{ link.name }}
							</NavLink>
						</div>
						<UDivider
							class="my-3"
							v-if="idx !== links.length - 1"
						/>
					</li>
				</ul>
			</div>
		</UCard>
	</USlideover>
</template>

<script setup lang="ts">
	import { useWindowSize } from "@vueuse/core";

	const { width } = useWindowSize();
	const buttonClicked = ref(false);
	const isOpen = computed(() => {
		if (width.value > 768) {
			buttonClicked.value = false;
			return false;
		}

		return buttonClicked.value && width.value <= 768;
	});

	defineProps({
		links: {
			type: Array<{
				name: string;
				href: string;
			}>,
			default: () => [],
		},
	});
</script>
