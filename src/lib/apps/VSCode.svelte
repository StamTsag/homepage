<script lang="ts">
    import AppContainer from '../AppContainer.svelte';
    import { openedApps } from '../stores';

    let iframeElement: HTMLIFrameElement;
</script>

{#if $openedApps.includes('VSCode')}
    <AppContainer
        title={iframeElement?.contentDocument?.title || 'VSCode'}
        appName="VSCode"
    >
        <iframe
            bind:this={iframeElement}
            src="https://vscode.dev/webhp?igu=1"
            title="VSCode"
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
