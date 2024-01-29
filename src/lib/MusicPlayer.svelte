<script lang="ts">
    import { fly } from 'svelte/transition';
    import { quadInOut } from 'svelte/easing';
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
    class="player"
    in:fly={{
        y: 150,
        duration: 750,
        delay: 250,
        opacity: 1,
        easing: quadInOut,
    }}
>
    <svg
        id="cover"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><path
            d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c.338 0 .671.017 1 .05z"
        /></svg
    >

    <div class="song">
        <h1 id="title">{currentSong.title}</h1>
        <h1 id="artists">{currentSong.artists.join(', ')}</h1>
    </div>

    <div class="actions">
        <svg
            id="action"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
                id="toggle"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
                id="toggle"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
            id="action"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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

<style>
    .player {
        display: flex;
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        width: 500px;
        align-items: center;
        margin: auto;
        padding: 20px;
        background: rgb(255, 255, 255, 0.75);
        backdrop-filter: blur(5px);
        border-radius: 20px;
        box-shadow: 0 0 2px rgb(0, 0, 0, 0.1);
        user-select: none;
    }

    h1 {
        margin: 0;
    }

    #cover {
        min-width: 36px;
        min-height: 36px;
        fill: red;
        animation-name: rotating;
        animation-duration: 5000ms;
        animation-delay: 750ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .song {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        flex: 1;
    }

    #title {
        font-size: 1.3rem;
        font-weight: 400;
        text-transform: capitalize;
    }

    #artists {
        font-size: 1.1rem;
        text-transform: capitalize;
    }

    .actions {
        display: flex;
        align-items: center;
        margin-left: 100px;
    }

    #toggle {
        fill: red;
        min-width: 40px;
        min-height: 40px;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
    }

    #action {
        stroke: red;
        width: 30px;
        min-width: 30px;
        height: 30px;
        min-height: 30px;
        cursor: pointer;
    }

    @keyframes rotating {
        100% {
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width: 800px) {
        .player {
            width: 100%;
            height: 24px;
            border-radius: 0;
            bottom: 0;
            justify-content: center;
        }

        #cover {
            min-width: 24px;
            min-height: 24px;
        }

        #title {
            font-size: 1rem;
        }

        #artists {
            font-size: 0.8rem;
        }

        .actions {
            margin-right: 50px;
        }

        #toggle {
            min-width: 24px;
            min-height: 24px;
            cursor: default;
        }

        #action {
            width: 24px;
            min-width: 18px;
            height: 24px;
            min-height: 18px;
            cursor: default;
        }
    }
</style>
