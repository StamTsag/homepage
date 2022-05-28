<script lang="ts">
    import { goto } from '$app/navigation';
    import 'styles/__error.css';
    import { onMount } from 'svelte';

    let mountReady = false;

    onMount(() => {
        mountReady = true;
    });
</script>

{#if mountReady}
    <div class="error-container">
        <h1>An oopsie occured!</h1>

        <button on:click={() => goto('/')}>Go back</button>
    </div>
{/if}
