<template>
	<div
		class="transition-self hover:border-primary-400 group flex max-w-[500px] flex-col gap-2 rounded-md border border-gray-400 bg-white/50 p-2 hover:bg-white/20 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-950/20"
	>
		<div
			class="flex-l flex flex-col place-items-start justify-center gap-4 sm:flex-row"
		>
			<div v-if="item.image">
				<img
					:src="`/images/${item.image}`"
					class="h-min w-[500px] rounded-md border border-gray-400 object-contain shadow dark:border-gray-800"
					alt="Project Image"
				/>
			</div>
			<div>
				<h3
					class="group-hover:text-primary-700/70 group-hover:dark:text-primary-300 transition-self text-lg font-semibold text-gray-900 dark:text-white"
				>
					{{ item.title }}
				</h3>
				<p class="text-base text-gray-600 dark:text-gray-400">
					{{ item.description }}
				</p>
			</div>
		</div>
		<div class="flex-l flex flex-row flex-wrap gap-1">
			<UButton
				v-for="button in item.buttons"
				:class="button.class"
				:to="button.link"
				color="gray"
				target="_blank"
			>
				<Icon v-if="button.icon" :name="button.icon" />
				{{ button.text }}
			</UButton>
		</div>
		<div
			class="flex-l flex select-none flex-row flex-wrap place-items-center items-center gap-1"
		>
			<UtilBadge
				v-for="stackItem in item.stack"
				class="px-1"
				:text="stackItem"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		item: {
			type: Object,
			default: () => ({}),
		},
	});
</script>
