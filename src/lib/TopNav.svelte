<script lang="ts">
    import 'styles/top-nav.css';
    import { fly } from 'svelte/transition';
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
        />
        <h1>Shadofer</h1>
    </div>

    <div class="categories-container">
        <h1>About me</h1>
        <h1>Projects</h1>
        <h1>Connections</h1>
    </div>
</div>
