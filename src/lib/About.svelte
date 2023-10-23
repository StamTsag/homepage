<script lang="ts">
    import Saos from 'saos';
</script>

<Saos once animation={'blur-in 0.35s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <div class="about" id="about">
        <div class="one">
            <img src="/favicon.png" draggable={false} alt="Avatar" />
            <h1>Shadofer</h1>
        </div>

        <h1>I am a 19-year-old self-taught full-stack developer from Greece</h1>

        <br />

        <h1>I specialise in Typescript, Svelte, NodeJS and Python</h1>

        <br />

        <h1>
            I have been coding from the young age of 11, ranging from humble
            begginings of discord bots to full-scale production servers
        </h1>
    </div>
</Saos>

<style>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: red;
        padding: 50px;
        transform: skewY(-2deg);
        z-index: -1;
        margin-top: 100px;
        margin-bottom: 250px;
        box-shadow: 0 0 5px red;
    }

    h1 {
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
        white-space: pre-wrap;
        text-align: center;
    }

    .one {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    .one h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    .one img {
        width: 64px;
        height: 64px;
        border-radius: 20px;
        margin-right: 10px;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 1.2rem;
        }

        .one h1 {
            font-size: 1.6rem;
        }

        .one img {
            width: 48px;
            height: 48px;
            margin-right: 8px;
        }
    }
</style>
