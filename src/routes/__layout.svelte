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
        background-color: var(--theme-colors-bg_color);
    }
</style>
