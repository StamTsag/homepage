export interface Socials {
    name: string;
    type: SocialsType;
    link?: string;
}

type SocialsType = 'github' | 'spotify' | 'instagram' | 'steam';
