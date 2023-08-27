<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { openedApps, showTaskbar, type Apps } from '../stores';

    let hours: number;
    let minutes: number;

    interface AppEntry {
        appName: Apps;
        isUrl?: boolean;
        url?: string;
    }

    let taskbarApps: AppEntry[] = [
        {
            appName: 'Brave',
        },
        {
            appName: 'VSCode',
        },
        {
            appName: 'Fronvo',
        },
        {
            appName: 'Discord',
        },
        {
            appName: 'Spotify',
        },
        {
            appName: 'Shadofer',
            isUrl: true,
            url: 'https://github.com/Shadofer',
        },
    ];

    function updateHours(): void {
        hours = new Date().getHours();
    }

    function updateMinutes(): void {
        minutes = new Date().getMinutes();
    }

    function openApp(appName: Apps, isUrl?: boolean, url?: string): void {
        if (isUrl) {
            window.open(url, '_blank');

            return;
        }

        if ($openedApps.includes(appName)) return;

        $openedApps.push(appName);
        $openedApps = $openedApps;
    }

    onMount(() => {
        updateHours();
        updateMinutes();

        setInterval(() => {
            updateHours();
            updateMinutes();
        }, 10000);
    });
</script>

{#if $showTaskbar}
    <div class="taskbar" transition:fade={{ duration: 300 }}>
        {#each taskbarApps as { appName, isUrl, url }}
            <div
                on:click={() => openApp(appName, isUrl, url)}
                on:keydown={() => openApp(appName, isUrl, url)}
            >
                <img
                    src="/images/apps/{appName.toLowerCase()}.png"
                    draggable={false}
                    alt={appName}
                />

                {#if $openedApps.includes(appName)}
                    <span id="indicator" />
                {/if}
            </div>
        {/each}

        <h1 id="placeholder">placeholder</h1>

        <h1>ENG</h1>

        <h1 id="time">
            {new Date().toLocaleDateString('en-us', {
                weekday: 'short',
            })}
            {hours}:{minutes < 10 ? '0' : ''}{minutes}
        </h1>
    </div>
{/if}

<style>
    .taskbar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background: rgb(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        width: 100%;
        height: 48px;
        user-select: none;
        z-index: 1;
    }

    .taskbar div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;
        transition: 75ms;
    }

    .taskbar div:hover {
        background: rgb(125, 125, 125, 0.2);
    }

    .taskbar div:active {
        background: rgb(130, 130, 130, 0.4);
    }

    img {
        width: 28px;
        height: 28px;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0;
        font-size: 0.8rem;
        font-family: sans-serif;
        font-weight: 400;
        color: rgb(182, 233, 233);
        padding-left: 7px;
        padding-right: 7px;
        height: 100%;
        transition: 75ms;
    }

    h1:hover {
        background: rgb(125, 125, 125, 0.2);
    }

    #placeholder {
        visibility: hidden;
        flex: 1;
    }

    #indicator {
        position: fixed;
        width: 45px;
        height: 2px;
        background: rgb(135, 207, 255);
        transform: translateY(23px);
    }

    #time {
        min-width: 75px;
        margin-right: 20px;
    }

    @media screen and (max-width: 1200px) {
        .taskbar {
            padding-left: 20vw;
        }
    }

    @media screen and (max-width: 800px) {
        .taskbar {
            height: 48px;
            padding-left: 0;
            padding-right: 0;
        }

        img {
            width: 26px;
            height: 26px;
        }

        #indicator {
            width: 50px;
            transform: translateY(22px);
        }

        h1 {
            display: none;
        }

        #placeholder {
            display: none;
        }
    }
</style>
