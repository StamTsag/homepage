export function scrollToId(id: string): void {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
    });
}
