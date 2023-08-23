<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let title = 'Karten';
	const someFunction = () => {
		title = 'more karten';
	};
</script>

<div class="grid grid-cols-12 px-4 gap-4">
	<h1>{title}</h1>
	<button on:click={someFunction}>Change Title</button>
	<p>{data.post.title}</p>
	<p>{data.post.content}</p>
</div>
