export interface Socials {
    name: string;
    type: SocialsType;
    link?: string;
}

type SocialsType = 'github' | 'discord' | 'spotify' | 'instagram' | 'steam';
