<script>
    import { quintOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';
</script>

<div
    class="flex flex-col items-center justify-center h-95 select-none"
    in:scale={{
        start: 1.15,
        duration: 750,
        delay: 125,
        opacity: 0,
        easing: quintOut,
    }}
>
    <h1
        class="mobile:text-5xl mobile:-translate-y-4 text-4 spacing-1 text-white font-normal"
    >
        The story of
    </h1>
    <h1
        class="mobile:text-5xl mobile:mb-2 text-4 -translate-y-3 spacing-1 text-white font-normal"
    >
        a <span class="bg-clip-text">Fullstack dev.</span>
    </h1>

    <span class="mt-1" />

    {#each ['Experienced in production-ready apps', 'and cutting-edge tech stacks'] as description}
        <h1
            class="mobile:text-xl text-white text-2xl text-center font-normal spacing-25 -translate-y-2"
        >
            {description}
        </h1>
    {/each}

    <a
        class="mobile:mt-2 mt-4"
        href="https://github.com/Shadofer"
        target="_blank"
    >
        <button
            class="mobile:w-44 mobile:h-12 mobile:text-xl mobile:cursor-default font-semibold w-52 h-14 text-2xl"
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
