<script>
    import { dev } from '$app/env';
    import { goto } from '$app/navigation';

    import '../app.css';
</script>

<h1 class='top logo' on:click={() => goto('/')}>Shadofer</h1>

<!-- warn-->
{#if dev}
    <h1 style='padding: 0; margin: 0; text-align: center;'>DEVELOPMENT ENVIRONMENT</h1>
{/if}

<slot></slot>