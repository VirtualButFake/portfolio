<template>
	<li
		ref="root"
		class="hover:border-primary-500 transition-self ml-3 rounded-md border border-transparent p-2 dark:hover:bg-gray-800/50"
		@mouseover="$emit('showThis', $el)"
		@mouseleave="$emit('showAll')"
	>
		<div
			v-bind="$attrs"
			class="transition-self absolute -left-2 mt-1.5 h-4 w-4 rounded-full border"
		/>
		<ExperienceTimelineContent
			:isNull="isNull"
			:isSelected="isSelected"
			:item="item"
		/>
	</li>
</template>
<script setup lang="ts">
	defineOptions({
		inheritAttrs: false,
	});

	const props = defineProps({
		isVisible: {
			default: null,
		},
		item: {
			type: Object,
			default: () => ({}),
		},
	});
	defineEmits(["showThis", "showAll"]);

	const root = ref(null);

	const isNull = computed(() => {
		return props.isVisible == null;
	});

	const isSelected = computed(() => {
		return props.isVisible === root.value;
	});
</script>
