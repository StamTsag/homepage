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
        d="m43.7 29.7q-3.4 0-5.7-2.4-2.4-2.3-2.4-5.7 0-3.3 2.4-5.6 2.3-2.4 5.7-2.4 3.3 0 5.7 2.3 2.3 2.4 2.4 5.7-0.1 3.4-2.4 5.7-2.4 2.4-5.7 2.4zm-25.6 8.2q-0.9 0-1.8 0.2l3.4 1.4q2.6 1 3.7 3.5 1 2.5 0 5-1 2.5-3.5 3.6-2.5 1-5 0-1.9-0.8-4.1-1.6 1 2 3 3.2 1.9 1.2 4.3 1.2 3.4 0 5.8-2.4 2.4-2.4 2.4-5.9 0-3.4-2.4-5.8-2.4-2.4-5.8-2.4zm42.4-34.4q-3.5-3.5-8.5-3.5h-40q-5 0-8.5 3.5-3.5 3.5-3.5 8.5v19.5l12.4 5q2.6-1.6 5.7-1.6 0.8 0 1.2 0.1l9.3-13.5q0.1-6.1 4.5-10.5 4.4-4.3 10.5-4.3 6.3 0 10.7 4.4 4.4 4.4 4.4 10.6 0 6.2-4.4 10.6-4.4 4.4-10.7 4.4l-14.4 10.5q-0.4 4.3-3.6 7.2-3.2 2.9-7.5 2.9-4 0-7-2.5-3.1-2.5-3.9-6.3l-7.2-2.9v6.4q0 5 3.5 8.5 3.5 3.5 8.5 3.5h40q5 0 8.5-3.5 3.5-3.5 3.5-8.5v-40q0-5-3.5-8.5zm-9.7 11.1q-3-3-7.2-3-4.1 0-7.1 3-2.9 2.9-2.9 7.1 0 4.2 2.9 7.1 3 3 7.1 3 4.2 0 7.2-3 2.9-2.9 2.9-7.1 0-4.2-2.9-7.1z"
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
