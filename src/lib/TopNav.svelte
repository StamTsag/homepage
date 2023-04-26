<script lang="ts">
    import type { ThemeContext } from 'src/interfaces/global';
    import { getContext } from 'svelte';
    import Switch from 'svelte-switch';
    import { fly } from 'svelte/transition';
    import type { Socials } from 'src/interfaces/socials';
    import Github from './svgs/Github.svelte';
    import Spotify from './svgs/Spotify.svelte';

    let { toggle, current }: ThemeContext = getContext('theme');

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
                        <Github />
                    {:else if type == 'spotify'}
                        <Spotify />
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

    <Switch
        checked={$current == 'dark'}
        on:change={toggle}
        onColor={'#0e0e0e'}
        offColor={'#e6e6e6'}
        height="32"
        width="64"
        offHandleColor={'#ffffff'}
        onHandleColor={'#000000'}
        handleDiameter={1}
        boxShadow={null}
        activeBoxShadow={null}
    >
        <!-- Custom switch state icons -->
        <svg
            slot="unCheckedIcon"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            ><style></style><path
                d="m22.2 27.3q-2.6 1.2-5.5 1.2-2.7 0-5.1-1-2.4-1-4.2-2.7-1.7-1.6-2.8-3.9-1-2.4-1-4.9 0-4.2 2.6-7.5 2.6-3.3 6.7-4.5-2.1 3.3-2.1 7 0 3.6 1.8 6.6 1.9 3 5 4.8 3.2 1.7 6.9 1.7 1.1 0 2.2-0.1-1.8 2.1-4.5 3.3zm8.8-5.8q-0.1-0.3-0.4-0.6-0.6-0.6-1.5-0.3-2.2 1-4.6 1-3 0-5.6-1.4-2.5-1.4-4-3.9-1.5-2.4-1.5-5.3 0-2.2 0.9-4.3 0.9-2 2.7-3.5 0.7-0.6 0.3-1.4-0.3-0.8-1.2-0.8-3.2 0.1-5.9 1.4-2.8 1.2-4.8 3.2-2.1 2-3.2 4.7-1.2 2.7-1.2 5.7 0 3 1.2 5.8 1.3 2.8 3.4 4.8 2.1 2 5 3.2 2.9 1.2 6.1 1.2 4.5 0 8.4-2.4 3.8-2.3 5.8-6.3 0.1-0.4 0.1-0.8z"
            /></svg
        >

        <svg
            slot="checkedIcon"
            fill="white"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            ><style></style><path
                d="m22.2 27.3q-2.6 1.2-5.5 1.2-2.7 0-5.1-1-2.4-1-4.2-2.7-1.7-1.6-2.8-3.9-1-2.4-1-4.9 0-4.2 2.6-7.5 2.6-3.3 6.7-4.5-2.1 3.3-2.1 7 0 3.6 1.8 6.6 1.9 3 5 4.8 3.2 1.7 6.9 1.7 1.1 0 2.2-0.1-1.8 2.1-4.5 3.3zm8.8-5.8q-0.1-0.3-0.4-0.6-0.6-0.6-1.5-0.3-2.2 1-4.6 1-3 0-5.6-1.4-2.5-1.4-4-3.9-1.5-2.4-1.5-5.3 0-2.2 0.9-4.3 0.9-2 2.7-3.5 0.7-0.6 0.3-1.4-0.3-0.8-1.2-0.8-3.2 0.1-5.9 1.4-2.8 1.2-4.8 3.2-2.1 2-3.2 4.7-1.2 2.7-1.2 5.7 0 3 1.2 5.8 1.3 2.8 3.4 4.8 2.1 2 5 3.2 2.9 1.2 6.1 1.2 4.5 0 8.4-2.4 3.8-2.3 5.8-6.3 0.1-0.4 0.1-0.8z"
            /></svg
        >
    </Switch>
</div>

<style>
    .top-nav-container {
        transition: 350ms all;
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
        background: var(--theme-nav_bg_color);
        box-shadow: 0 0 15px var(--theme-nav_shadow_color);
        backdrop-filter: blur(2.5px);
    }

    #logo-text {
        margin: 0;
        transition: 250ms color;
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
        width: 42px;
        height: 42px;
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
            width: 42px;
            height: 42px;
        }
    }
</style>
