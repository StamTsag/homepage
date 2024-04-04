<script lang="ts">
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    interface Song {
        title: string;

        // Could have more in the future ig
        artists: string[];
        volume?: number;
    }

    let audioElement: HTMLAudioElement;

    let songs: Song[] = [
        {
            title: 'Wii Shop Channel',
            artists: ['Toasty'],
            volume: 0.4,
        },
        {
            title: 'Resonance',
            artists: ['Home'],
            volume: 0.3,
        },

        {
            title: 'Rest Area',
            artists: ['Tsundere Twintails'],
            volume: 0.35,
        },
    ];

    let playing = false;
    let currentSongIndex = 0;
    let currentSong = songs[currentSongIndex];

    function togglePlay(): void {
        setTimeout(() => {
            audioElement.volume = currentSong.volume;

            if (!playing) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }, 0);
    }

    function goNext(): void {
        // If at the end, loop
        updateSong(
            currentSongIndex + 1 > songs.length - 1 ? 0 : currentSongIndex + 1
        );
    }

    function goPrev(): void {
        // If at the start, go to the end
        updateSong(
            currentSongIndex == 0 ? songs.length - 1 : currentSongIndex - 1
        );
    }

    function updateSong(index: number): void {
        playing = false;

        currentSongIndex = index;
        currentSong = songs[currentSongIndex];

        togglePlay();
    }

    onMount(() => {
        if (audioElement) {
            audioElement.onplay = () => (playing = true);

            audioElement.onpause = () => (playing = false);

            audioElement.onended = goNext;
        }
    });
</script>

<audio src={`/tracks/${currentSong.title}.mp3`} bind:this={audioElement} />

<div
    class="mobile:w-full mobile:rounded-none mobile:bottom-0 mobile:h-16 flex fixed bottom-6 left-0 right-0 w-[500px] items-center m-auto p-4 bg-player backdrop-blur rounded-[10px] select-none"
    in:fly={{
        y: 200,
        duration: 600,
        delay: 500,
        opacity: 0,
        easing: quintOut,
    }}
>
    <svg
        class="mobile:min-w-[24px] mobile:w-[24px] mobile:min-h-[24px] mobile:h-[24px] min-w-[36px] w-[36px] min-h-[36px] h-[36px] fill-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><path
            d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c.338 0 .671.017 1 .05z"
        /></svg
    >

    <div class="flex flex-col ml-4 flex-1">
        <h1
            class="mobile:text-base text-white text-xl font-semibold capitalise"
        >
            {currentSong.title}
        </h1>
        <h1
            class="mobile:text-xs text-white text-sm font-medium capitalise"
            id="atists"
        >
            {currentSong.artists.join(', ')}
        </h1>
    </div>

    <div class="flex items-center">
        <svg
            class="mobile:min-w-[24px] mobile:w-[24px] mobile:min-h-[24px] mobile:h-[24px] mobile:cursor-default stroke-white min-w-[30px] w-[30px] min-h-[30px] h-[30px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            on:click={goPrev}
            on:keydown={goPrev}
            ><g fill="none" stroke-width="1.5"
                ><circle cx="12" cy="12" r="10" /><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m15.5 9l-3 3l3 3m-4-6l-3 3l3 3"
                /></g
            ></svg
        >

        {#if !playing}
            <svg
                class="mobile:min-w-[30px] mobile:w-[30px] mobile:min-h-[30px] mobile:h-[30px] mobile:cursor-default fill-white min-w-[40px] w-[40px] min-h-[40px] h-[40px] ml-3 mr-3 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                on:click={togglePlay}
                on:keydown={togglePlay}
                ><path
                    fill-rule="evenodd"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059Z"
                    clip-rule="evenodd"
                /></svg
            >
        {:else}
            <svg
                class="mobile:min-w-[30px] mobile:w-[30px] mobile:min-h-[30px] mobile:h-[30px] mobile:cursor-default fill-white min-w-[40px] w-[40px] min-h-[40px] h-[40px] ml-3 mr-3 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                on:click={togglePlay}
                on:keydown={togglePlay}
                ><path
                    fill-rule="evenodd"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541Zm5 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541Z"
                    clip-rule="evenodd"
                /></svg
            >
        {/if}

        <svg
            class="mobile:min-w-[24px] mobile:w-[24px] mobile:min-h-[24px] mobile:h-[24px] mobile:cursor-default stroke-white min-w-[30px] w-[30px] min-h-[30px] h-[30px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            on:click={goNext}
            on:keydown={goNext}
            ><g fill="none" stroke-width="1.5"
                ><circle cx="12" cy="12" r="10" /><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.5 9l3 3l-3 3m4-6l3 3l-3 3"
                /></g
            ></svg
        >
    </div>
</div>
