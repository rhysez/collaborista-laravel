import { Config } from 'ziggy-js';

export type Platform = string | null;

export interface User {
    id: number;
    name: string;
    username: string;
    bio: string;
    email: string;
    email_verified_at?: string;
    youtube: Platform;
    instagram: Platform;
    twitch: Platform;
    tiktok: Platform;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
