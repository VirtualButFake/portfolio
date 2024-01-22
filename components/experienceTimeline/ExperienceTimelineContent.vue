<template>
	<div
		class="transition-everything duration-200"
		:class="{
			'opacity-40 dark:opacity-60': !isNull && !isSelected,
			'translate-x-2': isSelected,
		}"
	>
		<time
			class="transition-self mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
			:class="{
				'dark:text-primary-300 text-primary-500': isSelected,
			}"
		>
			{{ item.date }}
		</time>
		<h3
			class="transition-self text-wrap text-lg font-semibold text-gray-900 dark:text-white"
		>
			{{ item.title }}
			<a
				target="_blank"
				class="transition-self hover:text-primary-400 underline underline-offset-2 transition-colors"
				:href="item.link"
			>
				{{ item.highlight }}
			</a>
		</h3>
		<p
			class="transition-self mb-2 text-sm font-normal text-gray-600 sm:mr-24 md:mr-48 lg:mr-auto lg:w-10/12 dark:text-gray-400"
		>
			{{ item.description }}
		</p>
		<div
			class="flex-l mb-2 flex select-none flex-row flex-wrap place-items-center items-center gap-1"
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
		isSelected: {
			type: Boolean,
			default: false,
		},
		isNull: {
			type: Boolean,
			default: false,
		},
		item: {
			type: Object,
			default: () => ({}),
		},
	});
</script>
