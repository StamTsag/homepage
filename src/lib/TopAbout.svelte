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
            delay: 850,
            opacity: 0,
        }}
    >
        and cutting-edge tech stacks
    </h1>

    <a href="https://github.com/Shadofer" target="_blank">
        <button in:scale={{ duration: 500, delay: 1500, start: 0.9 }}
            >Visit Github</button
        >
    </a>

    <svg
        on:click={() => scrollToId('about')}
        in:scale={{ delay: 2000, duration: 500, start: 0.8 }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><g
            ><path
                d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723l-4.404 4.404Z"
            /><path
                d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481L11.293 8Z"
                opacity="1"
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
        color: #7794a8;
        letter-spacing: 1px;
        font-weight: 800;
    }

    span {
        background: -webkit-linear-gradient(45deg, #ff0000, #f09a9a);
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
        fill: red;
        animation-name: up-n-down;
        animation-duration: 2500ms;
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
