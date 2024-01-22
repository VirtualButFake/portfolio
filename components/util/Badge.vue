<template>
	<NuxtLink
		:to="link"
		target="_blank"
		class="bg-primary-500/40 hover:bg-primary-500/60 transition-self dark:border-primary-600 group flex h-min w-min select-none place-items-center justify-center whitespace-nowrap rounded-xl border border-transparent px-3 py-1 text-xs"
	>
		<div class="pr-2" v-if="icon">
			<nuxt-icon
				v-if="icon.split(':').length === 1"
				:name="icon"
				class="transition-self text-[1.5em]"
				:class="iconClass"
				filled
			/>
			<div class="overflow-hidden rounded-sm" :class="iconBgClass" v-else>
				<Icon :name="icon" :class="iconClass" size="1.5em" />
			</div>
		</div>
		<p
			class="text-primary-600 dark:text-primary-300 text-xs font-semibold leading-5"
		>
			{{ text }}
		</p>
		<div v-if="link" class="pl-1">
			<UIcon
				name="i-mdi-external-link"
				size="12"
				class="text-primary-600 dark:text-primary-300 transition-self group-hover:text-primary-800 dark:group-hover:text-primary-400"
				dynamic
			/>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps({
		text: {
			type: String,
			default: "",
		},
		link: {
			type: String,
			default: undefined,
		},
		icon: {
			type: String,
			default: undefined,
		},
		iconClass: {
			type: String,
			default: "",
		},
		iconBgClass: {
			type: String,
			default: "",
		},
	});
</script>
