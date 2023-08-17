<script lang="ts">
    import { onMount } from 'svelte';

    let hours: number;
    let minutes: number;

    function updateHours(): void {
        hours = new Date().getHours();
    }

    function updateMinutes(): void {
        minutes = new Date().getMinutes();
    }

    onMount(() => {
        updateHours();
        updateMinutes();

        setInterval(() => {
            updateHours();
            updateMinutes();
        }, 20000);
    });
</script>

<div class="desktop">
    <h1 id="time">{hours}:{minutes < 10 ? '0' : ''}{minutes}</h1>
    <h1 id="time-2">
        {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
        })}, {new Date().toLocaleDateString('en-us', {
            month: 'long',
        })}
        {new Date().toLocaleDateString('en-us', {
            day: '2-digit',
        })}
    </h1>
</div>

<style>
    .desktop {
        background-image: url('/images/zorin/wallpaper.jpg');
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        z-index: 0;
        user-select: none;
    }

    #time {
        position: fixed;
        top: -140px;
        left: 60px;
        bottom: 0;
        height: fit-content;
        margin: auto;
        font-size: 5rem;
        font-family: Manrope;
        font-weight: 200;
    }

    #time-2 {
        position: fixed;
        top: 10px;
        left: 60px;
        bottom: 0;
        height: fit-content;
        margin: auto;
        font-size: 3rem;
        font-family: Manrope;
        font-weight: 200;
    }
</style>
