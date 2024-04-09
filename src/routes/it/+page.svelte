<script>
	import Main from '../Main.svelte';
	export let data;
</script>

<svelte:head>
	<title>Riccardo Zaffalon — Frontend web developer</title>
	<meta
		name="description"
		content="Sviluppatore frontend con oltre 7 anni di esperienza specializzato nel costruire interfacce web veloci, affidabili, e centrate sull'utente, do valore alla semplicità e all'inclusività."
	/>
</svelte:head>

<Main {data}>
	<p slot="privacy">
		<small
			>Sono impegnato nella trasparenza e nel rispetto della legislazione dell'Unione Europea in
			materia di privacy; questo sito web non raccoglie né imposta alcun cookie.</small
		>
	</p>
</Main>
