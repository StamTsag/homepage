<script lang="ts">
    import Saos from 'saos';

    export let title: string;
    export let description: string;
    export let github: string;
    export let site = '';
</script>

<span class="m-50" />

<Saos once animation={'blur-in 0.35s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
    <div
        class="mobile:w-full mobile:rounded-none mobile:h-300 flex flex-col items-center justify-center w-80% h-400 m-auto rounded-10 bg-project border-2 border-project-shadow"
    >
        <h1 class="mobile:text-25 text-white font-normal text-4">{title}</h1>
        <h1
            class="mobile:text-12 text-2xl font-normal tracking-25 pl-3 pr-3 text-center text-white"
        >
            {description}
        </h1>

        <div class="flex mt-8">
            <a href={github} target="_blank">
                <button
                    class={`mobile:text-9 mobile:cursor-default mobile:w-125 hover:underline hover:shadow-none hover:bg-transparent shadow-none bg-transparent text-white text-xl mr-10 ml-10 font-semibold`}
                    id="github">View on Github</button
                >
            </a>

            {#if site}
                <a href={site} target="_blank"
                    ><button
                        class="mobile:text-9 mobile:cursor-default mobile:w-125 text-white mr-7 text-xl font-semibold w-44"
                        >Visit site</button
                    ></a
                >
            {/if}
        </div>
    </div>
</Saos>

<span class="m-50" />

<style>
    @keyframes -global-blur-in {
        0% {
            opacity: 0;
        }
    }
</style>
