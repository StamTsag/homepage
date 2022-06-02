<script lang="ts">
    import type { Socials } from 'src/interfaces/socials';
    import Discord from './svgs/Discord.svelte';
    import Github from './svgs/Github.svelte';
    import Instagram from './svgs/Instagram.svelte';
    import Spotify from './svgs/Spotify.svelte';
    import Steam from './svgs/Steam.svelte';

    const socials: Socials[] = [
        {
            name: 'Shadofer#6681',
            type: 'discord',
        },

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

<div class="socials-container">
    {#each socials as { name, type, link }, _}
        <div class="container">
            <div id="icon">
                {#if type == 'discord'}
                    <Discord />
                {:else if type == 'github'}
                    <Github />
                {:else if type == 'spotify'}
                    <Spotify />
                {:else if type == 'instagram'}
                    <Instagram />
                {:else if type == 'steam'}
                    <Steam />
                {/if}
            </div>

            <h1>
                {#if !(type == 'discord')}
                    <a href={link} target="_blank">
                        {name}
                    </a>
                {:else}
                    {name}
                {/if}
            </h1>
        </div>
    {/each}
</div>

<style>
    .socials-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 75px;
        margin-bottom: 10px;
    }

    .container {
        text-align: center;
        margin-right: 20px;
        margin-left: 20px;
    }

    .container h1 {
        margin: 0;
        font-size: 2.2rem;
    }

    @media screen and (max-width: 800px) {
        .socials-container {
            margin-top: 0px;
        }

        .container {
            margin-top: 20px;
        }

        .container h1 {
            font-size: 1.4rem;
        }
    }
</style>
