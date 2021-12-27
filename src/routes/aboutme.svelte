<svelte:head>
	<title>Shadofer - About Me</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let mountReady = false;

	onMount(() => {
		mountReady = true;
	});
</script>

{#if mountReady}
	<div in:fade>
		<div class='center'>
			<div class='avatar-container'>
				<img in:scale class='avatar' src='../../images/discord-pfp.png' alt='Shadofer pfp'/>

				<h1 class='avatar-descriptor'>Username: Shadofer</h1>
				<h1 class='avatar-descriptor'>Age: 16</h1>
				<h1 class='avatar-descriptor'>Country: Greece</h1>
				<h1 class='avatar-descriptor'>Hobbies: Gaming, Programming</h1>
				<h1 class='avatar-descriptor'>Knowledge in: Python, JavaScript, Java, C++</h1>
			</div>

			<div class='avatar-social'>
				<img in:scale class='avatar-social-icon' src='../../images/discord.png' alt='Discord icon'/>
				<h1 class='avatar-social-text' style='padding-right: 30px;'>Shadofer#6681</h1>

				<img in:scale class='avatar-social-icon' src='../../images/github.png' alt='Github icon'/>
				<h1 class='avatar-social-text'><a href='https://github.com/Shadofer'>Shadofer</a></h1>
			</div>
		</div>

	</div>
{/if}
