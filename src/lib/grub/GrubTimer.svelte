<script lang="ts">
    import { onMount } from 'svelte';
    import { selectedGrub, showGrub, showWindows, showZorin } from '../stores';

    let showTimer = true;
    let targetSeconds = 10;

    function showNext(): void {
        setTimeout(() => {
            if ($selectedGrub == 0) {
                $showZorin = true;
            } else {
                $showWindows = true;
            }
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

                if (ev.key == 'ArrowDown') {
                    if ($selectedGrub == 1) return;

                    $selectedGrub += 1;
                } else {
                    if ($selectedGrub == 0) return;

                    $selectedGrub -= 1;
                }
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
