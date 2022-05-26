<script lang="ts">
    import Wave from 'src/lib/Wave.svelte';
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
    <Wave waveColor="#ffffff" />

    <div class="center-container">
        <h1>Hello there!</h1>
    </div>
{/if}
