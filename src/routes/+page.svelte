<script>
	export let data;
</script>

<svelte:head>
	<title>Riccardo Zaffalon — Frontend web developer</title>
	<meta
		name="description"
		content="Frontend developer with 7+ years experience specialized in building fast, reliable, and human-centered web interfaces, I value simplicity and inclusivity."
	/>
</svelte:head>

<header>{@html data.header}</header>

<section class="copy">
	{@html data.body}
	<hr />
	{@html data.skills}
</section>

<footer>
	{@html data.footer}
</footer>
