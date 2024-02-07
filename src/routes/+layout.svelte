<script lang="ts">
    import { onMount } from 'svelte';
    import '../app.css';
    import BlurredBackground from '$lib/BlurredBackground.svelte';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

<BlurredBackground />

<div class="main">
    {#if mountReady}
        <slot />
    {/if}
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    :global(h1) {
        color: #000000;
    }

    .main {
        height: 100vh;
        overflow-y: auto;
    }

    .main::-webkit-scrollbar {
        width: 8px;
    }

    .main::-webkit-scrollbar-track {
        background: transparent;
    }

    .main::-webkit-scrollbar-thumb {
        background: rgb(255, 255, 255, 0.25);
        border-radius: 20px;
    }
</style>
