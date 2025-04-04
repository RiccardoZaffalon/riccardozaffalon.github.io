<script>
	import Book from './components/Book.svelte';

	export let data;
</script>

<svelte:head>
	<title>Riccardo Zaffalon — Frontend web developer</title>
	<meta
		name="description"
		content="Frontend developer with 8+ years experience specialized in building fast, reliable, and human-centered web interfaces, I value simplicity and inclusivity."
	/>
</svelte:head>

<header>
	{@html data.header}
</header>

<section class="copy">
	{@html data.body}
	<hr />
	
	<details>
		<summary>Skills & Technologies</summary>

		<div class="skills">
			{@html data.skills}
		</div>
	</details>
	<hr />

	<h3>Bookshelves</h3>
	<h4>Currently I'm reading</h4>
	<div class="shelf">
		{#each data.books.current as book}
			<Book {book} />
		{/each}
	</div>

	<h4>Lately I enjoyed</h4>
	<div class="shelf">
		{#each data.books.lately as book}
			<Book {book} />
		{/each}
	</div>
</section>

<footer>
	{@html data.footer}
</footer>
