<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <title>ChimeInTime | XLayer Technologies Employee Holiday Tracker</title>
  <meta name="description" content="Counting down to your next break? ChimeInTime has got you covered! Track holidays, see what’s coming up, and plan your days off like a boss. Your ultimate holiday sidekick at XLayer Technologies!" />
</svelte:head>

{@render children()}
