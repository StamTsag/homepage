<svelte:head>
	<title>Shadofer - Homepage</title>
</svelte:head>

<script>
	// Animations
	import {fade} from 'svelte/transition';

	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<h1 class='top logo' on:click={() => navigate('/')}>Shadofer</h1>

<div in:fade>
	<div class='content'>
		<button class='glow' on:click={() => navigate('projects')}>My projects</button>
	</div>

	<div class='content'>
		<button class='glow' on:click={() => navigate('aboutme')}>About Me</button>
	</div>

</div>