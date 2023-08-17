<script>
    import { fade } from 'svelte/transition';
    import { showGrub, showWelcomer } from '../stores';

    $showWelcomer = true;

    setTimeout(() => {
        $showWelcomer = false;

        setTimeout(() => {
            $showGrub = true;
        }, 1500);
    }, 2000);
</script>

{#if $showWelcomer}
    <h1 out:fade={{ duration: 500 }}>Shadofer</h1>
{/if}

<style>
    h1 {
        font-size: 2.5rem;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        height: fit-content;
        width: max-content;
        font-family: Manrope;
        font-weight: 200;
    }
</style>
