<script lang="ts">
    import { fly } from 'svelte/transition';
    import type { Socials } from 'src/interfaces/socials';
    import Github from './svgs/Github.svelte';
    import Spotify from './svgs/Spotify.svelte';
    import Theme from './Theme.svelte';

    const socials: Socials[] = [
        {
            name: 'Shadofer',
            type: 'github',
            link: 'https://github.com/shadofer',
        },

        {
            name: 'shadofer',
            type: 'spotify',
            link: 'https://open.spotify.com/user/shadofer',
        },

        {
            name: 'Shadofer_RL',
            type: 'instagram',
            link: 'https://instagram.com/shadofer_rl',
        },

        {
            name: 'Shadofer',
            type: 'steam',
            link: 'https://steamcommunity.com/profiles/76561199167070009/',
        },
    ];
</script>

<div
    in:fly={{ y: -100, duration: 750, opacity: 0.5 }}
    class="top-nav-container"
>
    <h1 id="logo-text">Shadofer</h1>

    <div class="socials">
        {#each socials as { type, link }}
            <div class="container">
                <div class="social-container">
                    {#if type == 'github'}
                        <Github {link} />
                    {:else if type == 'spotify'}
                        <Spotify {link} />
                    {:else if type == 'instagram'}
                        <img
                            src="/socials/instagram.webp"
                            draggable={false}
                            alt="Instagram logo"
                            on:click={() => (location.href = link)}
                        />
                    {:else if type == 'steam'}
                        <img
                            src="/socials/steam.webp"
                            draggable={false}
                            alt="Steam logo"
                            on:click={() => (location.href = link)}
                        />
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <Theme />
</div>

<style>
    .top-nav-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 80%;
        margin: auto;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        display: flex;
        padding: 10px;
        padding-right: 20px;
        align-items: center;
        justify-content: center;
        background: var(--theme-nav_bg);
        box-shadow: 0 0 10px var(--theme-nav_shadow);
        backdrop-filter: blur(2.5px);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    #logo-text {
        margin: 0;
        margin-right: 20px;
        margin-bottom: 5px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        flex: 1;
        font-size: 2rem;
    }

    .socials {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }

    .social-container {
        margin-left: 5px;
        margin-right: 5px;
    }

    .social-container img {
        width: 38px;
        height: 38px;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        .top-nav-container {
            width: 90%;
        }

        #logo-text {
            font-size: 1.6rem;
        }

        .social-container img {
            cursor: default;
        }
    }
</style>
