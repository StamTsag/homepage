<script lang="ts">
    import { fly } from 'svelte/transition';
    import { scrollToId } from '../funcs';

    function scrollTop(): void {
        document.getElementsByClassName('main')[0].scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
</script>

<div
    class="mobile:mr-0 mobile:h-[75px] fixed top-0 right-0 left-0 m-auto mr-4 z-10 pt-2 p-1 w-full flex items-center justify-center select-none backdrop-blur"
    in:fly={{ y: -100, duration: 500, opacity: 1 }}
>
    <img
        class="mobile:ml-3 mobile:w-8 mobile:h-8 mobile:cursor-default active:translate-y-0.5 hover:brightness-150 ml-9 w-10 h-10 cursor-pointer rounded duration-100"
        on:click={scrollTop}
        src="favicon.png"
        alt="Pfp"
        draggable={false}
    />

    <span class="flex-1" />

    {#each ['Journey', 'Projects', 'Contact'] as title}
        <h1
            class="mobile:text-base mobile:cursor-default hover:bg-top-hover mobile:p-2 active:opacity-[0.75] p-2.5 rounded-md duration-150 text-white font-normal text-[1.5rem] mr-6 cursor-pointer"
            on:click={() => scrollToId(title.toLowerCase())}
        >
            {title}
        </h1>
    {/each}
</div>
