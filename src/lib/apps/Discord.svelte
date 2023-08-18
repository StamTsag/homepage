<script lang="ts">
    import AppContainer from '../AppContainer.svelte';
    import { openedApps } from '../stores';

    let iframeElement: HTMLIFrameElement;
</script>

{#if $openedApps.includes('Discord')}
    <AppContainer
        title={iframeElement?.contentDocument?.title || 'Discord'}
        appName="Discord"
    >
        <iframe
            bind:this={iframeElement}
            src="https://discord.com/login/webhp?igu=1"
            title="Discord"
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
