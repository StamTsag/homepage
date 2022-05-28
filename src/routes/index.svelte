<script lang="ts">
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
{/if}
