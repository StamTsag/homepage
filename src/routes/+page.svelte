<script lang="ts">
    import Contact from '$lib/Contact.svelte';
    import Projects from '$lib/Projects.svelte';
    import Top from '$lib/Top.svelte';
    import TopAbout from '$lib/TopAbout.svelte';
    import Journey from '$lib/Journey.svelte';
    import BlurredBackground from '$lib/BlurredBackground.svelte';
    import { onMount } from 'svelte';
    import { blur } from 'svelte/transition';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

<svelte:head>
    <title>Shadofer</title>
</svelte:head>

{#if mountReady}
    <div in:blur={{ duration: 500, opacity: 0.25, amount: 15 }}>
        <Top />
        <TopAbout />
        <Journey />
        <Projects />
        <Contact />
        <BlurredBackground />
    </div>
{/if}
