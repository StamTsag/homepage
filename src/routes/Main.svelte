<svelte:head>
	<title>Shadofer - Homepage</title>
</svelte:head>

<script>
	// SMUI
	import {Icon} from '@smui/common';
	import Img from '@smui/common/Img.svelte';

	// Svelte-routing
	import {navigate} from 'svelte-routing';
</script>

<!-- Don't make this clickable, skip div class. -->
<Icon component={Img} src='../../images/homepage-top-image.png'></Icon>

<div class='content'>
	<button class="glow" style='font-size: 45px;' on:click={() => navigate('projects')}>My projects</button>
</div>

<div class='content'>
	<button class="glow" style='font-size: 45px;' on:click={() => navigate('aboutme')}>About Me</button>
</div>
