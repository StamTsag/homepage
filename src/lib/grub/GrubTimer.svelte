<script lang="ts">
    import { onMount } from 'svelte';
    import { showGrub, showZorin } from '../stores';

    let showTimer = true;
    let targetSeconds = 10;

    function showNext(): void {
        setTimeout(() => {
            $showZorin = true;
        }, 3000);
    }

    setTimeout(() => {
        const interval = setInterval(() => {
            if (!$showGrub || !showTimer) return;

            targetSeconds--;

            if (targetSeconds <= 0) {
                showTimer = false;

                $showGrub = false;

                showNext();

                clearInterval(interval);
            }
        }, 1000);
    }, 500);

    onMount(() => {
        document.onkeydown = (ev) => {
            if (ev.key == 'ArrowDown' || ev.key == 'ArrowUp') {
                showTimer = false;
            } else if (ev.key == 'ArrowRight' || ev.key == 'Enter') {
                showTimer = false;
                $showGrub = false;
                showNext();
            }
        };
    });
</script>

{#if showTimer}
    <h1 id="timer">
        Zorin will start in {targetSeconds} second{targetSeconds != 1
            ? 's'
            : ''}
    </h1>
{/if}

<style>
    #timer {
        position: fixed;
        top: 325px;
        left: 285px;
        font-family: Manrope;
        font-weight: 600;
        font-size: 1.3rem;
    }
</style>
