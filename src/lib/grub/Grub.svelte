<script>
    import { fade } from 'svelte/transition';
    import { showGrub } from '../stores';
    import GrubTimer from './GrubTimer.svelte';
    import GrubOptions from './GrubOptions.svelte';
</script>

{#if $showGrub}
    <div in:fade={{ duration: 250 }} out:fade={{ duration: 125 }} class="grub">
        <GrubTimer />
        <GrubOptions />
    </div>
{/if}

<style>
    .grub {
        background-image: url('/images/grub/background.png');
        width: 100vw;
        height: 100vh;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        cursor: none;
    }
</style>
