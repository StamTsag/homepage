<script lang="ts">
    // Selected boot option if more added
</script>

<div class="options">
    <div class="selected">
        <img src="/images/grub/zorin.png" draggable={false} alt="Zorin" />
        <h1>Zorin</h1>
    </div>
</div>

<style>
    .options {
        position: fixed;
        top: 400px;
        left: 300px;
        font-family: Manrope;
        font-weight: 600;
        font-size: 1.3rem;
    }

    .options div {
        width: 400px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 5px;
        cursor: default;
        user-select: none;
    }

    img {
        width: 48px;
        height: 48px;
        margin-right: 30px;
    }

    h1 {
        font-family: Manrope;
        font-size: 1.7rem;
        font-weight: 600;
        margin: 0;
    }

    .selected {
        background: rgb(70, 70, 70);
    }
</style>
