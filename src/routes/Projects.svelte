<svelte:head>
	<title>Shadofer - Projects</title>
</svelte:head>

<script>
	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<h1 class='top logo' on:click={() => navigate('/')}>Shadofer</h1>

<h1 class='top-text'>My projects</h1>

<h1>Most recent</h1>

<div class='top-project'>
	<div class='project-top'>
		<img class='project-icon' src='../../images/towerverse-icon.png' alt='TowerVerse project icon'/>
		<h1 class='project-top-item'><a href='https://github.com/TowerVerse'>TowerVerse</a></h1>
	</div>

	<h3 class='project-descriptor'>An online, cross-platform, medieval-themed game, where players go against each other in various tag game modes!</h3>
</div>

<h1 style='margin-top: 50px;'>Older projects</h1>

<div class='top-project'>
	<h1 class='project-top-item'><a href='https://github.com/Shadofer/dogey'>Dogey</a></h1>
	<h3 class='project-descriptor'>A pythonic, asynchronous API for the deprecated platform of <a href='https://dogehouse.tv'>dogehouse</a>.</h3>
</div>

<!-- Prevent project grouping in one line -->
<div></div>

<div class='project'>
	<h1 class='project-top-item'><a href='https://github.com/Shadofer/basicpyapi'>Basicpyapi</a></h1>
	<h3 class='project-descriptor'>A barebones websocket server & client made in python.</h3>
</div>
