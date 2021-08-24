<svelte:head>
	<title>Shadofer - Homepage</title>
</svelte:head>

<script>
	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<!-- Don't make this clickable as it is the main route, skip top class. -->
<h1 class='logo'>Shadofer</h1>

<div class='content'>
	<button class='glow' on:click={() => navigate('projects')}>My projects</button>
</div>

<div class='content'>
	<button class='glow' on:click={() => navigate('aboutme')}>About Me</button>
</div>
