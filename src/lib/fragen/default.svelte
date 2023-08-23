<script>
	export let items;
</script>

<div class="columns-3">
	{#each items as item}
		<div class="p-4 bg-surface mb-4">
			<p class="font-sans text-md">{item['ASV-Fragen_(Kurzform): \n']}</p>
		</div>
	{/each}
</div>
