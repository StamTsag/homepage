<script lang="ts">
    import { scrollToId } from '../funcs';
    import { blur, fly } from 'svelte/transition';

    function scrollTop(): void {
        scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
</script>

<div class="top" in:blur={{ duration: 500, amount: 5 }}>
    <img on:click={scrollTop} src="favicon.png" alt="Pfp" draggable={false} />

    <span />

    <h1 on:click={() => scrollToId('journey')}>Journey</h1>
    <h1 on:click={() => scrollToId('projects')}>Projects</h1>
    <h1 on:click={() => scrollToId('contact')}>Contact</h1>
</div>

<style>
    .top {
        position: fixed;
        top: 20px;
        right: 0;
        left: 0;
        width: 1000px;
        padding: 10px;
        background: rgb(255, 255, 255, 0.7);
        backdrop-filter: blur(15px);
        box-shadow: 0 0 5px rgba(65, 65, 65, 0.05);
        z-index: 1;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: start;
        user-select: none;
        transition: 150ms;
        border-radius: 30px;
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
        font-size: 1.3rem;
        margin-right: 20px;
        cursor: pointer;
        color: rgb(80, 80, 80);
        transition: 150ms;
        font-weight: 500;
    }

    h1:hover {
        color: rgb(255, 91, 91);
    }

    h1:active {
        opacity: 0.5;
    }

    @media screen and (max-width: 1200px) {
        .top {
            width: 800px;
        }
    }

    @media screen and (max-width: 800px) {
        .top {
            border-radius: 0;
            top: 0;
            width: 100%;
            margin: 0;
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
