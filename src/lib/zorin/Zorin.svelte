<script lang="ts">
    import { scale } from 'svelte/transition';
    import { showZorin } from '../stores';
    import ZorinTaskbar from './ZorinTaskbar.svelte';
    import ZorinDesktop from './ZorinDesktop.svelte';
</script>

{#if $showZorin}
    <div in:scale={{ duration: 500, start: 0.5, opacity: 1 }} class="zorin">
        <ZorinDesktop />
        <ZorinTaskbar />
    </div>
{/if}
