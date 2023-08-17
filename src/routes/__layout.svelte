<script lang="ts">
    import themes from 'src/themes';
    import { ThemeWrapper } from 'svelte-themer';
    import '../app.css';
</script>

<!-- Sanity check for users before entering the white realm -->
<ThemeWrapper mode="dark" {themes}>
    <slot />
</ThemeWrapper>

<style>
    :global(body) {
        background-color: var(--theme-bg);
    }

    :global(p) {
        color: var(--theme-text);
    }

    :global(h1) {
        color: var(--theme-text);
    }

    :global(button) {
        background: var(--theme-button_bg);
        border: 7px solid var(--theme-button_bg);
        box-shadow: 0 0 5px var(--theme-button_bg);
    }

    :global(button):hover {
        box-shadow: 0 0 15px var(--theme-button);
    }
</style>
