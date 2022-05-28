<script lang="ts">
    import themes from 'src/themes';
    import { ThemeWrapper } from 'svelte-themer';
    import '../app.css';
</script>

<ThemeWrapper {themes}>
    <slot />
</ThemeWrapper>

<style>
    :global(body) {
        background-color: var(--theme-bg_color);
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
