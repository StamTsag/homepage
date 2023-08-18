<script lang="ts">
    import AppContainer from '../AppContainer.svelte';
    import { openedApps } from '../stores';

    let iframeElement: HTMLIFrameElement;
</script>

{#if $openedApps.includes('Brave')}
    <AppContainer
        title={iframeElement?.contentDocument?.title || 'Google'}
        appName="Brave"
        fullscreen={true}
    >
        <iframe
            bind:this={iframeElement}
            src="https://google.com/webhp?igu=1"
            title="Google"
            frameborder={0}
        />
    </AppContainer>
{/if}

<style>
    iframe {
        width: 100%;
        height: 95%;
        overflow: hidden;
    }
</style>
