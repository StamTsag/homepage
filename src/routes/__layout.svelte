<script>
    import '../app.css';

    import { goto } from '$app/navigation';
</script>

<h1 class='top logo' on:click={() => goto('/')}>Shadofer</h1>

<slot></slot>