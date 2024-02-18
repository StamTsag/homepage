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
    <div
        class="flex flex-col items-center justify-center animation-150 mt-10 w-500"
    >
        {#if creation}
            <h1
                class="mobile:text-12 text-2xl text-center text-white font-medium select-none mb-2"
            >
                {text}
                {creationText ? creationText : 'Created'}
                {creationPrefix ? `${creationPrefix} ` : ''}<a
                    href={creationUrl}
                    target="_blank">{creation}</a
                >
                {creationSuffix ? `${creationSuffix} ` : ''}
            </h1>
        {:else}
            <h1
                class="mobile:text-12 text-2xl text-center text-white font-medium select-none mb-2"
            >
                {text}
            </h1>
        {/if}

        {#if !skipPoint}
            <div
                class="mobile:w-20 mobile:h-20 point w-25 h-25 border-2 border-point mb-2 rounded-full"
            />
        {/if}

        <div
            class="line w-1 h-200 bg-line"
            style={`height: ${lineHeight}px;`}
        />
    </div>
</Saos>

<style>
    @keyframes -global-move-up {
        0% {
            opacity: 0;
        }
    }
</style>
