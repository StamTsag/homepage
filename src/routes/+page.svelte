<script lang="ts">
    import Contact from '$lib/Contact.svelte';
    import Projects from '$lib/Projects.svelte';
    import Top from '$lib/Top.svelte';
    import TopAbout from '$lib/TopAbout.svelte';
    import Journey from '$lib/Journey.svelte';
    import { onMount } from 'svelte';
    import MusicPlayer from '$lib/MusicPlayer.svelte';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

<svelte:head>
    <title>Shadofer</title>
</svelte:head>

{#if mountReady}
    <div>
        <Top />
        <TopAbout />
        <Journey />
        <Projects />
        <Contact />
        <MusicPlayer />
    </div>
{/if}
