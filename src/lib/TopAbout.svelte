<script lang="ts">
    import { scrollToId } from '../funcs';
    import { fly, scale } from 'svelte/transition';
</script>

<div class="about">
    <h1 id="intro" in:fly={{ duration: 1000, y: 50, delay: 200, opacity: 0 }}>
        The story of
    </h1>
    <h1
        id="intro"
        in:fly={{
            duration: 1000,
            y: 50,
            delay: 200,
            opacity: 0,
        }}
    >
        a <span>Fullstack dev.</span>
    </h1>

    <span id="spacer" />

    <h1
        id="descriptor"
        in:fly={{
            duration: 1000,
            y: 50,
            delay: 750,
            opacity: 0,
        }}
    >
        Experienced in production-ready apps
    </h1>
    <h1
        id="descriptor"
        in:fly={{
            duration: 1000,
            y: 50,
            delay: 800,
            opacity: 0,
        }}
    >
        and cutting-edge tech stacks
    </h1>

    <a href="https://github.com/Shadofer" target="_blank">
        <button in:scale={{ duration: 500, delay: 1300, start: 0.9 }}
            >Visit Github</button
        >
    </a>

    <svg
        on:click={() => scrollToId('journey')}
        in:scale={{ delay: 1500, duration: 500, start: 0.8 }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            ><path d="m19 11l-7 6l-7-6" /><path
                d="m19 7l-7 6l-7-6"
                opacity=".7"
            /></g
        ></svg
    >
</div>

<style>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #intro {
        font-size: 4.5rem;
        color: #2e2e2e;
        letter-spacing: 1px;
        font-weight: 800;
    }

    span {
        background: -webkit-linear-gradient(
            50deg,
            #000000,
            #ff2600,
            #000000,
            #04ffab,
            #000000
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #spacer {
        margin-top: 15px;
    }

    #descriptor {
        font-size: 1.5rem;
        letter-spacing: 0.25px;
        color: rgb(58, 72, 82);
        font-weight: 500;
        text-align: center;
    }

    button {
        font-size: 1.5rem;
        width: 200px;
        margin-top: 25px;
    }

    svg {
        stroke: rgb(255, 0, 0);
        animation-name: up-n-down;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
        cursor: pointer;
        margin-top: 10px;
        width: 50px;
        height: 50px;
    }

    @media screen and (max-width: 800px) {
        #intro {
            font-size: 2.5rem;
        }

        #descriptor {
            font-size: 1.2rem;
        }

        button {
            font-size: 1.2rem;
            width: 150px;
            cursor: default;
        }

        svg {
            width: 38px;
            height: 38px;
            cursor: default;
        }
    }

    @keyframes up-n-down {
        0% {
            transform: translateY(15px);
        }

        100% {
            transform: translateY(0);
        }
    }
</style>
