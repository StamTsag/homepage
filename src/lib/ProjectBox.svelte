<script lang="ts">
    import Saos from 'saos';

    export let title: string;
    export let description: string;
    export let github: string;
    export let site = '';

    function openGithub(): void {
        window.open(github, '_blank');
    }

    function openSite(): void {
        window.open(site, '_blank');
    }
</script>

<span />

<Saos once animation={'blur-in 0.35s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <div class="box">
        <h1 id="title">{title}</h1>
        <h1 id="description">{description}</h1>

        <div class="options">
            <button
                class={`${!site ? 'single' : ''}`}
                on:click={openGithub}
                id="github">View on Github</button
            >

            {#if site}
                <button on:click={openSite} id="visit">Visit site</button>
            {/if}
        </div>
    </div>
</Saos>

<span />

<style>
    span {
        margin: 50px;
    }

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin: auto;
        height: 400px;
        border-radius: 10px;
        box-shadow: 0 0 30px rgb(20, 20, 20, 0.075);
        transition: 250ms;
    }

    #title {
        font-size: 4.5rem;
        font-weight: 700;
    }

    #description {
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.25px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    }

    .options {
        display: flex;
        margin-top: 35px;
    }

    button {
        margin-right: 35px;
        margin-left: 10px;
        font-size: 1.4rem;
    }

    #github {
        background: transparent;
        box-shadow: none;
        color: black;
    }

    #github:hover {
        text-decoration: underline;
    }

    #visit {
        width: 150px;
    }

    .single {
        margin: 0;
    }

    @media screen and (max-width: 800px) {
        .box {
            width: 100%;
            height: 300px;
            border-radius: 0;
        }

        #title {
            font-size: 2.6rem;
        }

        #description {
            font-size: 1.1rem;
        }

        button {
            font-size: 0.9rem;
            cursor: default;
        }

        #visit {
            width: 125px;
        }
    }

    @keyframes -global-blur-in {
        0% {
            transform: translateY(40px);
            filter: blur(10px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
