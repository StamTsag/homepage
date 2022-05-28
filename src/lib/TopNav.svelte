<script lang="ts">
    import type { ThemeContext } from 'src/interfaces/global';
    import 'styles/top-nav.css';
    import { getContext } from 'svelte';
    import Switch from 'svelte-switch';
    import { fly } from 'svelte/transition';

    let { toggle, current }: ThemeContext = getContext('theme');
</script>

<div
    in:fly={{ y: -100, duration: 750, opacity: 0.5 }}
    class="top-nav-container"
>
    <div class="info-container">
        <img
            src="images/pfp.png"
            alt="Shadofer logo"
            width="48px"
            height="48px"
            draggable={false}
        />
        <h1>Shadofer</h1>
    </div>

    <div class="categories-container">
        <h1>About me</h1>
        <h1>Projects</h1>
        <h1>Connections</h1>
    </div>

    <Switch
        checked={$current == 'dark'}
        on:change={toggle}
        onColor={'#000000'}
        offColor={'#ffffff'}
        height="32"
        width="64"
        offHandleColor={'#ff4e4e'}
        onHandleColor={'#ff4e4e'}
    />
</div>

<style>
    /* Override __layout */
    :global(.top-nav-container .info-container h1) {
        color: white;
    }
</style>
