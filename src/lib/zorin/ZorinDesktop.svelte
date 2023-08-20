<script lang="ts">
    import { onMount } from 'svelte';

    let hours: number;
    let minutes: number;

    interface DesktopShortcut {
        title: string;
        url: string;
        noImage?: boolean;
    }

    let shortcuts: DesktopShortcut[] = [
        {
            title: 'Fronvo',
            url: 'https://github.com/Fronvo',
        },

        {
            title: 'TowerVerse',
            url: 'https://github.com/TowerVerse',
            noImage: true,
        },

        {
            title: 'Ezier',
            url: 'https://github.com/Ezier-project',
            noImage: true,
        },

        {
            title: 'Dogey',
            url: 'https://github.com/Shadofer/dogey',
            noImage: true,
        },

        {
            title: 'Youtube Homepage',
            url: 'https://github.com/Shadofer/youtube-homepage',
            noImage: true,
        },

        {
            title: 'Basicpyapi',
            url: 'https://github.com/Shadofer/basicpyapi',
            noImage: true,
        },

        {
            title: 'XMAS Counter',
            url: 'https://github.com/Shadofer/xmas-counter',
        },

        {
            title: 'Spicetify Welcomer',
            url: 'https://github.com/Shadofer/spicetify-welcomer',
            noImage: true,
        },

        {
            title: 'Linux setup',
            url: 'https://github.com/Shadofer/linux-setup',
            noImage: true,
        },
    ];

    function updateHours(): void {
        hours = new Date().getHours();
    }

    function updateMinutes(): void {
        minutes = new Date().getMinutes();
    }

    function openUrl(url: string): void {
        window.open(url, '_blank').focus();
    }

    onMount(() => {
        updateHours();
        updateMinutes();

        setInterval(() => {
            updateHours();
            updateMinutes();
        }, 20000);
    });
</script>

<div class="desktop">
    <h1 id="time">{hours}:{minutes < 10 ? '0' : ''}{minutes}</h1>
    <h1 id="time-2">
        {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
        })}, {new Date().toLocaleDateString('en-us', {
            month: 'long',
        })}
        {new Date().toLocaleDateString('en-us', {
            day: '2-digit',
        })}
    </h1>

    <div class="shortcuts">
        {#each shortcuts as { title, url, noImage }}
            <div on:click={() => openUrl(url)} on:keydown={() => openUrl(url)}>
                {#if noImage}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        ><path
                            fill="white"
                            fill-rule="evenodd"
                            d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172ZM7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM8 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
                            clip-rule="evenodd"
                        /></svg
                    >
                {:else}
                    <img
                        src={`/images/zorin/shortcuts/${title
                            .toLowerCase()
                            .replace(' ', '-')}.png`}
                        draggable={false}
                        alt={title}
                    />{/if}

                <h1>{title}</h1>
            </div>
        {/each}
    </div>
</div>

<style>
    .desktop {
        background-image: url('/images/zorin/wallpaper.jpg');
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        z-index: 0;
        user-select: none;
    }

    #time {
        position: fixed;
        top: -140px;
        left: 60px;
        bottom: 0;
        height: fit-content;
        margin: auto;
        font-size: 5rem;
        font-family: Manrope;
        font-weight: 200;
    }

    #time-2 {
        position: fixed;
        top: 10px;
        left: 60px;
        bottom: 0;
        height: fit-content;
        margin: auto;
        font-size: 3rem;
        font-family: Manrope;
        font-weight: 200;
    }

    .shortcuts {
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        top: 0;
        left: 0;
        right: 200px;
        bottom: 0;
        width: max-content;
        max-width: 600px;
        height: fit-content;
        margin: auto;
    }

    .shortcuts div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        width: 64px;
        height: min-content;
    }

    .shortcuts div:hover {
        background: rgb(184, 218, 248, 0.3);
    }

    .shortcuts div img,
    .shortcuts div svg {
        width: 48px;
        height: 48px;
        border-radius: 10px;
    }

    .shortcuts div h1 {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 200;
        text-align: center;
        text-shadow: 0 0 10px black;
    }

    @media screen and (max-width: 1200px) {
        #time {
            top: 0;
            height: 100%;
        }

        #time-2 {
            top: 175px;
            height: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        #time {
            font-size: 3rem;
            left: 25px;
            text-shadow: 0 0 3px black;
        }

        #time-2 {
            font-size: 2rem;
            left: 25px;
            top: 100px;
            text-shadow: 0 0 3px black;
        }

        .shortcuts {
            right: 0;
            max-width: 350px;
            justify-content: center;
        }

        .shortcuts div img,
        .shortcuts div svg {
            width: 36px;
            height: 36px;
        }

        .shortcuts div h1 {
            font-size: 0.7rem;
        }
    }
</style>
