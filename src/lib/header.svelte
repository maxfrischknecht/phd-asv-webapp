<script>
	// export let title = 'Empty Prop';

	// Get the current route an format it from "/about" to "About"
	// save it in a reactive variable with $:
	import { page } from '$app/stores';
	$: pageTitle = $page.url.pathname.split('/')[1];

	let expanded = false;
	function toggleHeight() {
		expanded = !expanded;
	}

    import { fly } from 'svelte/transition'
</script>

<header class="fixed h-16 top-0 left-0 right-0">
	<div class="px-4 pt-3 pb-3 w-100 bg-darksurface border-surface border-b">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-4">
				<a href="/" class="text-md text-surface">D–ASV</a>
				<p class="text-sm-mono text-surface font-monospace">→ Zugang</p>
				<p class="text-md text-surface capitalize">{pageTitle}</p>
			</div>
			<button on:click={toggleHeight}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="14"
					viewBox="0 0 26 14"
					fill="none"
				>
					<path d="M1 1L13 13L25 1" stroke="#F4F4F4" />
				</svg>
			</button>
		</div>
	</div>
    {#if expanded}
	<div transition:fly class="w-100 bg-darksurface grid grid-cols-12">
		<nav class="col-span-4 p-4">
            <h2 class="font-monospace text-sm-mono text-surface pb-2">Zugang</h2>
			<a class="text-md text-grey hover:text-surface block border-grey border-t border-l border-r px-2 py-1" href="/fragen">Fragen</a>
			<a class="text-md text-grey hover:text-surface block border-grey border-t border-l border-r px-2 py-1" href="/karten">Karten</a>
			<a class="text-md text-grey hover:text-surface block border-grey border px-2 py-1" href="/objekte">Objekte</a>
		</nav>
	</div>
    {/if}
</header>

