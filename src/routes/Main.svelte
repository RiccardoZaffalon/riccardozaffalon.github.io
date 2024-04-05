<script>
	import icon from '../assets/translate.svg?raw';
	export let data;
</script>

{#if data.lang === 'it'}
	<a href="/" class="lang">{@html icon} english</a>
{:else}
	<a href="/it" class="lang">{@html icon} italiano</a>
{/if}

<header>{@html data.intro}</header>

<section class="copy">
	{@html data.bio}
</section>

<footer>
	{@html data.footer}

	<slot name="privacy" />
</footer>
