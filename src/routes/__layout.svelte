<script>
    import { goto } from '$app/navigation';

    import '../app.css';
</script>

<h1 class='top logo' on:click={() => goto('/')}>Shadofer</h1>

<slot></slot>