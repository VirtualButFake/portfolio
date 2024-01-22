<template>
	<div class="flex">
		<div
			class="gradient-topbottom transition-self ml-3 flex-1 border-l border-gray-400/50 dark:border-gray-800"
		/>
		<ol class="relative">
			<ExperienceTimelineItem
				v-for="data in list"
				list-class="mb-2 ml-4"
				class="border-gray-500 bg-gray-400 dark:border-gray-600 dark:bg-gray-800"
				:isVisible="visibleElement"
				@showThis="showThis"
				@showAll="showAll"
				:item="data"
			/>
		</ol>
	</div>
</template>
<script setup>
	defineProps({
		list: {
			type: Array,
			default: [],
		},
	});

	const visibleElement = ref(null);

	function showThis(arg) {
		visibleElement.value = arg;
	}

	function showAll() {
		visibleElement.value = null;
	}
</script>
