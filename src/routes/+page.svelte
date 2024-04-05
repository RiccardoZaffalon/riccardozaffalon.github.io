<script>
	import Main from './Main.svelte';
	export let data;
</script>

<svelte:head>
	<title>Riccardo Zaffalon — Frontend web developer</title>
</svelte:head>

<Main {data}>
	<p slot="privacy">
		<small
			>I’m committed to transparency and compliance with European Union's legislation regarding
			privacy; this website does not collect or set any cookie.</small
		>
	</p>
</Main>
