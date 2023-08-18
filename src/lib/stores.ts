import { writable, type Writable } from 'svelte/store';

export let showWelcomer = writable(false);
export let showGrub = writable(false);
export let showZorin = writable(false);
export let showTaskbar = writable(true);

export type Apps =
    | 'Brave'
    | 'VSCode'
    | 'Fronvo'
    | 'Discord'
    | 'Spotify'
    | 'Shadofer';

export let openedApps: Writable<Apps[]> = writable([]);
