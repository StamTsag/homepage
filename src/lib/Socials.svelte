<script lang="ts">
    import type { Socials } from 'src/interfaces/socials';

    import Discord from './svgs/Discord.svelte';
    import Github from './svgs/Github.svelte';

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
    ];
</script>

<div class="socials-container">
    {#each socials as { name, type, link }, _}
        <div class="container">
            {#if type == 'github'}
                <div id="icon">
                    <Github />
                </div>

                <h1><a href={link} target="_blank">{name}</a></h1>
            {:else}
                <div id="icon">
                    <Discord />
                </div>

                <h1>{name}</h1>
            {/if}
        </div>
    {/each}
</div>

<style>
    .socials-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 75px;
        margin-bottom: 0;
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
            margin-top: 25px;
        }

        .container h1 {
            font-size: 1.4rem;
        }
    }
</style>
