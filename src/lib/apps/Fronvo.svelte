<script lang="ts">
    import AppContainer from '../AppContainer.svelte';
    import { openedApps } from '../stores';

    let iframeElement: HTMLIFrameElement;
</script>

{#if $openedApps.includes('Fronvo')}
    <AppContainer
        title={iframeElement?.contentDocument?.title || 'Fronvo'}
        appName="Fronvo"
    >
        <iframe
            bind:this={iframeElement}
            src="https://fronvo.com"
            title="Fronvo"
            frameborder={0}
        />
    </AppContainer>
{/if}

<style>
    iframe {
        width: 80vw;
        height: 85vh;
        overflow: hidden;
    }
</style>
