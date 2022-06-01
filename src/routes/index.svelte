<script lang="ts">
    import AboutMe from 'src/lib/AboutMe.svelte';
    import Fab from 'src/lib/FAB.svelte';
    import Intro from 'src/lib/Intro.svelte';
    import Projects from 'src/lib/Projects.svelte';
    import Socials from 'src/lib/Socials.svelte';
    import TopNav from 'src/lib/TopNav.svelte';
    import { onMount } from 'svelte';
    import { scrollRef } from 'svelte-scrolling';

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

    <div use:scrollRef={'about'}>
        <AboutMe />
    </div>

    <div use:scrollRef={'projects'}>
        <Projects />
    </div>

    <div use:scrollRef={'socials'}>
        <Socials />
    </div>

    <TopNav />

    <Fab />
{/if}
