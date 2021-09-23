<svelte:head>
	<title>Shadofer - Projects</title>
</svelte:head>

<script>
	// Animations
	import {fade, scale} from 'svelte/transition';
	
	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<h1 class='top logo' on:click={() => navigate('/')}>Shadofer</h1>

<div in:fade>
	<!-- Software development -->
	<h1 class='project-category' style='color: #43d897;'>Software development</h1>

	<div class='project'>
		<h1 class='project-title'><a href='https://github.com/Shadofer/dogey'>Dogey</a></h1>
		<h3 class='project-description'>A pythonic, asynchronous API for the deprecated platform of <a href='https://dogehouse.tv'>dogehouse</a>.</h3>
	</div>

	<!-- Prevent project grouping in one line -->
	<div></div>

	<div class='project'>
		<h1 class='project-title'><a href='https://github.com/Shadofer/basicpyapi'>Basicpyapi</a></h1>
		<h3 class='project-description'>A barebones websocket server & client made in python.</h3>
	</div>

	<!-- Web development-->
	<h1 class='project-category' style='color: #107ee5;'>Web development</h1>

	<div class='project'>
		<div class='project-top'>
			<img in:scale class='project-icon' src='../../favicon.png' alt='Shadofer homepage project icon'/>
			<h1 class='project-title'><a href='https://github.com/Shadofer/homepage'>Shadofer homepage</a></h1>
		</div>

		<h3 class='project-description'>The source code of this site, made with <a href='https://svelte.dev'>Svelte</a>.</h3>
	</div>

	<!-- Game development -->
	<h1 class='project-category' style='color: #e53a10'>Game development</h1>

	<div class='project'>
		<div class='project-top'>
			<img in:scale class='project-icon' src='../../images/towerverse-icon.png' alt='TowerVerse project icon'/>
			<h1 class='project-title'><a href='https://github.com/TowerVerse'>TowerVerse</a></h1>
		</div>

		<h3 class='project-description'>An online, cross-platform, medieval-themed game, where players go against each other in various tag game modes!</h3>
	</div>

</div>