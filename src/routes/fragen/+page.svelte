<script>
	export let data;
	import Default from '$lib/fragen/default.svelte';
</script>

<div class="pt-32 px-4">
	<Default items={data.posts} />
</div>
