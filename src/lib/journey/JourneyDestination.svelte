<script lang="ts">
    import Saos from 'saos';

    export let text: string;
</script>

<Saos animation={'move-up .5s cubic-bezier(0.5, 0.5, 0.65, 0.95) both'}>
    <div class="journey-point">
        <h1 id="point-info">{text}</h1>

        <div class="point" />
    </div>
</Saos>

<style>
    .journey-point {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 150ms;
        margin-top: 20px;
    }

    h1 {
        font-weight: 600;
        font-size: 1.6rem;
        color: white;
    }

    .point {
        width: 25px;
        height: 25px;
        border: 3px solid rgb(255, 255, 255, 0.5);
        border-radius: 30px;
        margin-bottom: 5px;
    }

    #point-info {
        font-size: 1.4rem;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 800px) {
        #point-info {
            font-size: 1.1rem;
        }

        .point {
            width: 20px;
            height: 20px;
            border: 2px solid black;
        }
    }

    @keyframes -global-move-up {
        0% {
            opacity: 0;
        }
    }
</style>
