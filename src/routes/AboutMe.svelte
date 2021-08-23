<svelte:head>
	<title>Shadofer - About Me</title>
</svelte:head>

<script>
	// SMUI
	import {Icon} from '@smui/common';
	import Img from '@smui/common/Img.svelte';

	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>


<div class='top'>
	<Icon component={Img} src='../../images/homepage-top-image.png' on:click={() => navigate('/')}></Icon>
</div>

<h1 class='top-text'>About Me</h1>

<div class='avatar-container'>
	<Icon class='avatar' component={Img} src='../../images/shadofer-avatar.png'/>

	<div class='avatar-descriptors-container'>
	<h1>Username: Shadofer</h1>
	<h1>Age: 16</h1>
	<h1>Country: Greece</h1>
	<h1>Hobbies: Gaming, Programming</h1>
	<h1>Knowledge in: Python, Java, C++</h1>
	</div>
</div>

<h1 class='top-text'>Socials</h1>

<div class='socials-container'>
	<Img class='socials-icon' component={Img} src='../../images/discord.png'/>
	<h1 style='color: white; font-size: 25px;'>Shadofer#0001</h1>
</div>

<div class='socials-container'>
	<Img class='socials-icon' component={Img} src='../../images/github.png'/>
	<h1 style='color: white; font-size: 25px;'><a href='https://github.com/Shadofer'>Shadofer</a></h1>
</div>
