<!-- inspiration from https://github.com/nuxt/ui/blob/0976833753cd2140649bc324f53a263d4e09ecff/docs/components/home/HomeTetris.vue -->
<template>
	<div
		ref="containerElement"
		class="gradient-mask-b-60 absolute inset-0 z-[-1] grid w-screen auto-rows-[--cell] justify-center overflow-hidden"
		:style="{
			'--cell': `${gridSize}px`,
			'--rows': rows - 1,
		}"
	>
		<div
			v-for="row in grid"
			class="grid flex-1 auto-cols-[--cell] grid-flow-col"
		>
			<div
				v-for="cell in row"
				class="border-primary-500 relative w-[--cell] border border-x opacity-20 dark:border-gray-400"
			>
				<div
					class="bg-primary-400 dark:bg-primary-500 absolute inset-0 opacity-0 transition-opacity duration-1000"
					:class="[cell && ' opacity-100']"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	const containerElement = ref(null);
	const { width, height } = useElementSize(containerElement);

	const grid = ref([]);
	const rows = ref(0);
	const columns = ref(0);

	const gridSize = 90;

	function createGrid() {
		grid.value = [];

		for (let i = 0; i <= rows.value; i++) {
			grid.value.push(new Array(columns.value).fill(false));
		}
	}

	function calculateGrid() {
		rows.value = Math.ceil(height.value / gridSize);
		columns.value = Math.ceil(width.value / gridSize);

		createGrid();
	}

	watch([width, height], () => {
		calculateGrid();
	});

	onMounted(() => {
		setTimeout(() => {
			calculateGrid();
		}, 1000);

		setInterval(() => {
			// color a random cell
			const row = Math.floor(Math.random() * rows.value);
			const column = Math.floor(Math.random() * columns.value);

			grid.value[row][column] = true;

			setTimeout(() => {
                if (grid.value[row] == null) return;
                
				grid.value[row][column] = false;
			}, 2000);
		}, 250);
	});
</script>
