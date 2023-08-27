<script lang="ts">
    import { fade } from 'svelte/transition';
    import { showWindows } from '../stores';
    import WindowsTaskbar from './WindowsTaskbar.svelte';
    import WindowsDesktop from './WindowsDesktop.svelte';
</script>

{#if $showWindows}
    <div in:fade={{ duration: 500 }} class="windows">
        <WindowsDesktop />
        <WindowsTaskbar />
    </div>
{/if}
