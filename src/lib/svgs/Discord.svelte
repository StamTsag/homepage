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
        d="m62.7 48.1c-5.3 4-10.6 6.3-15.7 7.9q-1.9-2.5-3.3-5.4 2.7-1.1 5.3-2.6c-0.5-0.3-0.9-0.6-1.3-1-10.1 4.7-21.2 4.7-31.4 0q-0.6 0.6-1.3 1 2.6 1.5 5.3 2.6-1.4 2.9-3.3 5.4c-5.1-1.6-10.3-3.9-15.7-7.9-1.1-11.5 1.1-23.2 9.2-35.2 4-1.8 8.3-3.1 12.8-3.9 0.5 1 1.2 2.3 1.6 3.3q7.1-1 14.2 0c0.5-1 1.1-2.3 1.6-3.3 4.5 0.8 8.8 2.1 12.9 3.9 7 10.3 10.5 21.9 9.1 35.2zm-35.4-13.3c0-3.4-2.5-6.2-5.6-6.2-3.1 0-5.6 2.8-5.6 6.2 0 3.4 2.5 6.2 5.6 6.2 3.1 0 5.6-2.8 5.6-6.2zm20.6 0c0-3.4-2.5-6.2-5.6-6.2-3.1 0-5.6 2.8-5.6 6.2 0 3.4 2.5 6.2 5.6 6.2 3.1 0 5.6-2.8 5.6-6.2z"
    /></svg
>
