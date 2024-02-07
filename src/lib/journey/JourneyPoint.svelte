<script lang="ts">
    import Saos from 'saos';

    export let text = '';
    export let lineHeight = 500;
    export let creation = '';
    export let creationText = '';
    export let creationUrl = '';
    export let creationPrefix = '';
    export let creationSuffix = '';
    export let skipPoint = false;
</script>

<Saos animation={'move-up .5s cubic-bezier(0.8, 0.9, 0.9, 0.9) forwards'}>
    <div class="journey-point">
        {#if creation}
            <h1 id="point-info">
                {text}
                {creationText ? creationText : 'Created'}
                {creationPrefix ? `${creationPrefix} ` : ''}<a
                    href={creationUrl}
                    target="_blank">{creation}</a
                >
                {creationSuffix ? `${creationSuffix} ` : ''}
            </h1>
        {:else}
            <h1 id="point-info">{text}</h1>
        {/if}

        {#if !skipPoint}
            <div class="point" />
        {/if}

        <div class="line" style={`height: ${lineHeight}px;`} />
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
        max-width: 500px;
    }

    h1 {
        font-weight: 600;
        font-size: 1.6rem;
        text-align: center;
        color: white;
    }

    a {
        text-decoration: underline;
        color: white;
    }

    .point {
        width: 25px;
        height: 25px;
        border: 3px solid rgb(255, 255, 255, 1);
        border-radius: 30px;
        margin-bottom: 5px;
    }

    #point-info {
        font-size: 1.4rem;
        margin-bottom: 5px;
    }

    .line {
        width: 3px;
        height: 200px;
        background: rgb(255, 255, 255, 0.5);
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

        .line {
            width: 2px;
        }
    }

    @keyframes -global-move-up {
        0% {
            opacity: 0;
        }
    }
</style>
