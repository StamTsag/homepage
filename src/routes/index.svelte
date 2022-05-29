<script lang="ts">
    import Fab from 'src/lib/FAB.svelte';
    import TopNav from 'src/lib/TopNav.svelte';
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
    <TopNav />

    <Fab />
{/if}
