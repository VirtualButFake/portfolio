<!-- This component exists purely to not repeat classes and to easily see what elements are for gradient backgrounds. -->
<template>
	<div
		class="animate-blur pointer-events-none z-[-1]"
		:class="animate ? 'opacity-0' : opacity"
		v-motion="animate || undefined"
		:initial="animate && initial || undefined"
		:visibleOnce="animate && visible || undefined"
	/>
</template>
<script setup lang="ts">
	const props = defineProps({
		animate: {
			type: Boolean,
			default: false,
		},
		opacity: {
			type: [String, Number],
			default: "opacity-10",
		},
	});

	const initial = ref({
		opacity: 0,
	});

	const opacityNumber = computed(() => {
		if (typeof props.opacity == "number") {
			return props.opacity;
		}

		const split = props.opacity.split("-");

		if (split.length == 2) {
			return Number(split[1]) / 100;
		}

		return null;
	});

	const visible = ref({
		opacity: opacityNumber,
		transition: {
			duration: 1000,
			type: "keyframes",
			ease: "easeOut",
		},
	});
</script>
