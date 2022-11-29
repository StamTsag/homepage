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
        d="m46.4 46.5q-0.6 0.6-1.4 0.6-0.6 0-1.4-0.5-7.1-4.3-16.5-4.3-4.6 0-10.1 1.2-1.4 0.3-1.6 0.3-0.9 0-1.5-0.6-0.5-0.6-0.5-1.5 0-1.7 1.7-2.1 6.4-1.4 12-1.4 10.6 0 18.6 4.8 1.3 0.8 1.3 2.1 0 0.9-0.6 1.4zm3.8-8.6q-0.7 0.7-1.7 0.7-0.6 0-1.6-0.5-8.7-5.2-20.4-5.2-5.3 0-10.4 1.4-1.3 0.3-1.6 0.3-1 0-1.7-0.7-0.8-0.7-0.8-1.8 0-2.1 2-2.6 6.3-1.8 12.7-1.8 12.9 0 22.8 5.9 1.5 0.9 1.5 2.5 0 1.1-0.8 1.8zm4.4-10q-0.9 0.9-2.1 0.9-0.8 0-1.7-0.5-4.3-2.5-10.6-4-6.2-1.4-12.9-1.4-7.2 0-12.8 1.6-1.2 0.3-1.6 0.3-1.3 0-2.2-0.9-0.8-0.9-0.8-2.2 0-1.2 0.6-2 0.7-0.7 1.6-1 6.7-2 15.2-2 7.3 0 14.3 1.6 6.9 1.5 12.2 4.6 1.7 0.9 1.7 2.9 0 1.3-0.9 2.1zm-6.5-23.6q-7.4-4.3-16.1-4.3-8.7 0-16.1 4.3-7.3 4.3-11.6 11.6-4.3 7.4-4.3 16.1 0 8.7 4.3 16.1 4.3 7.3 11.6 11.6 7.4 4.3 16.1 4.3 8.7 0 16.1-4.3 7.3-4.3 11.6-11.6 4.3-7.4 4.3-16.1 0-8.7-4.3-16.1-4.3-7.3-11.6-11.6z"
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
