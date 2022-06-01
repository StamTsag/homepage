<script lang="ts">
    import themes from 'src/themes';
    import { setGlobalOptions } from 'svelte-scrolling';
    import { ThemeWrapper } from 'svelte-themer';
    import { sineInOut } from 'svelte/easing';
    import '../app.css';

    setGlobalOptions({
        duration: 1000,
        easing: sineInOut,
        offset: -300,
    });
</script>

<!-- Sanity check for users before entering the white realm -->
<ThemeWrapper mode="dark" {themes}>
    <slot />
</ThemeWrapper>

<style>
    :global(body) {
        background-color: var(--theme-bg_color);
    }

    :global(p) {
        color: var(--theme-text_color);
    }

    :global(h1) {
        color: var(--theme-text_color);
    }

    :global(button) {
        background: var(--theme-button_bg_color);
        border: 7px solid var(--theme-button_bg_color);
        box-shadow: 0 0 5px var(--theme-button_bg_color);
    }

    :global(button):hover {
        box-shadow: 0 0 15px var(--theme-button_bg_color);
    }
</style>
