<svelte:head>
	<title>Shadofer - Homepage</title>
</svelte:head>

<script>
	// Routing
	import { goto } from '$app/navigation';

	// Animations
	import {fade} from 'svelte/transition';
</script>

<div in:fade>
	<div class='content'>
		<button class='glow' on:click={() => goto('projects')}>My projects</button>
	</div>

	<div class='content'>
		<button class='glow' on:click={() => goto('aboutme')}>About Me</button>
	</div>

</div>