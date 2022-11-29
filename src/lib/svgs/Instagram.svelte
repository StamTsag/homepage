<script>
    import { getContext } from 'svelte';

    const { theme } = getContext('theme');
</script>

<svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="64"
    height="64"
    ><defs
        ><image
            width="64"
            height="64"
            id="img1"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAPSURBVHicY2AYBaOAfAAAAkAAAVk2oQMAAAAASUVORK5CYII="
        /></defs
    ><style></style><use href="#img1" x="0" y="0" /><path
        fill={`#${$theme == 'dark' ? 'ffffff' : '000000'}`}
        fill-rule="evenodd"
        d="m56 55.9q-0.8 0.7-1.8 0.7h-44.5q-1.1 0-1.8-0.7-0.8-0.7-0.8-1.8v-27h5.9q-0.8 2.6-0.8 5.4 0 8 5.8 13.7 5.8 5.6 14 5.6 5.5 0 10-2.5 4.6-2.6 7.3-7.1 2.7-4.4 2.7-9.7 0-2.8-0.9-5.4h5.6v27q0 1.1-0.7 1.8zm-24-11.6q-5.3 0-9-3.6-3.8-3.7-3.8-8.8 0-5.2 3.8-8.8 3.7-3.7 9-3.7 5.4 0 9.1 3.7 3.8 3.6 3.8 8.8 0 5.1-3.8 8.8-3.7 3.6-9.1 3.6zm23.9-25.4q-0.8 0.9-2 0.8h-7.3q-1.2 0.1-2-0.8-0.9-0.8-0.8-2v-6.9q-0.1-1.2 0.8-2 0.8-0.9 2-0.9h7.3q1.2 0 2 0.9 0.8 0.8 0.8 2v6.9q0 1.2-0.8 2zm5.7-16.5q-2.4-2.4-5.8-2.4h-47.6q-3.4 0-5.8 2.4-2.4 2.4-2.4 5.8v47.6q0 3.4 2.4 5.8 2.4 2.4 5.8 2.4h47.6q3.4 0 5.8-2.4 2.4-2.4 2.4-5.8v-47.6q0-3.4-2.4-5.8z"
    /></svg
>

<style>
    @media screen and (max-width: 800px) {
        svg {
            width: 48px;
            height: 48px;
        }
    }
</style>
