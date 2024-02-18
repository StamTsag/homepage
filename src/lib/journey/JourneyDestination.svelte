<script lang="ts">
    import Saos from 'saos';

    export let text: string;
</script>

<Saos animation={'move-up .5s cubic-bezier(0.5, 0.5, 0.65, 0.95) both'}>
    <div class="flex flex-col items-center justify-center mt-10 animation-150">
        <h1
            class="mobile:text-12 font-medium text-16 text-white mb-2"
            id="point-info"
        >
            {text}
        </h1>

        <div
            class="mobile:w-20 mobile:h-20 w-25 h-25 rounded-full border-2 border-point"
        />
    </div>
</Saos>

<style>



    @keyframes -global-move-up {
        0% {
            opacity: 0;
        }
    }
</style>
