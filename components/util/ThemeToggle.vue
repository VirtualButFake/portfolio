<template>
	<ClientOnly>
		<UButton
			:icon="isDark ? 'i-ic-round-wb-sunny' : 'i-ic-round-dark-mode'"
			color="gray"
			variant="ghost"
			aria-label="Theme"
			@click="isDark = !isDark"
			:class="class"
			square
		/>
		<template #fallback>
			<!-- this will be rendered on server side -->
			<div class="h-7 w-7 p-1">
				<UIcon class="h-5 w-5 text-gray" name="i-ic-round-wb-sunny" />
			</div>
		</template>
	</ClientOnly>
</template>

<script setup lang="ts">
	const mode = useColorMode();

	const isDark = computed({
		get: () => mode.value === "dark",
		set: (value) => (mode.value = value ? "dark" : "light"),
	});

	defineProps({
		class: {
			type: String,
			default: () => "",
		},
	});
</script>
