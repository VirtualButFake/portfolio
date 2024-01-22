<template>
	<NuxtLink
		:to="to"
		:exactHash="true"
		:class="
			(forceActive &&
				`text-primary hover:text-primary-400 dark:hover:text-primary-500 ${textClass}`) ||
			undefined
		"
		:inactive-class="`text-gray-700 hover:text-gray-500 dark:text-gray-50 dark:hover:text-gray-300 ${textClass}`"
		class="text-base"
	>
		<slot />
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		to: {
			type: Object,
			default: "/",
		},
		textClass: {
			type: String,
			default: () => "",
		},
		forceActive: {
			default: false,
			type: Boolean,
		},
	});

	const active = computed(() => {
		console.log(props.forceActive);
		return props.forceActive || $route.hash == props.to;
	});
</script>
