<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

<svelte:head>
    <title>Shadofer Homepage</title>
</svelte:head>

{#if mountReady}
    <div in:fade>
        <div class="center">
            <button class="glow" on:click={() => goto('projects')}
                >My projects</button
            >

            <div />

            <button class="glow" on:click={() => goto('aboutme')}
                >About Me</button
            >
        </div>
    </div>
{/if}
