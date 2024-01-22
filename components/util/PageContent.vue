<template>
	<div
		:class="`relative grid w-full flex-row ${placeItems} ${
			(applyHeight &&
				(underHeader
					? 'h-[calc(100vh-var(--header-height))]'
					: 'h-100vh')) ||
			''
		}`"
	>
		<div
			:class="
				`max-w-screen mx-auto flex flex-col place-items-center items-center justify-center text-center ` +
				(containerClass || 'px-4 py-8')
			"
		>
			<slot />
		</div>
		<slot name="bottom" />
	</div>
</template>

<script setup lang="ts">
	defineProps({
		underHeader: {
			type: Boolean,
			default: false,
		},
		placeItems: {
			type: String,
			default: "place-items-center",
		},
		containerClass: {
			type: String,
			default: "",
		},
		applyHeight: {
			type: Boolean,
			default: true,
		},
	});
</script>
