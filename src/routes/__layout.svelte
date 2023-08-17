<script lang="ts">
    import { onMount } from 'svelte';
    import '../app.css';
    import Main from 'src/lib/Main.svelte';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

{#if mountReady}
    <Main />
{/if}

<style>
    :global(body) {
        background-color: rgb(10, 10, 10);
    }

    :global(h1) {
        color: #ffffff;
    }
</style>
