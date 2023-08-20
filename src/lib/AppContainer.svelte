<script lang="ts">
    import { scale } from 'svelte/transition';
    import { openedApps, type Apps } from './stores';

    export let title: string;
    export let appName: Apps;
    export let fullscreen = false;

    function closeApp(): void {
        if (!$openedApps.includes(appName)) return;

        $openedApps.splice($openedApps.indexOf(appName), 1);
        $openedApps = $openedApps;
    }
</script>

<div
    class={`container ${fullscreen ? 'fullscreen' : ''}`}
    transition:scale={{ start: 0.85, duration: 450, opacity: 0 }}
>
    <div class={`top`}>
        <h1>{title}</h1>

        <svg
            on:click={closeApp}
            on:keydown={closeApp}
            id="close"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            ><path
                d="m5 4q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4 0 0.1 0 0.2 0 0.1 0.1 0.2 0 0.1 0.1 0.2 0 0 0.1 0.1l2.3 2.3-2.3 2.3q-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2-0.1 0.1-0.1 0.2 0 0.1 0 0.2 0 0.2 0.1 0.4 0.1 0.2 0.2 0.3 0.1 0.2 0.3 0.2 0.2 0.1 0.4 0.1 0.1 0 0.2 0 0.1 0 0.2-0.1 0.1 0 0.2-0.1 0 0 0.1-0.1l2.3-2.3 2.3 2.3q0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.1 0.1 0 0.2 0 0.2 0 0.4-0.1 0.2 0 0.3-0.2 0.1-0.1 0.2-0.3 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.1-0.1-0.2 0-0.1-0.1-0.2 0 0-0.1-0.1l-2.3-2.3 2.3-2.3q0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0-0.1 0-0.2 0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1-0.1 0-0.2 0-0.1 0-0.2 0.1-0.1 0-0.2 0.1 0 0-0.1 0.1l-2.3 2.3-2.3-2.3q0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-0.1-0.1-0.1-0.1-0.1-0.1-0.2-0.1-0.1-0.1-0.2-0.1-0.1 0-0.2 0z"
            /></svg
        >
    </div>

    <slot />
</div>

<style>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 64px;
        margin: auto;
        width: max-content;
        height: fit-content;
        min-width: 500px;
        min-height: 700px;
        background: rgb(20, 20, 20);
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 10px rgb(10, 10, 10);
    }

    .fullscreen {
        width: 100vw;
        height: 100%;
        border-radius: 0px;
        bottom: 0;
    }

    .top {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(19, 24, 32);
        cursor: default;
        user-select: none;
        padding: 5px;
        margin-right: 5px;
    }

    h1 {
        margin: 0;
        font-family: Manrope;
        font-weight: 600;
        font-size: 1rem;
        margin-left: 48%;
        flex: 1;
    }

    .fullscreen h1 {
        visibility: hidden;
    }

    svg {
        width: 17px;
        height: 17px;
        padding: 3px;
        fill: rgb(184, 218, 248);
        border-radius: 20px;
        margin-left: 3px;
    }

    svg:hover {
        background: rgb(154, 170, 169, 0.2);
    }

    svg:active {
        background: rgba(148, 202, 199, 0.2);
    }

    #close:hover {
        fill: rgb(219, 75, 75);
        background: rgba(247, 139, 139, 0.2);
    }

    #close:active {
        background: rgba(233, 107, 107, 0.2);
    }

    @media screen and (max-width: 800px) {
        .container {
            min-width: none;
            min-height: none;
            height: 100vh;
            bottom: 0;
            width: 100vw;
        }
    }
</style>
