<script lang="ts">
    import { onMount } from 'svelte';
    import '../app.css';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

{#if mountReady}
    <slot />
{/if}

<style>
    :global(body) {
        background-color: #f5f7fa;
    }

    :global(h1) {
        color: #000000;
    }
</style>
