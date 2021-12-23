<svelte:head>
	<title>Shadofer Homepage</title>
</svelte:head>

<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mountReady = false;

	onMount(() => {
		mountReady = true;
	});
</script>

{#if mountReady}
	<div in:fade>
		<div class='content'>
			<button class='glow' on:click={() => goto('projects')}>My projects</button>
		</div>

		<div class='content'>
			<button class='glow' on:click={() => goto('aboutme')}>About Me</button>
		</div>

	</div>
{/if}
