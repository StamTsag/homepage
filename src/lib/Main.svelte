<script lang="ts">
    import { onMount } from 'svelte';
    import Brave from './apps/Brave.svelte';
    import Discord from './apps/Discord.svelte';
    import Fronvo from './apps/Fronvo.svelte';
    import VsCode from './apps/VSCode.svelte';
    import Grub from './grub/Grub.svelte';
    import Welcomer from './startup/Welcomer.svelte';
    import { showGrub, showZorin } from './stores';
    import Zorin from './zorin/Zorin.svelte';

    function preloadImages(): void {
        setTimeout(() => {
            const img = new Image();
            img.src = '/images/grub/background.png';

            const img2 = new Image();
            img2.src = '/images/zorin/wallpaper.jpg';
        }, 500);
    }

    onMount(preloadImages);
</script>

<svelte:head>
    <title>Shadofer</title>
</svelte:head>

<div class={`main ${!$showZorin && !$showGrub ? 'loading' : ''}`}>
    <Welcomer />
    <Grub />
    <Zorin />

    <!-- Apps -->
    <Brave />
    <!-- <VsCode /> -->
    <Fronvo />
    <!-- <Discord /> -->
</div>

<style>
    .main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .loading {
        cursor: progress;
    }
</style>
