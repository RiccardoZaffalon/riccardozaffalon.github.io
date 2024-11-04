<script>
	export let book;
</script>

<div class="book">
	<img
		loading="lazy"
		class="book__cover"
		src="//admin.riccardozaffalon.com/assets/{book.cover}"
		alt={book.title}
	/>

	<h4 class="book__title">{book.title}</h4>
	{#if book.subtitle}
		<h5 class="book__subtitle">{book.subtitle}</h5>
	{/if}

	<h6 class="book__author">by {book.author}</h6>
</div>
