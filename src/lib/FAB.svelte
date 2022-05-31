<script lang="ts">
    import { draw, fly } from 'svelte/transition';

    let FABMenuVisible = false;

    function toggleFAB(): void {
        // TODO: Scroll content id optional param
        FABMenuVisible = !FABMenuVisible;
    }
</script>

<svg
    on:click={toggleFAB}
    class="fab"
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64"
    height="64"
    ><style>
        .a {
            fill: #ff4e4e;
        }
    </style>

    <path
        in:draw={{ duration: 1250 }}
        d="m53.6 36q0 1.1-0.8 1.9l-4.3 4.2q-0.7 0.8-1.8 0.8-1.1 0-1.9-0.8l-12.8-12.8-12.8 12.8q-0.8 0.8-1.9 0.8-1 0-1.8-0.8l-4.3-4.2q-0.8-0.8-0.8-1.9 0-1.1 0.8-1.9l18.9-18.9q0.8-0.8 1.9-0.8 1.1 0 1.9 0.8l18.9 18.9q0.8 0.8 0.8 1.9zm-49.3-20.1q-4.3 7.4-4.3 16.1 0 8.7 4.3 16.1 4.3 7.3 11.6 11.6 7.4 4.3 16.1 4.3 8.7 0 16.1-4.3 7.3-4.3 11.6-11.6 4.3-7.4 4.3-16.1 0-8.7-4.3-16.1-4.3-7.3-11.6-11.6-7.4-4.3-16.1-4.3-8.7 0-16.1 4.3-7.3 4.3-11.6 11.6z"
    />
</svg>

{#if FABMenuVisible}
    <div class="fab-menu">
        <h1
            on:click={toggleFAB}
            in:fly={{ y: 10, duration: 250, delay: 100 }}
            out:fly={{ y: 10, duration: 250 }}
        >
            About me
        </h1>
        <h1
            on:click={toggleFAB}
            in:fly={{ y: 10, duration: 250, delay: 50 }}
            out:fly={{ y: 10, duration: 250, delay: 50 }}
        >
            Projects
        </h1>
        <h1
            on:click={toggleFAB}
            in:fly={{ y: 10, duration: 250 }}
            out:fly={{ y: 10, duration: 250, delay: 100 }}
        >
            Socials
        </h1>
    </div>
{/if}

<style>
    .fab {
        display: none;
    }

    .fab-menu {
        display: none;
    }

    @media screen and (max-width: 690px) {
        .fab {
            display: initial;
            position: fixed;
            bottom: 10px;
            right: 30px;
            border-radius: 50px;
            transition: 500ms all;
            fill: none;
            stroke-width: 3px;
            stroke: var(--theme-primary);
            box-shadow: 0 0 10px var(--theme-primary);
        }

        .fab-menu {
            display: initial;
            position: fixed;
            bottom: 75px;
            right: 5px;
            text-align: center;
        }

        .fab-menu h1 {
            border-radius: 10px;
            font-size: 1.5rem;
            margin-bottom: 10px;
            padding: 10px;
            padding-left: 2px;
            padding-right: 2px;
            cursor: default;
            border: 2px solid var(--theme-primary);
            box-shadow: 0 0 10px var(--theme-primary);
        }

        .fab-menu h1:hover {
            color: var(--theme-text_color_hover);
        }
    }
</style>
