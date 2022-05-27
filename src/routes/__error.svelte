<script context="module" lang="ts">
    import { goto } from '$app/navigation';
    import 'styles/__error.css';
</script>

<div class="error-container">
    <h1>An <span style="color: black;">oopsie</span> occured!</h1>

    <button on:click={() => goto('/')}>Go back</button>
</div>
