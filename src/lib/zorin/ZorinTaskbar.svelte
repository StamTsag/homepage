<script lang="ts">
    import { onMount } from 'svelte';
    import { fly, scale, slide } from 'svelte/transition';
    import { openedApps, showTaskbar, type Apps } from '../stores';

    let hours: number;
    let minutes: number;

    interface AppEntry {
        appName: Apps;
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
    ];

    function updateHours(): void {
        hours = new Date().getHours();
    }

    function updateMinutes(): void {
        minutes = new Date().getMinutes();
    }

    function openApp(appName: Apps): void {
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
    <div class="taskbar" transition:fly={{ y: 64, duration: 200, opacity: 1 }}>
        {#each taskbarApps as { appName }}
            <div
                on:click={() => openApp(appName)}
                on:keydown={() => openApp(appName)}
            >
                <img
                    src="/images/zorin/apps/{appName.toLowerCase()}.png"
                    draggable={false}
                    alt={appName}
                />

                {#if $openedApps.includes(appName)}
                    <span transition:scale={{ duration: 250 }} id="indicator" />
                {/if}
            </div>
        {/each}

        <h1 id="placeholder">placeholder</h1>

        <h1>en</h1>

        <h1>
            {new Date().toLocaleDateString('en-us', {
                day: '2-digit',
            })}
            {new Date().toLocaleDateString('en-us', {
                month: 'short',
            })}
            {hours}:{minutes < 10 ? '0' : ''}{minutes}
        </h1>
    </div>
{/if}

<style>
    .taskbar {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 10px;
        right: 10px;
        left: 10px;
        border-radius: 10px;
        background: rgba(10, 10, 10, 0.4);
        height: 64px;
        padding-left: 38%;
        padding-right: 20px;
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
        margin-left: 5px;
        margin-right: 5px;
    }

    .taskbar div:hover {
        background: rgb(125, 125, 125, 0.2);
    }

    .taskbar div:active {
        background: rgb(130, 130, 130, 0.4);
    }

    img {
        width: 48px;
        height: 48px;
    }

    h1 {
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 0.85rem;
        font-weight: 700;
        color: rgb(182, 233, 233);
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 10px;
        margin-right: 10px;
        height: 56px;
        transition: 150ms;
        border-radius: 10px;
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
        width: 60px;
        height: 3px;
        background: rgb(190, 229, 255);
        transform: translateY(30px);
    }
</style>
