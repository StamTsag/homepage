<script lang="ts">
    import Saos from 'saos';

    export let title: string;
    export let description: string;
    export let github: string;
    export let site = '';
</script>

<span class="m-[50px]" />

<Saos
    once
    animation={'opacity-in 0.35s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
>
    <div
        class="mobile:w-full mobile:rounded-none mobile:border-none mobile:h-[300px] flex flex-col items-center justify-center w-[80%] h-[325px] m-auto rounded-[10px] bg-project border-2 border-project-shadow"
    >
        <h1 class="mobile:text-[2rem] text-white font-normal text-[3.5rem]">
            {title}
        </h1>
        <h1
            class="mobile:text-[1rem] text-xl font-normal tracking-25 pl-3 pr-3 text-center text-white"
        >
            {description}
        </h1>

        <div class="flex mt-8">
            <a href={github} target="_blank">
                <button
                    class={`mobile:text-[0.8rem] mobile:cursor-default mobile:w-[125px] hover:underline hover:shadow-none hover:bg-transparent shadow-none bg-transparent text-white text-xl mr-[10px] ml-[10px] font-semibold`}
                    id="github">View on Github</button
                >
            </a>

            {#if site}
                <a href={site} target="_blank"
                    ><button
                        class="mobile:text-[0.8rem] mobile:w-[100px] mobile:cursor-default mobile:w-[125px] text-white mr-7 text-xl font-semibold w-44"
                        >Visit site</button
                    ></a
                >
            {/if}
        </div>
    </div>
</Saos>

<span class="m-[50px]" />

<style>
    @keyframes -global-opacity-in {
        0% {
            opacity: 0;
        }
    }
</style>
