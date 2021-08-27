<svelte:head>
	<title>Shadofer - About Me</title>
</svelte:head>

<script>
	// Animations
	import {blur} from 'svelte/transition';

	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<h1 class='top logo' on:click={() => navigate('/')}>Shadofer</h1>

<div in:blur>
	<h1 class='top-text'>About Me</h1>

	<div class='avatar-container'>
		<img class='avatar' src='../../images/shadofer-avatar.png' alt='Shadofer pfp'/>

		<div class='avatar-descriptors-container'>
			<h1 class='avatar-descriptor'>Username: Shadofer</h1>
			<h1 class='avatar-descriptor'>Age: 16</h1>
			<h1 class='avatar-descriptor'>Country: Greece</h1>
			<h1 class='avatar-descriptor'>Hobbies: Gaming, Programming</h1>
			<h1 class='avatar-descriptor'>Knowledge in: Python, Java, C++</h1>
		</div>
	</div>

	<h1 class='top-text'>Socials</h1>

	<div class='socials-container'>
		<img class='socials-icon' src='../../images/discord.png' alt='Discord icon'/>
		<h1 class='socials-text'>Shadofer#0001</h1>
	</div>

	<div class='socials-container'>
		<img class='socials-icon' src='../../images/github.png' alt='Github icon'/>
		<h1 class='socials-text'><a href='https://github.com/Shadofer'>Shadofer</a></h1>
	</div>

</div>