<svelte:head>
	<title>Shadofer - Projects</title>
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
		<!-- Software development -->
		<h1 class='project-category' style='color: #43d897;'>Software development</h1>

		<div class='project'>
			<div class='project-top'>
				<img in:scale class='project-icon' src='images/fronvo-icon.png' alt='Fronvo project icon'/>
				<h1 class='project-title'><a href='https://github.com/Fronvo'>Fronvo</a></h1>
			</div>

			<h3 class='project-description'>An all-in-one social media free-convo chat app.</h3>
		</div>

		<!-- Prevent project grouping in one line -->
		<div></div>

		<div class='project'>
			<div class='project-top'>
				<a href='https://github.com/shadofer/dogey'><img in:scale style='width: 150px; height: 75px;' src='images/dogey-icon.png' alt='Dogey project icon'/></a>
			</div>
			
			<h3 class='project-description'>A pythonic, asynchronous API for the deprecated platform of <a href='https://dogehouse.tv'>dogehouse</a>.</h3>
		</div>

		<div></div>

		<div class='project'>
			<div class='project-top'>
				<a href='https://github.com/shadofer/basicpyapi'><img in:scale style='width: 250px; height: 75px;' src='images/basicpyapi-icon.png' alt='Basicpyapi project icon'/></a>
			</div>
			
			<h3 class='project-description'>A barebones websocket server & client made in python.</h3>
		</div>

		<!-- Web development-->
		<h1 class='project-category' style='color: #107ee5;'>Web development</h1>

		<div class='project'>
			<div class='project-top'>
				<a href='https://github.com/shadofer/homepage'><img in:scale style='width: 300px; height: 90px;' src='images/homepage-icon.png' alt='Homepage project icon'/></a>
			</div>

			<h3 class='project-description'>The source code of this site, made with <a href='https://svelte.dev'>Svelte</a>.</h3>
		</div>

		<!-- Game development -->
		<h1 class='project-category' style='color: #e53a10'>Game development</h1>

		<div class='project'>
			<div class='project-top'>
				<img in:scale class='project-icon' src='images/towerverse-icon.png' alt='TowerVerse project icon'/>
				<h1 class='project-title'><a href='https://github.com/TowerVerse'>TowerVerse</a></h1>
			</div>

			<h3 class='project-description'>An online, cross-platform, medieval-themed game, where players go against each other in various tag game modes!</h3>
		</div>

	</div>
{/if}
