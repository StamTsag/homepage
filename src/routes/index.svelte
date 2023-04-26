<script lang="ts">
    import AboutMe from 'src/lib/AboutMe.svelte';
    import Intro from 'src/lib/Intro.svelte';
    import Projects from 'src/lib/Projects.svelte';
    import TopNav from 'src/lib/TopNav.svelte';
    import Bottom from 'src/lib/svgs/Bottom.svelte';
    import { onMount } from 'svelte';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

<svelte:head>
    <title>Shadofer Homepage</title>
</svelte:head>

{#if mountReady}
    <Intro />

    <AboutMe />

    <Projects />

    <TopNav />

    <Bottom />
{/if}
