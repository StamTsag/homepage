<script>
    import { quartOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';
</script>

<div
    class="flex flex-col items-center justify-center h-[95vh] select-none"
    in:scale={{
        start: 1.5,
        duration: 500,
        delay: 125,
        opacity: 0,
        easing: quartOut,
    }}
>
    <h1
        class="mobile:text-4xl mobile:-translate-y-4 text-[4rem] spacing-[1px] text-white font-normal"
    >
        The story of
    </h1>
    <h1
        class="mobile:text-4xl mobile:mb-2 text-[4rem] -translate-y-3 spacing-[1px] text-white font-normal"
    >
        a <span class="bg-clip-text font-semibold">Fullstack dev.</span>
    </h1>

    <span class="mt-1" />

    {#each ['Experienced in production-ready apps', 'and cutting-edge tech stacks'] as description}
        <h1
            class="mobile:text-base text-white text-2xl text-center font-normal spacing-[0.25px] -translate-y-2"
        >
            {description}
        </h1>
    {/each}

    <a
        class="mobile:mt-3 mt-5"
        href="https://github.com/Shadofer"
        target="_blank"
    >
        <button
            class="mobile:w-44 mobile:h-12 mobile:text-base mobile:cursor-default font-semibold w-52 h-14 text-2xl"
            >Visit Github</button
        >
    </a>
</div>

<style>
    span {
        background: -webkit-linear-gradient(
            245deg,
            #ffffff,
            #ff4b4b,
            #ffffff,
            #437eff,
            #ffffff
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
