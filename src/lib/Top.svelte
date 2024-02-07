<script lang="ts">
    import { fly } from 'svelte/transition';
    import { scrollToId } from '../funcs';

    function scrollTop(): void {
        document.getElementsByClassName('main')[0].scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
</script>

<div class="top" in:fly={{ y: -100, duration: 500, opacity: 1 }}>
    <img on:click={scrollTop} src="favicon.png" alt="Pfp" draggable={false} />

    <span />

    <h1 on:click={() => scrollToId('journey')}>Journey</h1>
    <h1 on:click={() => scrollToId('projects')}>Projects</h1>
    <h1 on:click={() => scrollToId('contact')}>Contact</h1>
</div>

<style>
    .top {
        position: fixed;
        top: 0px;
        right: 0;
        left: 0;
        width: 97.5%;
        margin: auto;
        padding: 6px;
        backdrop-filter: blur(15px);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: start;
        user-select: none;
        transition: 150ms;
    }

    img {
        width: 42px;
        height: 42px;
        margin-right: 10px;
        border-radius: 100px;
        cursor: pointer;
        transition: 300ms;
    }

    img:hover {
        filter: brightness(200%);
    }

    img:active {
        transform: translateY(2px);
    }

    span {
        flex: 1;
    }

    h1 {
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        font-size: 1.3rem;
        margin-right: 20px;
        cursor: pointer;
        color: white;
        transition: 175ms;
        font-weight: 400;
    }

    h1:hover {
        background: rgb(255, 255, 255, 0.05);
    }

    h1:active {
        opacity: 0.75;
    }

    @media screen and (max-width: 800px) {
        .top {
            width: 100%;
        }
        img {
            width: 38px;
            height: 38px;
            cursor: default;
        }

        h1 {
            font-size: 1.1rem;
            cursor: default;
        }
    }
</style>
