<script lang="ts">
    import Saos from 'saos';

    export let text: string;
</script>

<Saos animation={'move-up .5s cubic-bezier(0.5, 0.5, 0.65, 0.95) both'}>
    <div
        class="flex flex-col items-center justify-center mt-[10px] animation-150"
    >
        <h1
            class="mobile:text-base font-medium text-[1.6rem] text-white mb-2"
            id="point-info"
        >
            {text}
        </h1>

        <div
            class="mobile:w-[20px] mobile:h-[20px] w-[25px] h-[25px] rounded-full border-2 border-point"
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
