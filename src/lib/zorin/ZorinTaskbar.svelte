<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { showTaskbar } from '../stores';

    let hours: number;
    let minutes: number;
    let monitorMouse = false;

    function updateHours(): void {
        hours = new Date().getHours();
    }

    function updateMinutes(): void {
        minutes = new Date().getMinutes();
    }

    onMount(() => {
        updateHours();
        updateMinutes();

        document.onmousemove = (ev) => {
            if (!monitorMouse) return;

            if (!$showTaskbar) {
                if (document.body.clientHeight - ev.clientY < 10) {
                    $showTaskbar = true;
                } else {
                    $showTaskbar = false;
                }
            } else {
                if (document.body.clientHeight - ev.clientY < 90) {
                    $showTaskbar = true;
                } else {
                    setTimeout(() => {
                        $showTaskbar = false;
                    }, 500);
                }
            }
        };

        setTimeout(() => {
            monitorMouse = true;
        }, 2000);

        setInterval(() => {
            updateHours();
            updateMinutes();
        }, 10000);
    });
</script>

{#if $showTaskbar}
    <div class="taskbar" transition:fly={{ y: 64, duration: 200, opacity: 1 }}>
        <div>
            <img
                src="/images/zorin/apps/brave.png"
                draggable={false}
                alt="Brave"
            />
        </div>

        <div>
            <img
                src="/images/zorin/apps/vscode.png"
                draggable={false}
                alt="VSCode"
            />
        </div>

        <div>
            <img
                src="/images/zorin/apps/fronvo.png"
                draggable={false}
                alt="Fronvo"
            />
        </div>

        <div>
            <img
                src="/images/zorin/apps/discord.png"
                draggable={false}
                alt="Discord"
            />
        </div>

        <div>
            <img
                src="/images/zorin/apps/spotify.png"
                draggable={false}
                alt="Spotify"
            />
        </div>

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
        padding-left: 39%;
        padding-right: 20px;
        user-select: none;
    }

    .taskbar div {
        display: flex;
        align-items: center;
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
</style>
